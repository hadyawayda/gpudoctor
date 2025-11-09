import type { Metadata } from 'next'

import PageHeader from '@/app/_components/PageHeader'

import { landingMetrics, repairMilestones } from '../_data/site'

export const metadata: Metadata = {
  title: 'About',
}

const AboutPage = () => {
  return (
    <main className="bg-[#07130e] text-emerald-50">
      <PageHeader
        title="About GPU Doctor"
        description="We are a collective of GPU specialists, micro-soldering engineers, and builders creating a full-stack platform for graphics hardware care."
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 xl:px-16">
        <div className="space-y-6 rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-8 text-sm text-emerald-50/80">
          <p>
            Founded in 2016, GPU Doctor started as a micro-soldering lab supporting mining rigs. Today we run climate-controlled
            facilities on three continents with manufacturer-grade tooling, documented workflows, and technicians who specialise
            in modern Ada, RDNA, and Hopper architectures. Every repair produces a written report, photos, and stress results that
            live inside your customer portal.
          </p>
          <p>
            Our mandate is to protect both your hardware and your rights as a technician or owner. Diagnostic fees, expedited
            lanes, and warranty extensions are all published upfront. Whether you schedule maintenance, request refurbishment, or
            sell hardware through our marketplace, the paperwork you need for resale, insurance, and compliance is always
            available for download.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {landingMetrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-emerald-500/20 bg-[#0d2018]/80 p-4 text-center">
                <p className="text-lg font-semibold text-emerald-200">{metric.value}</p>
                <p className="mt-1 text-xs text-emerald-50/70">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
        <aside className="space-y-6">
          <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-6 text-sm text-emerald-200">
            <p className="text-lg font-semibold text-emerald-50">Mission</p>
            <p className="mt-3 text-xs text-emerald-200/80">
              Extend the life of every GPU through precise repairs, transparent data, and community-driven collaboration.
            </p>
          </div>
          <div className="rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-6 text-sm text-emerald-50/80">
            <h2 className="text-lg font-semibold text-emerald-200">Milestones</h2>
            <ul className="mt-3 space-y-3 text-xs text-emerald-50/70">
              <li>2016 – Micro-soldering lab established with custom VRM probe rigs.</li>
              <li>2019 – Introduced prepaid insured shipping labels for every intake.</li>
              <li>2021 – Launched expedited seven-day repair lane with refund guarantee.</li>
              <li>2023 – Debuted GPU Doctor Certified resale program and maintenance plans.</li>
              <li>2024 – Rolled out the customer portal with full documentation access.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-6 text-sm text-emerald-50/80">
            <h2 className="text-lg font-semibold text-emerald-200">Our process</h2>
            <ol className="mt-3 space-y-2 text-xs text-emerald-50/70">
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
