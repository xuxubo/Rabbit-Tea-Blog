enum Message {
  Increment
  Decrement
}

struct Model {
  count : Int
}

fn update(msg : Message, model : Model) -> (@tea.Command[Message], Model) {
  match msg {
    Increment => (@tea.none(), { count: model.count + 1 })
    Decrement => (@tea.none(), { count: @math.maximum(0, model.count - 1) })
  }
}

fn button_view(value : String, msg : Message) -> @html.Html[Message] {
  let class = "p-4 bg-pink-200 w-24 rounded-lg select-none text-center hover:-translate-y-1 hover:shadow-lg active:bg-pink-300 active:shadow-sm transition-all"
  @html.div(click=msg, ~class, [@html.text(value)])
}

fn title_view(title : String) -> @html.Html[Message] {
  @html.h1(
    class="text-2xl font-bold text-center select-none",
    [@html.text(title)],
  )
}

fn view(model : Model) -> @html.Html[Message] {
  @html.div(
    class="w-[600px] h-[100px] m-10",
    [
      title_view("Counter \{model.count}"),
      @html.div(
        class="flex justify-center gap-8 m-8",
        [button_view("+", Increment), button_view("-", Decrement)],
      ),
    ],
  )
}

/// NOTE: This prgram is only available in the js backend, 
/// see README.md to getting started.
fn main {
  let model = { count: 0 }
  @tea.startup(~model, ~update, ~view)
}
