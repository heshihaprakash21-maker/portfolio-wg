const googleFormUrl = "https://forms.gle/7d3pzLU15JGQaJxg9"
const googleFormOpenUrl = "https://forms.gle/7d3pzLU15JGQaJxg9"

export function PortfolioChat() {
  return (
    <div className="flex h-[32rem] flex-col overflow-hidden rounded-xl border border-line bg-paper">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <div className="leading-tight">
          <p className="text-sm font-medium text-ink">Start a conversation</p>
          <p className="text-xs text-ink-muted">Share a few details and Heshiha will get back to you.</p>
        </div>
        <a href={googleFormOpenUrl} target="_blank" rel="noreferrer" className="text-xs font-medium text-accent underline underline-offset-4">Open form</a>
      </div>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSe9FhYx6C8S4UqkQ2aE1vLxZ0m9Qn7rT5uP3wK6jH8iG4fD2/viewform?embedded=true"
        title="Contact Heshiha Thangamani"
        className="min-h-0 flex-1 border-0 bg-paper"
        loading="lazy"
      />
    </div>
  )
}
