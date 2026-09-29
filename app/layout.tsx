import { Analytics } from '@vercel/analytics/next'
import { Inter, JetBrains_Mono, Newsreader } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { JsonLd } from '@/components/json-ld'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const newsreader = Newsreader({ subsets: ['latin'], variable: '--font-newsreader' })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' })

export const metadata: Metadata = {
  metadataBase: new URL('https://heshiha.com'),
  title: 'SEO Content Writer & Analyst in Chennai | Heshi Consultancy',
  description: 'SEO content writer & analyst in Chennai, India. Strategy, blog content & technical SEO audits for B2B, SaaS & healthcare brands. Request a quote.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'SEO Content Writer & Analyst in Chennai | Heshi Consultancy',
    description: 'SEO content strategy, editorial writing, and technical audits for B2B, SaaS, and healthcare brands.',
    type: 'website',
    url: '/',
    siteName: 'Heshi Consultancy',
    images: [{ url: '/editorial-seo.png', width: 1200, height: 630, alt: 'Editorial workspace with content notes and analytics charts' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Content Writer & Analyst in Chennai | Heshi Consultancy',
    description: 'SEO content strategy, editorial writing, and technical audits for B2B, SaaS, and healthcare brands.',
    images: ['/editorial-seo.png'],
  },
  generator: 'v0.app',
  icons: {
    icon: '/icon-512.png',
    apple: '/icon-512.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable} ${jetbrains.variable}`}>
      <body className="antialiased">
        <JsonLd />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
