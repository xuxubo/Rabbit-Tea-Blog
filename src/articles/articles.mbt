// 文章卡片数据（从 md 粗提取标题/摘要/时长）

///|
struct ArticleCard {
  name : String
  title : String
  subtitle : String
  minutes : Int
  content : String
  loaded : Bool
  error : String?
}

///|
enum ArticleMsg {
  LoadList
  ListLoaded(Result[@list.List[String], String])
  LoadOne(String)
  OneLoaded(String, Result[String, String])
  LoadMore // 新增：加载更多
  NoOp
}

///|
struct ArticleModel {
  phase : String
  loading : Bool
  error : String?
  names : @list.List[String]
  items : @list.List[ArticleCard]
  page_size : Int // 每批加载数量
  loaded_count : Int // 已经发起加载的数量
}

///|
fn article_src_url(name : String) -> String {
  // 简单拼接；如需编码，在这里统一 encode（如果有可用的编码函数）
  "https://gitcode.com/weixin_41992365/MoonBitBlog/blob/main/articles/" + name
}

///|
fn trim_simple(s : String) -> String {
  // 简易去空白：去掉首尾的空格、制表符、回车、换行
  let mut start = 0
  let mut end = s.length()
  // 前向
  while start < end {
    let c = s.at(start)
    if c == ' ' || c == '\t' || c == '\r' || c == '\n' {
      start = start + 1
    } else {
      break
    }
  }
  // 后向
  while end > start {
    let c = s.at(end - 1)
    if c == ' ' || c == '\t' || c == '\r' || c == '\n' {
      end = end - 1
    } else {
      break
    }
  }
  s.unsafe_substring(start~, end~)
}

///|
fn starts_with_str(s : String, prefix : String) -> Bool {
  if prefix.length() > s.length() {
    return false
  }
  s.unsafe_substring(start=0, end=prefix.length()) == prefix
}

///|
fn batchLoadRange(
  names : @list.List[String],
  start : Int,
  count : Int,
) -> (@tea.Cmd[ArticleMsg], Int) {
  // 从 names 中取子区间
  let total = names.length()
  if start >= total || count <= 0 {
    return (@tea.none(), 0)
  }
  let mut cmds : @list.List[@tea.Cmd[ArticleMsg]] = @list.of([])
  let mut i = 0
  let mut taken = 0
  // 线性走一遍，取 [start, start+count)
  for name in names.iter() {
    if i >= start && taken < count {
      cmds = cmds.add(getArticleDetailBy(name))
      taken = taken + 1
    }
    i = i + 1
    if taken >= count {
      break
    }
  }
  let batch = @tea.batch(cmds.to_array())
  (batch, taken)
}

///|
fn split_lines(text : String) -> @list.List[String] {
  // 手写分行，支持 \n 和 \r\n
  let mut acc : @list.List[String] = @list.of([])
  let mut i = 0
  let n = text.length()
  let mut line_start = 0
  while i < n {
    let ch = text.at(i)
    if ch == '\n' {
      acc = acc.add(text.unsafe_substring(start=line_start, end=i))
      i = i + 1
      line_start = i
    } else if ch == '\r' {
      acc = acc.add(text.unsafe_substring(start=line_start, end=i))
      // 跳过 \r\n 的 \n
      if i + 1 < n && text.at(i + 1) == '\n' {
        i = i + 2
      } else {
        i = i + 1
      }
      line_start = i
    } else {
      i = i + 1
    }
  }
  // 尾行
  if line_start <= n {
    acc = acc.add(text.unsafe_substring(start=line_start, end=n))
  }
  acc
}

///|
fn getArticleNamesText() -> @tea.Cmd[ArticleMsg] {
  @http.get(
    "/raw/main/articels.config",
    expect=Text(fn(res : Result[String, String]) -> ArticleMsg {
      match res {
        Ok(t) => {
          let lines = split_lines(t)
          // 手动构建 names：trim + 过滤空行与 # 注释
          let mut names : @list.List[String] = @list.of([])
          for line in lines.iter() {
            let s = trim_simple(line)
            if s != "" && !starts_with_str(s, "#") {
              names = names.add(s)
            }
          }
          ListLoaded(Ok(names))
        }
        Err(e) => ListLoaded(Err(e))
      }
    }),
  )
}

