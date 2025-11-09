import type { Metadata } from 'next'
import Link from 'next/link'

import PageHeader from '@/app/_components/PageHeader'

export const metadata: Metadata = {
  title: 'User portal',
  description: 'Access repair history, invoices, saved builds, payment methods, and communication preferences in one secure place.',
}

const featureColumns = [
  {
    title: 'Repair management',
    items: [
      'Live status with timestamps, photos, and technician notes.',
      'Approve estimates, add refurbishment services, or pause work.',
      'Download stress-test reports and warranty certificates.',
    ],
  },
  {
    title: 'Account & billing',
    items: [
      'Store multiple addresses and set shipping preferences.',
      'Manage payment methods, invoices, and tax receipts.',
      'Enable warranty reminders and scheduled maintenance bookings.',
    ],
  },
  {
    title: 'Marketplace & builds',
    items: [
      'Monitor consignment sales and release payouts when items sell.',
      'Save PC builds, compare parts, and export BOMs for ordering.',
      'Track carts across devices and share quotes with clients.',
    ],
  },
]

const securityHighlights = [
  {
    title: 'Role-based access',
    description: 'Invite teammates or clients with granular permissions for viewing tickets, invoices, or build configurations.',
  },
  {
    title: 'Two-factor authentication',
    description: 'Secure your portal with email, authenticator app, or hardware keys. Session history is visible at any time.',
  },
  {
    title: 'Audit-ready exports',
    description: 'Generate CSV or PDF summaries of repairs, purchases, and warranty expirations for bookkeeping.',
  },
]

const PortalPage = () => {
  return (
    <main className="bg-[color:var(--surface-950)] text-[color:var(--text-base)]">
      <PageHeader
        title="portal.gpudoctor.com"
        description="The dedicated customer portal centralises every interaction with GPU Doctor, from diagnostics and shipping to billing and saved PC builds."
        actions={
          <div className="flex flex-wrap gap-3">
            <Link
              href="/login"
              className="inline-flex items-center rounded-full bg-[color:var(--accent-primary)] px-5 py-3 text-sm font-semibold text-[color:var(--surface-950)] shadow-lg shadow-[rgba(61,214,140,0.25)] hover:bg-[color:var(--accent-secondary)] hover:text-[color:var(--surface-900)]"
            >
              Launch the portal
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-[color:var(--accent-secondary)]/60 px-5 py-3 text-sm font-semibold text-[color:var(--accent-secondary)] hover:border-[color:var(--accent-secondary)]"
            >
              Request an account walkthrough
            </Link>
          </div>
        }
      />

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10 xl:px-16">
        <div className="grid gap-8 rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/70 p-8 backdrop-blur lg:grid-cols-3">
          {featureColumns.map((column) => (
            <div key={column.title} className="space-y-4">
              <h2 className="text-lg font-semibold text-[color:var(--text-strong)]">{column.title}</h2>
              <ul className="space-y-3 text-sm text-[color:var(--text-base)]">
                {column.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-10 xl:px-16">
        <div className="rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)]/85 p-8">
          <h2 className="text-2xl font-semibold text-[color:var(--text-strong)]">Security & compliance</h2>
          <p className="mt-3 text-sm text-[color:var(--text-base)]">
            The portal is built for technicians and studios that require traceability. Role-based access, detailed audit logs, and
            exportable documentation make it easy to prove how every board was handled.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {securityHighlights.map((highlight) => (
              <article key={highlight.title} className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/75 p-6">
                <h3 className="text-base font-semibold text-[color:var(--text-strong)]">{highlight.title}</h3>
                <p className="mt-3 text-xs leading-6 text-[color:var(--text-base)]">{highlight.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default PortalPage
