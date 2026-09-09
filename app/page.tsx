import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Check, ChevronDown, Mail, Menu, Quote } from "lucide-react"
import { PortfolioChat } from "@/components/portfolio-chat"
import { persona } from "@/lib/persona"

const services = [
  { number: "01", title: "SEO content strategy", text: "A clear editorial direction built around search intent, audience needs, and the questions your business is best placed to answer." },
  { number: "02", title: "Content that earns attention", text: "Long-form pages, thought leadership, and conversion copy that make complex ideas feel useful, human, and easy to act on." },
  { number: "03", title: "Technical SEO analysis", text: "Practical audits and prioritized recommendations that help search engines understand your site and readers find their way through it." },
]

const projects = [
  { tag: "B2B / SaaS", title: "Making a technical product feel obvious", text: "A search-led content system for a workflow platform: positioning, pillar pages, and a publishing rhythm designed to compound." },
  { tag: "Professional services", title: "Turning expertise into a point of view", text: "A founder-led thought leadership program that translated years of specialist experience into a voice people could remember." },
  { tag: "Research / Strategy", title: "Finding the signal in the data", text: "A technical and content audit that surfaced the fastest opportunities, connected them to business goals, and gave a team a way forward." },
]

const process = ["Listen for the real question", "Find the search opportunity", "Shape the clearest answer", "Measure what gets better"]

