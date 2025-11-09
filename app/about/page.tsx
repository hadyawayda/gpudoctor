import type { Metadata } from 'next'

import PageHeader from '@/app/_components/PageHeader'

import { landingMetrics, repairMilestones } from '../_data/site'

export const metadata: Metadata = {
  title: 'About',
}

const AboutPage = () => {
  return (
    <main className="bg-slate-950 text-white">
      <PageHeader
        title="About GPU Doctor"
        description="We are a collective of GPU specialists, micro-soldering engineers, and builders creating a full-stack platform for graphics hardware care."
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 xl:px-16">
        <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 text-sm text-slate-200">
          <p>
            Founded in 2016, GPU Doctor started as a micro-soldering lab repairing mining rigs. Today we operate climate-controlled
            facilities on three continents, blending manufacturer-grade tooling with Atlas AI diagnostics. Every repair generates
            a shareable telemetry report so you always know what changed and why it matters.
          </p>
          <p>
            Our technicians focus on Ada, RDNA, and Hopper architectures, but we support legacy hardware for broadcast studios,
            esports arenas, and research labs. Sustainability drives our marketplace—trade-ins are refurbished, benchmarked, and
            given fresh warranties to keep silicon in circulation.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {landingMetrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-emerald-500/10 bg-emerald-500/5 p-4 text-center">
                <p className="text-lg font-semibold text-emerald-300">{metric.value}</p>
                <p className="mt-1 text-xs text-slate-300">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
        <aside className="space-y-6">
          <div className="rounded-3xl border border-emerald-500/10 bg-emerald-500/10 p-6 text-sm text-emerald-200">
            <p className="text-lg font-semibold text-white">Mission</p>
            <p className="mt-3 text-xs text-emerald-200/80">
              Extend the life of every GPU through precise repairs, transparent data, and community-driven collaboration.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200">
            <h2 className="text-lg font-semibold text-emerald-200">Milestones</h2>
            <ul className="mt-3 space-y-3 text-xs text-slate-300">
              <li>2016 – Micro-soldering lab established with custom VRM probe rigs.</li>
              <li>2019 – Launched Atlas AI assistant to triage repair tickets.</li>
              <li>2022 – Introduced GPU marketplace with refurbish add-ons.</li>
              <li>2024 – PC builder with clearance and wattage simulation.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200">
            <h2 className="text-lg font-semibold text-emerald-200">Our process</h2>
            <ol className="mt-3 space-y-2 text-xs text-slate-300">
              {repairMilestones.slice(0, 3).map((milestone) => (
                <li key={milestone.title}>{milestone.title} – {milestone.description}</li>
              ))}
            </ol>
          </div>
        </aside>
      </section>
    </main>
  )
}

export default AboutPage
