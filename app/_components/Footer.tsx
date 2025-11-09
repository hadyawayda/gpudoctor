'use client'

import { useCallback } from 'react'
import Link from 'next/link'

import SocialLinks from './Socials'

const Footer = () => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <footer className="bg-[#0a1511] text-emerald-100">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-20 lg:px-10 xl:px-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-emerald-200">GPU Doctor</h2>
              <p className="max-w-xl text-sm text-emerald-100/80">
                Precision GPU repairs, refurbishments, and curated hardware with policies that put technicians and customers
                first. Every intake includes written timelines, a refundable rush option, and documented service evidence.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <nav className="space-y-3 text-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">Explore</p>
                <Link className="block hover:text-emerald-200" href="/services">
                  Services
                </Link>
                <Link className="block hover:text-emerald-200" href="/store">
                  Store
                </Link>
                <Link className="block hover:text-emerald-200" href="/marketplace">
                  Marketplace
                </Link>
                <Link className="block hover:text-emerald-200" href="/builds">
                  Build your PC
                </Link>
              </nav>
              <nav className="space-y-3 text-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">Get support</p>
                <Link className="block hover:text-emerald-200" href="/repair-requests">
                  Schedule a repair
                </Link>
                <Link className="block hover:text-emerald-200" href="/sell">
                  Sell your GPU
                </Link>
                <Link className="block hover:text-emerald-200" href="/portal">
                  Customer portal
                </Link>
                <Link className="block hover:text-emerald-200" href="/support">
                  Support center
                </Link>
              </nav>
            </div>
          </div>
          <div className="space-y-8">
            <div className="rounded-3xl border border-emerald-500/20 bg-[#10261d] p-6 text-sm text-emerald-100/90">
              <p className="text-lg font-semibold text-emerald-100">Need expedited service?</p>
              <p className="mt-3 text-xs text-emerald-100/70">
                Email support@gpudoctor.com to secure a 7-day rush slot or review the 6-week standard queue. Diagnostic fees
                are credited toward any approved work.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-xs">
                <Link
                  href="mailto:support@gpudoctor.com"
                  className="rounded-full border border-emerald-400/60 px-4 py-2 font-semibold hover:border-emerald-300 hover:text-emerald-50"
                >
                  support@gpudoctor.com
                </Link>
                <Link
                  href="tel:+18005551234"
                  className="rounded-full border border-emerald-400/60 px-4 py-2 font-semibold hover:border-emerald-300 hover:text-emerald-50"
                >
                  +1 (800) 555-1234
                </Link>
              </div>
            </div>
            <div className="rounded-3xl border border-emerald-500/15 bg-[#0e2018] p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">Follow GPU Doctor</p>
              <div className="mt-4">
                <SocialLinks />
              </div>
              <button
                type="button"
                onClick={scrollToTop}
                className="mt-6 inline-flex items-center rounded-full border border-emerald-400/60 px-5 py-3 text-xs font-semibold text-emerald-100 hover:border-emerald-300 hover:text-emerald-50"
              >
                Back to top
              </button>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-emerald-500/20 pt-6 text-xs text-emerald-100/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} GPU Doctor. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link className="hover:text-emerald-200" href="/privacy">
              Privacy Policy
            </Link>
            <Link className="hover:text-emerald-200" href="/terms">
              Terms of Use
            </Link>
            <Link className="hover:text-emerald-200" href="/shipping">
              Shipping & Logistics
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
