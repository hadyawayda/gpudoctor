import type { Metadata, Viewport } from 'next'
import './globals.css'

import Footer from './shared/Footer'
import Navbar from './shared/Navbar'

export const metadata: Metadata = {
  title: {
    default: 'GPU Doctor',
    template: '%s | GPU Doctor',
  },
  description:
    'Expert GPU diagnostics, repairs, and performance upgrades delivered with meticulous attention to detail.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0a1612] text-emerald-50 font-sans">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
