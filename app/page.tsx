import { PortfolioChat } from "@/components/portfolio-chat"
import { persona } from "@/lib/persona"
import { Mail, MapPin } from "lucide-react"

export default function Page() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-16 md:py-24">
      <header className="flex flex-col gap-4">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
          <span className="size-2 rounded-full bg-brand" aria-hidden="true" />
          Available for new opportunities
        </span>
        <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">{persona.name}</h1>
        <p className="text-lg text-muted-foreground md:text-xl">{persona.role}</p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-4" aria-hidden="true" />
            {persona.location}
          </span>
          <a href={`mailto:${persona.email}`} className="inline-flex items-center gap-1.5 hover:text-foreground">
            <Mail className="size-4" aria-hidden="true" />
            {persona.email}
          </a>
        </div>
      </header>

      <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-5 md:gap-16">
        <div className="space-y-14 md:col-span-3">
          <section aria-labelledby="about-heading">
            <h2 id="about-heading" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              About
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed">{persona.summary}</p>
          </section>

          <section aria-labelledby="skills-heading">
            <h2 id="skills-heading" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Skills
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {persona.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md border border-border bg-card px-3 py-1.5 text-sm text-card-foreground"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="projects-heading">
            <h2 id="projects-heading" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Selected Projects
            </h2>
            <div className="mt-4 space-y-3">
              {persona.projects.map((project) => (
                <article key={project.name} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-medium">{project.name}</h3>
                  <p className="mt-1.5 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <aside className="md:col-span-2">
          <div className="md:sticky md:top-12">
            <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">Chat with my AI</h2>
            <PortfolioChat />
          </div>
        </aside>
      </div>
    </main>
  )
}
