import type { Metadata } from 'next'
import Link from 'next/link'

import PageHeader from '@/app/_components/PageHeader'

import { repairHistory } from '../_data/site'

export const metadata: Metadata = {
  title: 'Account',
}

const AccountPage = () => {
  return (
    <main className="bg-[color:var(--surface-950)] text-[color:var(--text-base)]">
      <PageHeader
        title="Your GPU Doctor account"
        description="Track repairs, manage marketplace listings, and connect to the portal for invoices, saved builds, and billing details."
        actions={
          <div className="flex flex-wrap gap-3">
            <Link
              href="/login"
              className="inline-flex items-center rounded-full bg-[color:var(--accent-primary)] px-5 py-3 text-sm font-semibold text-[color:var(--surface-950)] shadow-lg shadow-[rgba(61,214,140,0.25)] hover:bg-[color:var(--accent-secondary)] hover:text-[color:var(--surface-900)]"
            >
              Sign in
            </Link>
            <Link
              href="/portal"
              className="inline-flex items-center rounded-full border border-[color:var(--accent-secondary)]/60 px-5 py-3 text-sm font-semibold text-[color:var(--accent-secondary)] hover:border-[color:var(--accent-secondary)]"
            >
              Open the portal
            </Link>
          </div>
        }
      />
      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 xl:px-16">
        <div className="space-y-8">
          <div className="rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/75 p-8 text-sm">
            <h2 className="text-lg font-semibold text-[color:var(--text-strong)]">Dashboard highlights</h2>
            <ul className="mt-4 space-y-3 text-[color:var(--text-base)]">
              <li>• Monitor repair milestones with detailed reports and shipping updates.</li>
              <li>• Approve quotes, add refurbishment packages, and schedule pickups.</li>
              <li>• Access invoices, saved builds, and warranty status from the portal.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/75 p-8">
            <h2 className="text-lg font-semibold text-[color:var(--text-strong)]">Recent activity</h2>
            <table className="mt-4 w-full border-collapse text-left text-xs text-[color:var(--text-base)]">
              <thead>
                <tr className="text-[color:var(--text-muted)]">
                  <th className="pb-2 pr-4 font-semibold">Ticket</th>
                  <th className="pb-2 pr-4 font-semibold">Device</th>
                  <th className="pb-2 pr-4 font-semibold">Status</th>
                  <th className="pb-2 font-semibold">Cost</th>
                </tr>
              </thead>
              <tbody>
                {repairHistory.map((entry) => (
                  <tr key={entry.id} className="border-t border-[color:var(--border-subtle)]">
                    <td className="py-3 pr-4 font-semibold text-[color:var(--text-strong)]">{entry.id}</td>
                    <td className="py-3 pr-4 text-[color:var(--text-base)]">{entry.device}</td>
                    <td className="py-3 pr-4 text-[color:var(--accent-secondary)]">{entry.status}</td>
                    <td className="py-3 text-[color:var(--accent-secondary)]">{entry.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Link
              href="/portal"
              className="mt-4 inline-flex items-center text-xs font-semibold text-[color:var(--accent-secondary)] hover:text-[color:var(--accent-secondary)]/80"
            >
              See full history →
            </Link>
          </div>
        </div>
        <aside className="space-y-8">
          <div className="rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)]/85 p-6 text-sm">
            <h2 className="text-lg font-semibold text-[color:var(--text-strong)]">Marketplace controls</h2>
            <p className="mt-3 text-[color:var(--text-base)]">
              Manage your buy and sell listings, enable refurbishment add-ons, and release payments once hardware clears
              certification.
            </p>
            <Link
              href="/marketplace"
              className="mt-5 inline-flex items-center text-xs font-semibold text-[color:var(--accent-secondary)] hover:text-[color:var(--accent-secondary)]/80"
            >
              Open marketplace dashboard →
            </Link>
          </div>
          <div className="rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/75 p-6 text-sm">
            <h2 className="text-lg font-semibold text-[color:var(--text-strong)]">Profile management</h2>
            <p className="mt-3 text-[color:var(--text-base)]">
              Update billing and shipping addresses, manage stored payment methods, and control warranty reminders.
            </p>
            <Link
              href="/portal"
              className="mt-5 inline-flex items-center text-xs font-semibold text-[color:var(--accent-secondary)] hover:text-[color:var(--accent-secondary)]/80"
            >
              Manage my profile →
            </Link>
          </div>
        </aside>
      </section>
    </main>
  )
}

export default AccountPage
