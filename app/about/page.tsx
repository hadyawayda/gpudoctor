import type { Metadata } from 'next'

import PageHeader from '@/app/_components/PageHeader'

import { landingMetrics, repairMilestones } from '../_data/site'

export const metadata: Metadata = {
  title: 'About',
}

const AboutPage = () => {
  return (
    <main className="bg-[color:var(--surface-950)] text-[color:var(--text-base)]">
      <PageHeader
        title="About GPU Doctor"
        description="We are a collective of GPU specialists, micro-soldering engineers, and builders creating a full-stack platform for graphics hardware care."
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 xl:px-16">
        <div className="space-y-6 rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/70 p-8 text-sm">
          <p>
            Founded in 2016, GPU Doctor started as a micro-soldering lab repairing mining rigs. Today we operate climate-controlled facilities on three continents, blending manufacturer-grade tooling with meticulous documentation. Every repair generates a shareable report so you always know what changed and why it matters.
          </p>
          <p>
            Our technicians focus on Ada, RDNA, and Hopper architectures, but we also support legacy hardware for broadcast studios, esports arenas, and research labs. Sustainability drives our marketplace—trade-ins are refurbished, benchmarked, and given fresh warranties to keep silicon in circulation.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {landingMetrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)]/85 p-4 text-center">
                <p className="text-lg font-semibold text-[color:var(--accent-secondary)]">{metric.value}</p>
                <p className="mt-1 text-xs text-[color:var(--text-muted)]">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
        <aside className="space-y-6 text-sm">
          <div className="rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)]/85 p-6">
            <p className="text-lg font-semibold text-[color:var(--text-strong)]">Mission</p>
            <p className="mt-3 text-xs text-[color:var(--text-base)]">
              Extend the life of every GPU through precise repairs, transparent data, and responsible refurbishment.
            </p>
          </div>
          <div className="rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/70 p-6">
            <h2 className="text-lg font-semibold text-[color:var(--text-strong)]">Milestones</h2>
            <ul className="mt-3 space-y-3 text-xs text-[color:var(--text-base)]">
              <li>2016 – Micro-soldering lab established with custom VRM probe rigs.</li>
              <li>2019 – Expanded refurbishment program and marketplace trade-ins.</li>
              <li>2022 – Introduced certified marketplace with refurbishment add-ons.</li>
              <li>2024 – Launched portal with build planning and logistics tools.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/70 p-6">
            <h2 className="text-lg font-semibold text-[color:var(--text-strong)]">Our process</h2>
            <ol className="mt-3 space-y-2 text-xs text-[color:var(--text-base)]">
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
