'use client'

import { useCallback } from 'react'
import Link from 'next/link'

import SocialLinks from './Socials'

const Footer = () => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <footer className="bg-[color:var(--surface-950)] text-[color:var(--text-base)]">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-20 lg:px-10 xl:px-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-[color:var(--text-strong)]">GPU Doctor</h2>
              <p className="mt-3 max-w-xl text-sm text-[color:var(--text-muted)]">
                Trusted diagnostics, refurbishment, and hardware sourcing for technicians, creators, and studios. Every board
                leaves our lab with a written report and the option to extend warranty coverage.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <nav className="space-y-3 text-sm text-[color:var(--text-base)]">
                <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--accent-secondary)]/90">Explore</p>
                <Link className="block hover:text-[color:var(--accent-secondary)]" href="/services">
                  Services
                </Link>
                <Link className="block hover:text-[color:var(--accent-secondary)]" href="/store">
                  Store
                </Link>
                <Link className="block hover:text-[color:var(--accent-secondary)]" href="/marketplace">
                  Marketplace
                </Link>
                <Link className="block hover:text-[color:var(--accent-secondary)]" href="/builds">
                  Build your PC
                </Link>
              </nav>
              <nav className="space-y-3 text-sm text-[color:var(--text-base)]">
                <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--accent-secondary)]/90">Support</p>
                <Link className="block hover:text-[color:var(--accent-secondary)]" href="/repair-requests">
                  Repair intake
                </Link>
                <Link className="block hover:text-[color:var(--accent-secondary)]" href="/sell">
                  Sell your GPU
                </Link>
                <Link className="block hover:text-[color:var(--accent-secondary)]" href="/portal">
                  User portal
                </Link>
                <Link className="block hover:text-[color:var(--accent-secondary)]" href="/resources">
                  Resources
                </Link>
              </nav>
            </div>
          </div>
          <div className="space-y-8">
            <div className="rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/80 p-6 text-sm text-[color:var(--text-base)]">
              <p className="text-lg font-semibold text-[color:var(--text-strong)]">Need expedited service?</p>
              <p className="mt-3 text-xs text-[color:var(--text-muted)]">
                Call +1 (512) 555-0198 or email support@gpudoctor.com to secure a one-week turnaround slot. Diagnostic fees are
                credited toward approved repairs.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-xs">
                <Link
                  href="mailto:support@gpudoctor.com"
                  className="rounded-full border border-[color:var(--accent-secondary)]/50 px-4 py-2 font-semibold text-[color:var(--text-strong)] hover:border-[color:var(--accent-secondary)] hover:text-[color:var(--accent-secondary)]"
                >
                  support@gpudoctor.com
                </Link>
                <Link
                  href="tel:+15125550198"
                  className="rounded-full border border-[color:var(--accent-secondary)]/50 px-4 py-2 font-semibold text-[color:var(--text-strong)] hover:border-[color:var(--accent-secondary)] hover:text-[color:var(--accent-secondary)]"
                >
                  +1 (512) 555-0198
                </Link>
              </div>
            </div>
            <div className="rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/80 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--accent-secondary)]/90">Stay in touch</p>
              <p className="mt-2 text-sm text-[color:var(--text-muted)]">
                Follow repair showcases, maintenance tips, and stock drops.
              </p>
              <div className="mt-5">
                <SocialLinks />
              </div>
              <button
                type="button"
                onClick={scrollToTop}
                className="mt-6 inline-flex items-center rounded-full border border-[color:var(--accent-secondary)]/50 px-5 py-3 text-xs font-semibold text-[color:var(--text-strong)] hover:border-[color:var(--accent-secondary)] hover:text-[color:var(--accent-secondary)]"
              >
                Back to top
              </button>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-[color:var(--border-subtle)] pt-6 text-xs text-[color:var(--text-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} GPU Doctor. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link className="hover:text-[color:var(--accent-secondary)]" href="/privacy">
              Privacy Policy
            </Link>
            <Link className="hover:text-[color:var(--accent-secondary)]" href="/terms">
              Terms of Use
            </Link>
            <Link className="hover:text-[color:var(--accent-secondary)]" href="/shipping">
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
