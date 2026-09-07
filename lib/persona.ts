// Edit this file to personalize your portfolio and the AI assistant's knowledge.
export const persona = {
  name: "Alex Rivera",
  role: "Full-Stack Engineer",
  location: "San Francisco, CA",
  email: "hello@alexrivera.dev",
  summary:
    "I build fast, accessible web applications with a focus on delightful user experiences. I care deeply about clean architecture, performance, and shipping products that people love to use.",
  skills: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Tailwind CSS",
    "AI / LLM integration",
    "System design",
  ],
  projects: [
    {
      name: "Lumen Analytics",
      description: "A real-time product analytics dashboard used by 200+ teams to track user behavior.",
      tech: ["Next.js", "PostgreSQL", "WebSockets"],
    },
    {
      name: "Draft AI",
      description: "An AI writing assistant that helps teams turn rough notes into polished documents.",
      tech: ["AI SDK", "React", "Edge Functions"],
    },
    {
      name: "Orbit Scheduler",
      description: "A collaborative calendar app with smart availability matching across time zones.",
      tech: ["TypeScript", "Node.js", "Redis"],
    },
  ],
} as const
