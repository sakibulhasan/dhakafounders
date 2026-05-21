import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { SITE_META } from '@/lib/constants'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: `${SITE_META.name} — ${SITE_META.tagline}`,
    template: `%s | ${SITE_META.name}`,
  },
  description: SITE_META.description,
  metadataBase: new URL(SITE_META.url),
  openGraph: {
    type: 'website',
    siteName: SITE_META.name,
    title: SITE_META.name,
    description: SITE_META.description,
  },
  twitter: {
    card: 'summary_large_image',
    site: SITE_META.twitter,
    title: SITE_META.name,
    description: SITE_META.description,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
