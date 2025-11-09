import type { Metadata, Viewport } from 'next'
import './globals.css'

import Footer from './_components/Footer'
import Navbar from './_components/Navbar'

export const metadata: Metadata = {
  title: {
    default: 'GPU Doctor',
    template: '%s | GPU Doctor',
  },
  description:
    'GPU Doctor provides trusted diagnostics, expedited repairs, refurbishment, and curated hardware for graphics professionals.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-transparent text-[color:var(--text-base)] antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
