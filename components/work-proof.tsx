"use client"

import { ArrowUpRight } from "lucide-react"

const proof = [
  {
    tag: "B2B / CLOUD TECHNOLOGY",
    title: "Making cloud migration decisions easier to understand",
    text: "A search-led explainer comparing AWS and GCP, translating a complex infrastructure decision into clear guidance for growing technology teams.",
    href: "https://claritytechlabs.com/blogs/cloud-migration-aws-vs-gcp-which-one-is-a-good-choice",
  },
  {
    tag: "HEALTHCARE / ORTHODONTICS",
    title: "Turning treatment costs into a clearer next step",
    text: "A patient-first Invisalign guide that answers the questions people ask before booking: insurance, pricing, treatment complexity, and payment options.",
    href: "https://helloortho.com/invisalign-cost-with-vs-without-insurance",
  },
  {
    tag: "HEALTHCARE / ORTHODONTICS",
    title: "Answering the questions patients are afraid to ask",
    text: "An empathetic braces guide built around search intent, helping patients understand discomfort, treatment stages, and what to expect next.",
    href: "https://centralcoastorthodontics.com/blogs/what-stage-of-braces-hurts-the-most",
  },
  {
    tag: "FASHION / ETHNIC WEAR",
    title: "Making traditional styling feel current",
    text: "A practical styling guide that turns a simple wardrobe question into useful, trend-aware advice for choosing the right blouse with a black saree.",
    href: "https://tulsisilks.co.in/blogs/choosing-the-right-blouse-colour-for-your-black-saree-classic-to-trendy-options",
  },
  {
    tag: "COMMERCIAL INTERIORS / GLASS",
    title: "Helping businesses choose better workspaces",
    text: "A comparison guide that makes the trade-offs between glass partitions and traditional walls easier to evaluate across light, privacy, cost, and flexibility.",
    href: "https://tridentglassservices.com.au/blog/glass-partitions-vs-traditional-walls-which-is-better-for-your-office",
  },
]

export function WorkProof() {
  return (
    <div className="mt-16">
      <div className="grid gap-px bg-paper/20 md:grid-cols-3">
        {proof.slice(0, 3).map((item) => <ProofCard key={item.href} item={item} />)}
      </div>
      <details className="group">
        <summary className="mx-auto mt-8 flex cursor-pointer list-none items-center justify-center gap-2 rounded-full border border-paper/30 px-5 py-3 text-sm text-paper transition-colors hover:border-accent hover:bg-accent [&::-webkit-details-marker]:hidden">
          View More <span className="transition-transform group-open:rotate-45">+</span>
        </summary>
        <div className="mt-8 grid gap-px bg-paper/20 md:grid-cols-2">
          {proof.slice(3).map((item) => <ProofCard key={item.href} item={item} />)}
        </div>
      </details>
    </div>
  )
}

function ProofCard({ item }: { item: (typeof proof)[number] }) {
  return (
    <article className="group flex min-h-[24rem] flex-col justify-between bg-ink p-7 transition-colors hover:bg-ink-soft">
      <div>
        <p className="eyebrow text-accent">{item.tag}</p>
        <h3 className="mt-16 font-serif text-3xl leading-tight">{item.title}</h3>
      </div>
      <div>
        <p className="leading-7 text-paper/60">{item.text}</p>
        <a href={item.href} target="_blank" rel="noreferrer" aria-label={`Read ${item.title}`} className="mt-6 inline-flex size-10 items-center justify-center rounded-full border border-paper/30 transition-colors group-hover:border-accent group-hover:bg-accent">
          <ArrowUpRight className="size-4" />
        </a>
      </div>
    </article>
  )
}