export default function Page() {
  return (
    <main>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <Link href="#top" className="font-serif text-xl font-semibold tracking-tight">HT<span className="text-accent">.</span></Link>
        <div className="hidden items-center gap-8 text-sm text-ink-muted md:flex">
          <Link href="#work" className="transition-colors hover:text-ink">Work</Link>
          <Link href="#services" className="transition-colors hover:text-ink">Services</Link>
          <Link href="#about" className="transition-colors hover:text-ink">About</Link>
          <Link href="#contact" className="rounded-full bg-ink px-5 py-2.5 text-paper transition-transform hover:-translate-y-0.5">Let&apos;s talk</Link>
        </div>
        <Link href="#contact" className="md:hidden" aria-label="Go to contact"><Menu className="size-5" /></Link>
      </nav>

      <section id="top" className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:px-10 lg:pb-32 lg:pt-28">
        <div>
          <p className="eyebrow mb-7"><span className="mr-2 inline-block size-2 rounded-full bg-accent" />SEO content writer &amp; analyst</p>
          <h1 className="max-w-3xl font-serif text-6xl leading-[0.93] tracking-[-0.045em] text-ink sm:text-7xl lg:text-[8.5rem]">Good content makes <em className="text-accent">finding</em> feel easy.</h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-ink-muted">I&apos;m {persona.name}. I help thoughtful businesses turn what they know into content that gets found, gets understood, and gets remembered.</p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Link href="#contact" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5">Start a conversation <ArrowUpRight className="size-4" /></Link>
            <Link href="#work" className="text-sm font-medium text-ink underline decoration-accent underline-offset-8">See selected work</Link>
          </div>
        </div>
        <div className="relative min-h-[22rem] overflow-hidden rounded-[2rem] bg-ink lg:min-h-[34rem]">
          <Image src="/editorial-seo.png" alt="Editorial workspace with content notes and analytics charts" fill className="object-cover opacity-90 mix-blend-screen" priority sizes="(max-width: 1024px) 100vw, 45vw" />
          <div className="absolute inset-x-6 bottom-6 flex items-end justify-between text-paper"><p className="max-w-[12rem] font-serif text-2xl leading-tight">Strategy, with a human voice.</p><span className="font-mono text-xs text-paper/60">/ 2026</span></div>
        </div>
      </section>

      <section className="border-y border-line bg-paper-deep">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-6 text-sm text-ink-muted md:flex-row md:items-center md:justify-between lg:px-10"><span>Currently building better search experiences for</span><div className="flex flex-wrap gap-x-8 gap-y-2 font-serif text-lg text-ink"><span>curious teams</span><span>clear thinkers</span><span>useful businesses</span></div></div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36"><div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]"><div><p className="eyebrow">What I do</p><h2 className="mt-5 max-w-sm font-serif text-5xl leading-[0.98] tracking-tight text-ink lg:text-6xl">Clarity is a competitive advantage.</h2></div><div className="divide-y divide-line">{services.map((service) => <article key={service.number} className="grid gap-5 py-7 first:pt-0 md:grid-cols-[4rem_1fr]"><span className="font-mono text-xs text-accent">{service.number}</span><div><h3 className="font-serif text-3xl text-ink">{service.title}</h3><p className="mt-3 max-w-xl leading-7 text-ink-muted">{service.text}</p></div></article>)}</div></div></section>

      <section id="work" className="bg-ink px-6 py-24 text-paper lg:px-10 lg:py-36"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="eyebrow text-paper/60">Selected work</p><h2 className="mt-5 max-w-2xl font-serif text-5xl leading-none tracking-tight lg:text-7xl">The work is the proof.</h2></div><p className="max-w-xs leading-7 text-paper/60">A few ways I&apos;ve helped brands move from “we should” to “we did.”</p></div><div className="mt-16 grid gap-px bg-paper/20 md:grid-cols-3">{projects.map((project, index) => <article key={project.title} className="group flex min-h-[24rem] flex-col justify-between bg-ink p-7 transition-colors hover:bg-ink-soft"><div><p className="eyebrow text-accent">{project.tag}</p><h3 className="mt-16 font-serif text-3xl leading-tight">{project.title}</h3></div><div><p className="leading-7 text-paper/60">{project.text}</p><span className="mt-6 inline-flex size-10 items-center justify-center rounded-full border border-paper/30 transition-colors group-hover:border-accent group-hover:bg-accent"><ArrowUpRight className="size-4" /></span></div></article>)}</div></div></section>

      <section id="about" className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-36"><div><p className="eyebrow">A little about me</p><p className="mt-6 font-serif text-4xl leading-tight text-ink">I like the intersection of sharp thinking and good sentences.</p></div><div className="max-w-2xl"><p className="text-2xl leading-relaxed text-ink">As an SEO content writer and analyst, I&apos;m interested in the space between what people search for and what they actually need.</p><p className="mt-6 leading-8 text-ink-muted">That means asking better questions, looking closely at the data, and making room for a point of view. I bring an editorial eye to the technical side of search — and a practical, measurable mindset to the creative side of content.</p><div className="mt-9 grid gap-4 sm:grid-cols-2">{["Search intent, not just search volume", "Content systems that compound", "Clear reporting and next steps", "A collaborative, calm process"].map((item) => <div key={item} className="flex items-center gap-3 border-t border-line pt-4 text-sm text-ink"><Check className="size-4 text-accent" />{item}</div>)}</div></div></section>

      <section className="border-y border-line bg-paper-deep"><div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.7fr_1.3fr] lg:px-10 lg:py-32"><div><p className="eyebrow">How it works</p><h2 className="mt-5 font-serif text-5xl leading-none text-ink">A thoughtful process, without the fog.</h2></div><div className="grid gap-0 sm:grid-cols-2">{process.map((item, index) => <div key={item} className="border-t border-line py-6"><span className="font-mono text-xs text-accent">0{index + 1}</span><p className="mt-4 font-serif text-2xl text-ink">{item}</p></div>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36"><div className="mx-auto max-w-3xl text-center"><Quote className="mx-auto size-8 text-accent" /><blockquote className="mt-6 font-serif text-4xl leading-tight text-ink lg:text-5xl">“The best SEO content doesn&apos;t sound like SEO content. It sounds like the answer you were hoping to find.”</blockquote><p className="mt-7 text-sm text-ink-muted">A belief I bring to every brief</p></div></section>

      <section id="journal" className="mx-auto max-w-7xl px-6 pb-24 lg:px-10 lg:pb-36"><div className="border-t border-line pt-8"><div className="flex items-end justify-between"><div><p className="eyebrow">From the journal</p><h2 className="mt-4 font-serif text-5xl text-ink">Notes on being findable.</h2></div><ChevronDown className="hidden size-6 text-accent md:block" /></div><div className="mt-12 grid gap-8 md:grid-cols-3">{["What search intent teaches us about empathy", "The quiet power of a useful content brief", "A better way to read an SEO report"].map((title, i) => <article key={title} className="border-t border-line pt-5"><p className="font-mono text-xs text-accent">0{i + 1} / FIELD NOTES</p><h3 className="mt-8 font-serif text-2xl leading-tight text-ink">{title}</h3><Link href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink">Read the note <ArrowUpRight className="size-4" /></Link></article>)}</div></div></section>

      <section id="contact" className="bg-accent px-6 py-20 text-paper lg:px-10 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end"><div><p className="eyebrow text-paper/70">Have a good question?</p><h2 className="mt-5 max-w-3xl font-serif text-6xl leading-[0.9] tracking-tight lg:text-8xl">Let&apos;s make it easier to find the answer.</h2><a href={`mailto:${persona.email}`} className="mt-10 inline-flex items-center gap-2 text-lg underline underline-offset-8">{persona.email} <ArrowUpRight className="size-5" /></a></div><div className="rounded-2xl bg-paper p-1 text-ink"><PortfolioChat /></div></div></section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 text-sm text-ink-muted md:flex-row md:items-center md:justify-between lg:px-10"><p>© 2026 {persona.name}</p><div className="flex gap-6"><a href="#top" className="hover:text-ink">Back to top</a><a href={`mailto:${persona.email}`} className="inline-flex items-center gap-2 hover:text-ink"><Mail className="size-4" /> Email me</a></div></footer>
    </main>
  )
}
