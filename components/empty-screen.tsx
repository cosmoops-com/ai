export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-2xl bg-zinc-50 sm:p-8 p-4 text-sm sm:text-base">
        <h1 className="text-2xl sm:text-3xl tracking-tight font-semibold max-w-fit inline-block">
          CosmoOps AI Chatbot
        </h1>
        <p className="leading-normal text-zinc-900">
          Welcome!
        </p>
        <p className="leading-normal text-zinc-900">
          How can I make things easier for you?
        </p>
      </div>
    </div>
  )
}
