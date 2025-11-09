import type { Metadata } from 'next'
import Link from 'next/link'

import PageHeader from '@/app/shared/PageHeader'

export const metadata: Metadata = {
  title: 'Customer Portal',
}

const PortalPage = () => {
  return (
    <main className="bg-[#07130e] text-emerald-50">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(60,227,123,0.2),_transparent_70%)]" />
        <PageHeader
          title="GPU Doctor customer portal"
          description="Sign in at portal.gpudoctor.com to manage repairs, orders, billing information, and saved PC builds from one secure dashboard."
        />
      </div>

      <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-10 xl:px-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="space-y-6 rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-8">
            <h2 className="text-xl font-semibold text-emerald-200">Dashboard overview</h2>
            <p className="text-sm text-emerald-50/80">
              The portal brings all of your data together. Review intake forms, approvals, invoices, and shipping details in a single
              feed. Every event is timestamped and exportable so you always have proof of service.
            </p>
            <ul className="space-y-3 text-sm text-emerald-50/75">
              <li>• Quick view widgets for active repairs, upcoming maintenance, and outstanding invoices.</li>
              <li>• Timeline history showing diagnostics, approvals, payments, and courier scans.</li>
              <li>• Downloadable PDF packets containing work summaries and certification badges.</li>
            </ul>
          </article>
          <aside className="space-y-6 rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-8 text-sm text-emerald-50/80">
            <h2 className="text-xl font-semibold text-emerald-200">Security</h2>
            <p>
              Enable two-factor authentication, session alerts, and hardware ownership verification. Add trusted contacts who can approve
              quotes or access documents without sharing your password.
            </p>
            <Link className="inline-flex items-center text-xs font-semibold text-emerald-100 hover:text-emerald-50" href="/support">
              Review account policies →
            </Link>
          </aside>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {[
            {
              title: 'Repairs & maintenance',
              description:
                'Open or closed tickets, technician notes, rush upgrades, warranty status, and scheduled maintenance visits.',
            },
            {
              title: 'Orders & billing',
              description:
                'Download invoices, update payment methods, manage VAT details, and review subscription maintenance plans.',
            },
            {
              title: 'Addresses & logistics',
              description:
                'Store pickup addresses, courier preferences, customs documents, and automatically generate insured labels.',
            },
            {
              title: 'Marketplace & consignments',
              description:
                'Track listed items, consignments, refurbish add-ons, and buyer releases. Upload new photos or request packaging support.',
            },
            {
              title: 'PC builds & saved configurations',
              description:
                'Save custom builds, compare parts, and push selections straight to your repair or purchase requests.',
            },
            {
              title: 'Notifications & permissions',
              description:
                'Choose how you receive updates—email, SMS, or webhook—and assign teammates to approve work on your behalf.',
            },
          ].map(({ title, description }) => (
            <div key={title} className="rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-6">
              <h3 className="text-lg font-semibold text-emerald-200">{title}</h3>
              <p className="mt-3 text-sm text-emerald-50/80">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default PortalPage
