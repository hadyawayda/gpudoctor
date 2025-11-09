import type { Metadata } from 'next'
import Link from 'next/link'

import PageHeader from '@/app/_components/PageHeader'

import { serviceCatalog } from '../_data/site'

export const metadata: Metadata = {
  title: 'Services',
  description: 'GPU diagnostics, repairs, cooling upgrades, firmware tuning, and enterprise SLAs tailored for performance hardware.',
}

const ServicesPage = () => {
  const categories = Array.from(new Set(serviceCatalog.map((service) => service.category)))

  return (
    <main className="bg-slate-950 pb-24 text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-500/20 via-slate-950 to-slate-950" />
        <PageHeader
          title="GPU services engineered for performance"
          description="Choose from diagnostics, solder-level repairs, thermal rebuilds, and firmware optimisation packages. Every service includes telemetry exports, Atlas AI notes, and 24-month warranty coverage."
          actions={
            <Link
              href="/repair-requests"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 hover:from-emerald-300 hover:via-cyan-300 hover:to-sky-400"
            >
              Start a repair intake
            </Link>
          }
        />
      </div>

      <section className="mx-auto max-w-6xl px-6 lg:px-10 xl:px-16">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <div key={category} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <header className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-emerald-200">{category}</h2>
              </header>
              <ul className="mt-6 space-y-5 text-sm text-slate-200">
                {serviceCatalog
                  .filter((service) => service.category === category)
                  .map(({ name, description, price, turnaround, badge }) => (
                    <li key={name} className="rounded-2xl border border-emerald-500/10 bg-emerald-500/5 p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-base font-semibold text-white">{name}</p>
                          <p className="mt-2 leading-6 text-slate-200">{description}</p>
                        </div>
                        <div className="text-right text-sm font-semibold text-emerald-300">
                          <p>{price}</p>
                          <p className="mt-1 text-xs text-emerald-200/80">{turnaround}</p>
                        </div>
                      </div>
                      {badge ? (
                        <p className="mt-4 inline-flex rounded-full bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 px-3 py-1 text-xs font-semibold text-emerald-200">
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
          <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-8 text-slate-900">
            <h2 className="text-2xl font-semibold">Atlas AI repair assistance</h2>
            <p className="mt-4 text-slate-900/80">
              Atlas lives on our support subdomain and works alongside technicians. Upload crash logs, scope captures, or photos
              and receive actionable insights in minutes. Atlas can pre-fill RMA paperwork, suggest service bundles, and schedule
              consultations for complex cases.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-900/70">
              <li>• Automatically correlates symptoms with our repair database.</li>
              <li>• Generates timeline updates you can share with your team.</li>
              <li>• Integrates with Slack, Discord, and email for proactive alerts.</li>
            </ul>
            <Link
              href="/community"
              className="mt-6 inline-flex items-center text-sm font-semibold text-slate-900 underline decoration-emerald-500 decoration-2"
            >
              Meet Atlas and the community →
            </Link>
          </div>
          <div className="rounded-3xl border border-emerald-500/10 bg-white/5 p-8 text-slate-200">
            <h2 className="text-2xl font-semibold text-emerald-200">Service bundles</h2>
            <p className="mt-3 text-sm">
              Combine diagnostics, refurbishment, and performance tuning for even faster turnaround times.
            </p>
            <dl className="mt-6 space-y-5 text-sm">
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <dt className="font-semibold text-white">Rapid Revival</dt>
                <dd className="mt-2 text-slate-200">
                  Deep-dive diagnostics, micro-soldering repair, and 24-hour burn-in. Ideal for esports teams preparing for
                  tournaments.
                </dd>
                <p className="mt-3 text-xs font-semibold text-emerald-300">$389 • 3 day turnaround</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <dt className="font-semibold text-white">Creator Refresh</dt>
                <dd className="mt-2 text-slate-200">
                  Graphene thermal rebuild, VBIOS calibration, and Atlas-tuned fan curves for editing workstations.
                </dd>
                <p className="mt-3 text-xs font-semibold text-emerald-300">$329 • 4 day turnaround</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <dt className="font-semibold text-white">Enterprise SLA</dt>
                <dd className="mt-2 text-slate-200">
                  Data center rapid swap, extended burn-in certification, and on-site installation support.
                </dd>
                <p className="mt-3 text-xs font-semibold text-emerald-300">Custom quote • Priority queue</p>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ServicesPage