///|
fn getArticleDetailBy(name : String) -> @tea.Cmd[ArticleMsg] {
  let path = "/raw/main/articles/" + name
  @http.get(
    path,
    expect=Text(fn(res : Result[String, String]) -> ArticleMsg {
      OneLoaded(name, res)
    }),
  )
}

///|
fn renderCard(card : ArticleCard) -> @html.Html[ArticleMsg] {
  let content = card.content
  let lines = content.split("\n").to_array()
  // 标题：取首行并清理井号与空白
  let title = if lines.length() > 0 {
    lines[0].replace_all(old="#", new="")
  } else {
    "标题"
  }

  // 摘要：取第二行
  let subtitle = if lines.length() > 1 {
    lines[1].replace_all(old="#", new="")
  } else {
    "副标题"
  }
  div(class="article-card", [
    // 可选封面
    // div(class="article-image", [text(card.name.replace_all(old=".md", new=""))]),
    div(class="article-content", [
      div(class="article-image", [
        text(card.name.replace_all(old=".md", new="")),
      ]),
      div(class="article-meta", [
        span([text("📅 今日")]),
        span([text("⏱️ " + card.minutes.to_string() + "分钟阅读")]),
      ]),
      @html.a(class="article-title", href="#", [text(title.to_string())]),
      @html.p(class="article-excerpt", [text(subtitle.to_string())]),
      @html.a(
        class="read-more",
        style=[
          "margin-top:auto;align-self:flex-start;display:inline-block;color:#667eea;text-decoration:none;font-weight:600;transition:color 0.3s ease;",
        ],
        href=article_src_url(card.name),
        [text("阅读全文")],
      ),
    ]),
  ])
}

///|
fn articleListView(model : ArticleModel) -> @html.Html[ArticleMsg] {
  div([
    if model.phase == "list" && model.loading {
      div([text("正在加载文章列表...")])
    } else if model.error.is_some() {
      div([text(model.error.unwrap())])
    } else {
      div([
        // 卡片网格
        div(
          class="articles-grid",
          [
            ..model.names.map(fn(name) {
              let c = get_card(model.items, name)
              match c {
                Some(card) =>
                  if card.loaded && card.error.is_none() {
                    renderCard(card)
                  } else if card.loaded {
                    div(class="article-card", [
                      div(class="article-image", [text(card.name)]),
                      div(class="article-content", [
                        @html.p(class="article-excerpt", [text("加载失败")]),
                        // 提供重试
                        @html.button(click=LoadOne(card.name), [text("重试")]),
                      ]),
                    ])
                  } else {
                    div(class="article-card", [
                      div(class="article-content", [
                        @html.p(class="article-excerpt", [text("加载中...")]),
                      ]),
                    ])
                  }
                None =>
                  // 超出已加载范围的不渲染或给占位
                  div([])
              }
            }),
          ],
        ),
        // 加载更多按钮
        if model.names.length() > model.loaded_count {
          @html.div(class="load-more-wrap", [
            @html.button(click=LoadMore, class="load-more-btn", [
              text(if model.loading { "加载中..." } else { "加载更多" }),
            ]),
          ])
        } else {
          @html.div([text("已到底部")]) // 没有更多了，可换成提示文本
        },
      ])
    },
  ])
}

///|
fn initArticles() -> (@tea.Cmd[ArticleMsg], ArticleModel) {
  (
    getArticleNamesText(),
    {
      phase: "list",
      loading: true,
      error: None,
      names: @list.of([]),
      items: @list.of([]),
      page_size: 6, // 默认每次加载 6 篇，可自行修改
      loaded_count: 0,
    },
  )
}

