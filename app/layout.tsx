import type { Metadata } from 'next'
import './globals.css'

import Footer from './_components/Footer'
import Navbar from './_components/Navbar'

type ViewportConfig = {
  width?: string | number
  height?: string | number
  initialScale?: number
  minimumScale?: number
  maximumScale?: number
  userScalable?: boolean
  viewportFit?: 'auto' | 'cover' | 'contain'
  interactiveWidget?: 'resizes-visual' | 'resizes-content' | 'overlays-content'
}

export const metadata: Metadata = {
  title: {
    default: 'GPU Doctor',
    template: '%s | GPU Doctor',
  },
  description:
    'Expert GPU diagnostics, repairs, and performance upgrades delivered with meticulous attention to detail.',
}

export const viewport: ViewportConfig = {
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
