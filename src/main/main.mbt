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
  div(click=msg, ~class, [text(value)])
}

fn view(model : Model) -> @html.Html[Message] {
  div(
    class="w-[600px] h-[100px] m-10",
    [
      h1(
        class="text-2xl font-bold text-center select-none",
        [text("Counter \{model.count}")],
      ),
      div(
        class="flex justify-center gap-8 m-8",
        [button_view("+", Increment), button_view("-", Decrement)],
      ),
    ],
  )
}

/// NOTE: This program is only available in the js backend, 
/// see README.md to getting started.
fn main {
  let model = { count: 0 }
  @tea.startup(~model, ~update, ~view)
}
