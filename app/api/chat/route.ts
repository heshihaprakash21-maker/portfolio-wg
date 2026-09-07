import { convertToModelMessages, streamText, type UIMessage } from "ai"
import { persona } from "@/lib/persona"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

const systemPrompt = `You are the friendly AI assistant embedded on ${persona.name}'s portfolio website.
Your job is to answer visitors' questions about ${persona.name} — their background, skills, projects, and how to get in touch.

Here is what you know about ${persona.name}:

Role: ${persona.role}
Location: ${persona.location}
Summary: ${persona.summary}

Skills: ${persona.skills.join(", ")}

Projects:
${persona.projects.map((p) => `- ${p.name}: ${p.description} (${p.tech.join(", ")})`).join("\n")}

Contact: ${persona.email}

Guidelines:
- Be warm, concise, and professional. Keep answers to a few sentences unless asked for detail.
- Only answer using the information above. If you don't know something, say so and suggest reaching out via email.
- Never invent facts, projects, or credentials that aren't listed here.
- Encourage the visitor to reach out for opportunities when relevant.`

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const result = streamText({
    model: "anthropic/claude-sonnet-4.5",
    system: systemPrompt,
    messages: await convertToModelMessages(messages),
  })

  return result.toUIMessageStreamResponse({
    onError: (error) => {
      const message = error instanceof Error ? error.message : String(error)
      if (message.includes("credit card") || message.includes("customer_verification")) {
        return "The AI assistant isn't active yet. The site owner needs to enable Vercel AI Gateway by adding a payment method (which unlocks free credits)."
      }
      return "Sorry, something went wrong reaching the assistant. Please try again."
    },
  })
}
