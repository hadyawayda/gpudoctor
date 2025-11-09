'use client'

import { useCallback } from 'react'
import Link from 'next/link'

import SocialLinks from './Socials'

const Footer = () => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <footer className="bg-[#0d1f19] text-emerald-100 border-t border-nvidia-500/20">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-20 lg:px-10 xl:px-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-nvidia-300">GPU Doctor</h2>
              <p className="max-w-xl text-sm text-emerald-100/80">
                Precision GPU repairs, refurbishments, and curated hardware with policies that put technicians and customers
                first. Every intake includes written timelines, a refundable rush option, and documented service evidence.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <nav className="space-y-3 text-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-nvidia-400">Explore</p>
                <Link className="block hover:text-nvidia-300 transition-colors" href="/services">
                  Services
                </Link>
                <Link className="block hover:text-nvidia-300 transition-colors" href="/store">
                  Store
                </Link>
                <Link className="block hover:text-nvidia-300 transition-colors" href="/marketplace">
                  Marketplace
                </Link>
                <Link className="block hover:text-nvidia-300 transition-colors" href="/builds">
                  Build Your PC
                </Link>
              </nav>
              <nav className="space-y-3 text-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-nvidia-400">Get support</p>
                <Link className="block hover:text-nvidia-300 transition-colors" href="/repair-requests">
                  Request Repair
                </Link>
                <Link className="block hover:text-nvidia-300 transition-colors" href="/sell">
                  Sell Your GPU
                </Link>
                <Link className="block hover:text-nvidia-300 transition-colors" href="/portal">
                  Customer Portal
                </Link>
                <Link className="block hover:text-nvidia-300 transition-colors" href="/support">
                  Support Hub
                </Link>
              </nav>
            </div>
          </div>
          <div className="space-y-8">
            <div className="rounded-3xl border border-nvidia-500/20 bg-[#0a1612] p-6 text-sm text-emerald-100/90 hover:border-nvidia-500/30 transition-colors">
              <p className="text-lg font-semibold text-nvidia-300">Need expedited service?</p>
              <p className="mt-3 text-xs text-emerald-100/70">
                Email support@gpudoctor.com to secure a 7-day rush slot or review the 6-week standard queue. Diagnostic fees
                are credited toward any approved work.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-xs">
                <Link
                  href="mailto:support@gpudoctor.com"
                  className="rounded-full border border-nvidia-500/60 px-4 py-2 font-semibold hover:border-nvidia-400 hover:text-emerald-50 hover:bg-nvidia-500/10 transition-all"
                >
                  support@gpudoctor.com
                </Link>
                <Link
                  href="tel:+18005551234"
                  className="rounded-full border border-nvidia-500/60 px-4 py-2 font-semibold hover:border-nvidia-400 hover:text-emerald-50 hover:bg-nvidia-500/10 transition-all"
                >
                  +1 (800) 555-1234
                </Link>
              </div>
            </div>
            <div className="rounded-3xl border border-nvidia-500/15 bg-[#0a1612] p-6 hover:border-nvidia-500/25 transition-colors">
              <p className="text-xs font-semibold uppercase tracking-wide text-nvidia-400">Follow GPU Doctor</p>
              <div className="mt-4">
                <SocialLinks />
              </div>
              <button
                type="button"
                onClick={scrollToTop}
                className="mt-6 inline-flex items-center rounded-full border border-nvidia-500/60 px-5 py-3 text-xs font-semibold text-emerald-100 hover:border-nvidia-400 hover:text-emerald-50 hover:bg-nvidia-500/10 transition-all"
              >
                Back to top
              </button>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-nvidia-500/20 pt-6 text-xs text-emerald-100/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} GPU Doctor. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link className="hover:text-nvidia-300 transition-colors" href="/privacy">
              Privacy Policy
            </Link>
            <Link className="hover:text-nvidia-300 transition-colors" href="/terms">
              Terms of Use
            </Link>
            <Link className="hover:text-nvidia-300 transition-colors" href="/shipping">
              Shipping & Logistics
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
