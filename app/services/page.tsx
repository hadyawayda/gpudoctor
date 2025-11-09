import type { Metadata } from 'next'
import Link from 'next/link'

import PageHeader from '@/app/_components/PageHeader'

import { serviceCatalog } from '../_data/site'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Diagnostics, refurbishment, cooling, maintenance, and certification packages for GPUs of every generation.',
}

const ServicesPage = () => {
  const categories = Array.from(new Set(serviceCatalog.map((service) => service.category)))

  return (
    <main className="bg-[color:var(--surface-950)] pb-24 text-[color:var(--text-base)]">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(61,214,140,0.2),_transparent_75%)]" />
        <PageHeader
          title="GPU services engineered for reliability"
          description="Choose the repair path that fits your schedule. Every job starts with a comprehensive diagnostic report and ends with a burn-in certificate and warranty options."
          actions={
            <Link
              href="/repair-requests"
              className="inline-flex items-center rounded-full bg-[color:var(--accent-primary)] px-5 py-3 text-sm font-semibold text-[color:var(--surface-950)] shadow-lg shadow-[rgba(61,214,140,0.25)] hover:bg-[color:var(--accent-secondary)] hover:text-[color:var(--surface-900)]"
            >
              Book diagnostics
            </Link>
          }
        />
      </div>

      <section className="mx-auto max-w-6xl px-6 lg:px-10 xl:px-16">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <div key={category} className="rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/75 p-6">
              <header className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-[color:var(--text-strong)]">{category}</h2>
              </header>
              <ul className="mt-6 space-y-5 text-sm text-[color:var(--text-base)]">
                {serviceCatalog
                  .filter((service) => service.category === category)
                  .map(({ name, description, price, turnaround, badge }) => (
                    <li key={name} className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)]/85 p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-base font-semibold text-[color:var(--text-strong)]">{name}</p>
                          <p className="mt-2 leading-6 text-[color:var(--text-base)]">{description}</p>
                        </div>
                        <div className="text-right text-sm font-semibold text-[color:var(--accent-secondary)]">
                          <p>{price}</p>
                          <p className="mt-1 text-xs text-[color:var(--text-muted)]">{turnaround}</p>
                        </div>
                      </div>
                      {badge ? (
                        <p className="mt-4 inline-flex rounded-full bg-[color:var(--accent-primary)]/15 px-3 py-1 text-xs font-semibold text-[color:var(--accent-secondary)]">
                          {badge}
                        </p>
                      ) : null}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-6 lg:px-10 xl:px-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/80 p-8 text-[color:var(--text-base)]">
            <h2 className="text-2xl font-semibold text-[color:var(--text-strong)]">Turnaround choices</h2>
            <p className="mt-4 text-[color:var(--text-base)]">
              Standard repairs follow a six-week pipeline with status updates each week. Expedited repairs guarantee bench time
              within 24 hours of approval and return shipping within seven days.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-[color:var(--text-muted)]">
              <li>• Diagnostic fees are credited when you approve a repair.</li>
              <li>• Warranty starts at 1 week and can be extended to 6 weeks for $59.</li>
              <li>• Thermal paste and pad upgrades can be bundled with any repair.</li>
            </ul>
            <Link
              href="/shipping"
              className="mt-6 inline-flex items-center text-sm font-semibold text-[color:var(--accent-secondary)] hover:text-[color:var(--accent-secondary)]/80"
            >
              Review shipping policy →
            </Link>
          </div>
          <div className="rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)]/85 p-8 text-[color:var(--text-base)]">
            <h2 className="text-2xl font-semibold text-[color:var(--text-strong)]">Popular bundles</h2>
            <dl className="mt-6 space-y-5 text-sm">
              <div className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/70 p-5">
                <dt className="font-semibold text-[color:var(--text-strong)]">Refurbish + Certification</dt>
                <dd className="mt-2 text-[color:var(--text-base)]">
                  Combine refurbishment with the GPU Doctor Certified inspection to prepare a card for resale or redeployment.
                </dd>
                <p className="mt-3 text-xs font-semibold text-[color:var(--accent-secondary)]">$189 • 3-day turnaround</p>
              </div>
              <div className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/70 p-5">
                <dt className="font-semibold text-[color:var(--text-strong)]">Maintenance membership</dt>
                <dd className="mt-2 text-[color:var(--text-base)]">
                  Quarterly cleanings, firmware validation, and shipping coordination so fleet hardware stays healthy.
                </dd>
                <p className="mt-3 text-xs font-semibold text-[color:var(--accent-secondary)]">$24 / month • Cancel anytime</p>
              </div>
              <div className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/70 p-5">
                <dt className="font-semibold text-[color:var(--text-strong)]">Expedited + Warranty</dt>
                <dd className="mt-2 text-[color:var(--text-base)]">
                  Pair the one-week turnaround with a six-week warranty extension and priority shipping both ways.
                </dd>
                <p className="mt-3 text-xs font-semibold text-[color:var(--accent-secondary)]">$408 • 7-day turnaround</p>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ServicesPage
