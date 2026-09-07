"use client"

import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { useEffect, useRef, useState } from "react"
import { ArrowUp, Sparkles } from "lucide-react"
import { persona } from "@/lib/persona"

const suggestions = [
  "What are your strongest skills?",
  "Tell me about your projects",
  "How can I get in touch?",
]

export function PortfolioChat() {
  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  })
  const [input, setInput] = useState("")
  const scrollRef = useRef<HTMLDivElement>(null)
  const busy = status === "submitted" || status === "streaming"

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })
  }, [messages, status])

  function submit(text: string) {
    const trimmed = text.trim()
    if (!trimmed || busy) return
    sendMessage({ text: trimmed })
    setInput("")
  }

  return (
    <div className="flex h-[32rem] flex-col overflow-hidden rounded-xl border border-border bg-card">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="flex size-7 items-center justify-center rounded-full bg-brand text-brand-foreground">
          <Sparkles className="size-4" aria-hidden="true" />
        </span>
        <div className="leading-tight">
          <p className="text-sm font-medium">Ask about {persona.name.split(" ")[0]}</p>
          <p className="text-xs text-muted-foreground">Powered by Claude</p>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
        {messages.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
            <p className="max-w-xs text-pretty text-sm text-muted-foreground">
              Hi! I&apos;m an AI assistant that can answer questions about {persona.name}&apos;s work and experience.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {suggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => submit(s)}
                  className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={message.role === "user" ? "flex justify-end" : "flex justify-start"}
            >
              <div
                className={
                  message.role === "user"
                    ? "max-w-[80%] rounded-2xl rounded-br-sm bg-brand px-3.5 py-2 text-sm text-brand-foreground"
                    : "max-w-[80%] rounded-2xl rounded-bl-sm bg-muted px-3.5 py-2 text-sm text-foreground"
                }
              >
                {message.parts.map((part, i) =>
                  part.type === "text" ? <span key={i}>{part.text}</span> : null,
                )}
              </div>
            </div>
          ))
        )}
        {status === "submitted" && (
          <div className="flex justify-start">
            <div className="rounded-2xl rounded-bl-sm bg-muted px-3.5 py-2.5">
              <span className="flex gap-1">
                <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]" />
                <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]" />
                <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground" />
              </span>
            </div>
          </div>
        )}
        {error && (
          <div className="flex justify-start">
            <div className="max-w-[85%] rounded-lg border border-destructive/40 bg-destructive/10 px-3.5 py-2 text-sm text-destructive">
              {error.message || "Something went wrong. Please try again."}
            </div>
          </div>
        )}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          submit(input)
        }}
        className="flex items-center gap-2 border-t border-border p-3"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing && e.keyCode !== 229) {
              e.preventDefault()
              submit(input)
            }
          }}
          placeholder="Ask me anything..."
          className="flex-1 rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Message"
        />
        <button
          type="submit"
          disabled={busy || !input.trim()}
          className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand text-brand-foreground transition-opacity disabled:opacity-40"
          aria-label="Send message"
        >
          <ArrowUp className="size-4" />
        </button>
      </form>
    </div>
  )
}