///|
fn upsert_card(
  items : @list.List[ArticleCard],
  card : ArticleCard,
) -> @list.List[ArticleCard] {
  // 线性查找并替换；若不存在则 push
  let mut found = false
  let mut out : @list.List[ArticleCard] = @list.of([])
  for it in items.iter() {
    if it.name == card.name {
      out = out.add(card)
      found = true
    } else {
      out = out.add(it)
    }
  }
  if !found {
    out = out.add(card)
  }
  out
}

///|
fn get_card(items : @list.List[ArticleCard], name : String) -> ArticleCard? {
  for it in items.iter() {
    if it.name == name {
      return Some(it)
    }
  }
  None
}

///|
fn articleUpdate(
  msg : ArticleMsg,
  model : ArticleModel,
) -> (@tea.Cmd[ArticleMsg], ArticleModel) {
  match msg {
    LoadList =>
      (
        getArticleNamesText(),
        { ..model, phase: "list", loading: true, error: None, loaded_count: 0 },
      )
    ListLoaded(result) =>
      match result {
        Ok(names) => {
          // 首批：只加载 page_size 个
          let (batch, taken) = batchLoadRange(names, 0, model.page_size)
          (
            batch,
            {
              ..model,
              names,
              loading: true,
              phase: "items",
              error: None,
              loaded_count: taken, // 已请求数量
            },
          )
        }
        Err(e) =>
          (
            @tea.none(),
            { ..model, loading: false, error: Some("列表加载失败: " + e) },
          )
      }

    // 继续加载下一批
    LoadMore => {
      let start = model.loaded_count
      let (batch, taken) = batchLoadRange(model.names, start, model.page_size)
      if taken == 0 {
        // 没有更多了
        (@tea.none(), { ..model, loading: false })
      } else {
        (batch, { ..model, loading: true, loaded_count: start + taken })
      }
    }
    OneLoaded(name, result) =>
      match result {
        Ok(md) => {
          let lines = split_lines(md)
          let mut minutes = md.length() / 800 + 1
          if minutes < 1 {
            minutes = 1
          }
          let title = if lines.length() > 0 {
            trim_simple(lines.unsafe_head().replace_all(old="#", new=""))
          } else {
            "未命名文章"
          }
          let subtitle = if lines.length() > 1 {
            trim_simple(lines.unsafe_nth(1).replace_all(old="#", new=""))
          } else {
            ""
          }
          let new_card = {
            name,
            title: if title == "" {
              "未命名文章"
            } else {
              title
            },
            subtitle,
            minutes,
            content: md,
            loaded: true,
            error: None,
          }
          let items2 = upsert_card(model.items, new_card)

          // 判断当前已请求范围内是否都完成（可保持原逻辑）
          let mut done = true
          // 只检查前 loaded_count 个名字更合理
          let mut i = 0
          for n in model.names.iter() {
            if i >= model.loaded_count {
              break
            }
            let c = get_card(items2, n)
            match c {
              Some(card) => if !card.loaded { done = false }
              None => done = false
            }
            i = i + 1
          }
          (
            @tea.none(),
            {
              ..model,
              items: items2,
              loading: !done,
              phase: if done {
                "items"
              } else {
                "items"
              },
            },
          )
        }
        Err(e) => {
          let new_card = {
            name,
            title: "",
            subtitle: "",
            minutes: 1,
            content: "",
            loaded: true,
            error: Some(e),
          }
          let items2 = upsert_card(model.items, new_card)
          (@tea.none(), { ..model, items: items2 })
        }
      }
    LoadOne(name) =>
      // 手动重试单篇
      (getArticleDetailBy(name), { ..model, loading: true })
    NoOp => (@tea.none(), model)
  }
}

///|
fn startArticlesApp() -> Unit {
  fn initialize(url : @url.Url) -> (@tea.Cmd[ArticleMsg], ArticleModel) {
    initArticles()
  }

  @tea.application(
    initialize~,
    update=articleUpdate,
    view=articleListView,
    mount="articlesContainer",
  )
}

///|
/// 启动
fn main {
  startArticlesApp()
}
