import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Check, ChevronDown, Mail, Menu, Quote } from "lucide-react"
import { persona } from "@/lib/persona"
import { WorkProof } from "@/components/work-proof"

const services = [
  { title: "SEO content strategy", text: "A clear editorial direction built around search intent, audience needs, and the questions your business is best placed to answer." },
  { title: "Content that earns attention", text: "Long-form pages, thought leadership, and conversion copy that make complex ideas feel useful, human, and easy to act on." },
  { title: "Technical SEO analysis", text: "Practical audits and prioritized recommendations that help search engines understand your site and readers find their way through it." },
]

const process = ["Listen for the real question", "Find the search opportunity", "Shape the clearest answer", "Measure what gets better"]

export default function Page() {
  return (
    <main>
      <nav className="site-nav mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <Link href="#top" className="font-serif text-xl font-semibold tracking-tight">HT<span className="text-accent">.</span></Link>
        <div className="hidden items-center gap-8 text-sm text-ink-muted md:flex">
          <Link href="#work" className="transition-colors hover:text-ink">Work</Link>
          <Link href="#services" className="transition-colors hover:text-ink">Services</Link>
          <Link href="#about" className="transition-colors hover:text-ink">About</Link>
          <Link href="#contact" className="rounded-full bg-ink px-5 py-2.5 text-paper transition-transform hover:-translate-y-0.5">Let&apos;s talk</Link>
        </div>
        <Link href="#contact" className="md:hidden" aria-label="Go to contact"><Menu className="size-5" /></Link>
      </nav>

      <section id="top" className="hero-section relative flex min-h-[calc(100svh-150px)] items-end overflow-hidden px-6 pb-14 pt-28 lg:px-10 lg:pb-20">
        <Image src="/editorial-seo.png" alt="Editorial workspace with content notes and analytics charts" fill className="hero-image object-cover grayscale" priority sizes="100vw" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <p className="eyebrow mb-7 text-paper/75"><span className="mr-2 inline-block size-2 rounded-full bg-accent" />SEO content writer &amp; analyst</p>
          <h1 className="max-w-3xl text-left font-sans text-3xl font-light leading-[1.08] tracking-[-0.035em] text-paper sm:text-4xl lg:text-5xl">I help businesses turn expertise into content that gets found, understood, and remembered.</h1>
        </div>
      </section>

      <section className="border-b border-line bg-paper-deep px-6 py-20 lg:px-10 lg:py-28"><div className="mx-auto max-w-4xl text-center"><Quote className="mx-auto size-7 text-accent" /><blockquote className="mt-6 font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">&ldquo;The clearest answer is usually the one people remember.&rdquo;</blockquote><p className="mt-6 text-sm text-ink-muted">A principle behind every content decision</p></div></section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36"><div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]"><div><p className="eyebrow">What I do</p><h2 className="mt-5 max-w-sm font-serif text-5xl leading-[0.98] tracking-tight text-ink lg:text-6xl">Clarity is a competitive advantage.</h2></div><div className="divide-y divide-line">{services.map((service) => <article key={service.title} className="py-7 first:pt-0"><div><h3 className="font-serif text-3xl text-ink">{service.title}</h3><p className="mt-3 max-w-xl leading-7 text-ink-muted">{service.text}</p></div></article>)}</div></div></section>

      <section id="work" className="bg-ink px-6 py-24 text-paper lg:px-10 lg:py-36"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="eyebrow text-paper/60">Selected work</p><h2 className="mt-5 max-w-2xl font-serif text-5xl leading-none tracking-tight lg:text-7xl">The work is the proof.</h2></div><p className="max-w-xs leading-7 text-paper/60">A few ways I&apos;ve helped brands move from “we should” to “we did.”</p></div><WorkProof /></div></section>

      <section id="about" className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-36"><div><p className="eyebrow">A little about me</p><p className="mt-6 font-serif text-4xl leading-tight text-ink">I like the intersection of sharp thinking and good sentences.</p></div><div className="max-w-2xl"><p className="text-2xl leading-relaxed text-ink">As an SEO content writer and analyst, I&apos;m interested in the space between what people search for and what they actually need.</p><p className="mt-6 leading-8 text-ink-muted">That means asking better questions, looking closely at the data, and making room for a point of view. I bring an editorial eye to the technical side of search — and a practical, measurable mindset to the creative side of content.</p><div className="mt-9 grid gap-4 sm:grid-cols-2">{["Search intent, not just search volume", "Content systems that compound", "Clear reporting and next steps", "A collaborative, calm process"].map((item) => <div key={item} className="flex items-center gap-3 border-t border-line pt-4 text-sm text-ink"><Check className="size-4 text-accent" />{item}</div>)}</div></div></section>

      <section className="border-y border-line bg-paper-deep"><div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.7fr_1.3fr] lg:px-10 lg:py-32"><div><p className="eyebrow">How it works</p><h2 className="mt-5 font-serif text-5xl leading-none text-ink">A thoughtful process, without the fog.</h2></div><div className="grid gap-0 sm:grid-cols-2">{process.map((item) => <div key={item} className="border-t border-line py-6"><p className="font-serif text-2xl text-ink">{item}</p></div>)}</div></div></section>

      <section id="journal" className="mx-auto max-w-7xl px-6 pb-24 lg:px-10 lg:pb-36"><div className="border-t border-line pt-8"><div className="flex items-end justify-between"><div><p className="eyebrow">From the journal</p><h2 className="mt-4 font-serif text-5xl text-ink">Notes on being findable.</h2></div><ChevronDown className="hidden size-6 text-accent md:block" /></div><div className="mt-12 grid gap-8 md:grid-cols-3">{["What search intent teaches us about empathy", "The quiet power of a useful content brief", "A better way to read an SEO report"].map((title) => <article key={title} className="border-t border-line pt-5"><p className="font-mono text-xs text-accent">FIELD NOTES</p><h3 className="mt-8 font-serif text-2xl leading-tight text-ink">{title}</h3><Link href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink">Read the note <ArrowUpRight className="size-4" /></Link></article>)}</div></div></section>

      <section id="contact" className="bg-accent px-6 py-20 text-paper lg:px-10 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"><div><p className="eyebrow text-paper/70">Have a good question?</p><h2 className="mt-5 max-w-3xl font-serif text-6xl leading-[0.9] tracking-tight lg:text-8xl">Let&apos;s make it easier to find the answer.</h2></div><div className="max-w-md lg:pb-2"><p className="text-lg leading-8 text-paper/80">Tell me what you&apos;re working on, what you need help with, and where you want to go next. I&apos;ll read it personally and get back to you.</p><div className="mt-8 flex flex-wrap gap-4"><a href="https://docs.google.com/forms/d/e/1FAIpQLSftix1QWE4SNIH2TxF9vp4bcXCQe_fX1CFS8vrop5mAAbHpdA/viewform?usp=header" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5">Fill out the project form <ArrowUpRight className="size-4" /></a><a href={`mailto:${persona.email}`} className="inline-flex items-center gap-2 rounded-full border border-paper/40 px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-paper/10">Email me · {persona.email} <Mail className="size-4" /></a></div><div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-paper/70"><a href="https://linkedin.com/in/heshiha-thangamani-7581a0193" target="_blank" rel="noreferrer" aria-label="Visit Heshiha on LinkedIn" className="inline-flex items-center gap-2 rounded-full border border-paper/50 px-4 py-2 text-paper transition-colors hover:bg-paper/10"><span aria-hidden="true" className="flex size-5 items-center justify-center rounded-sm bg-paper text-xs font-bold text-accent">in</span> LinkedIn</a></div></div></div></section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 text-sm text-ink-muted md:flex-row md:items-center md:justify-between lg:px-10"><p>© 2026 {persona.name}</p><div className="flex flex-wrap gap-6"><a href="#top" className="hover:text-ink">Back to top</a><a href="https://linkedin.com/in/heshiha-thangamani-7581a0193" target="_blank" rel="noreferrer" aria-label="Visit Heshiha on LinkedIn" className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 hover:text-ink"><span aria-hidden="true" className="flex size-4 items-center justify-center rounded-sm bg-ink text-[10px] font-bold text-paper">in</span> LinkedIn</a><a href={`mailto:${persona.email}`} className="inline-flex items-center gap-2 hover:text-ink"><Mail className="size-4" /> Email me</a></div></footer>
    </main>
  )
}
