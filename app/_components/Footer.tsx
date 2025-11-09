'use client'

import { useCallback } from 'react'
import Link from 'next/link'

import SocialLinks from './Socials'

const Footer = () => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-20 lg:px-10 xl:px-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-emerald-300">GPU Doctor</h2>
              <p className="mt-3 max-w-xl text-sm text-slate-300">
                Precision GPU repairs, curated hardware, and community-driven knowledge to keep your rigs running faster and
                cooler for longer.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <nav className="space-y-3 text-sm text-slate-200">
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">Explore</p>
                <Link className="block hover:text-emerald-200" href="/services">
                  Services
                </Link>
                <Link className="block hover:text-emerald-200" href="/products">
                  Products
                </Link>
                <Link className="block hover:text-emerald-200" href="/marketplace">
                  Marketplace
                </Link>
                <Link className="block hover:text-emerald-200" href="/builds">
                  PC Builder
                </Link>
              </nav>
              <nav className="space-y-3 text-sm text-slate-200">
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">Support</p>
                <Link className="block hover:text-emerald-200" href="/repair-requests">
                  Repair requests
                </Link>
                <Link className="block hover:text-emerald-200" href="/sell">
                  Sell your GPU
                </Link>
                <Link className="block hover:text-emerald-200" href="/community">
                  Community & Atlas AI
                </Link>
                <Link className="block hover:text-emerald-200" href="/account">
                  Account dashboard
                </Link>
              </nav>
            </div>
          </div>
          <div className="space-y-8">
            <div className="rounded-3xl border border-emerald-500/10 bg-emerald-500/10 p-6 text-sm text-emerald-200">
              <p className="text-lg font-semibold text-white">Need urgent support?</p>
              <p className="mt-3 text-xs text-emerald-200/80">
                Email support@gpudoctor.com or message us on Discord for priority repair assistance.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-xs">
                <Link href="mailto:support@gpudoctor.com" className="rounded-full border border-emerald-400/60 px-4 py-2 font-semibold hover:border-emerald-300 hover:text-emerald-100">
                  support@gpudoctor.com
                </Link>
                <Link href="https://discord.gg" className="rounded-full border border-emerald-400/60 px-4 py-2 font-semibold hover:border-emerald-300 hover:text-emerald-100">
                  Join Discord
                </Link>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">Follow us</p>
              <div className="mt-4">
                <SocialLinks />
              </div>
              <button
                type="button"
                onClick={scrollToTop}
                className="mt-6 inline-flex items-center rounded-full border border-emerald-400/60 px-5 py-3 text-xs font-semibold text-emerald-200 hover:border-emerald-300 hover:text-emerald-100"
              >
                Back to top
              </button>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} GPU Doctor. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link className="hover:text-emerald-200" href="/privacy">
              Privacy Policy
            </Link>
            <Link className="hover:text-emerald-200" href="/terms">
              Terms of Use
            </Link>
            <Link className="hover:text-emerald-200" href="/shipping">
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
