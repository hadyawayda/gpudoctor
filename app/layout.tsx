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
    'Expert GPU diagnostics, repairs, and performance upgrades delivered with meticulous attention to detail.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 font-sans">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
