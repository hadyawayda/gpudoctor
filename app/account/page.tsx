import type { Metadata } from 'next'
import Link from 'next/link'

import PageHeader from '@/app/shared/PageHeader'

import { repairHistory } from '../_data/site'

export const metadata: Metadata = {
  title: 'Account',
}

const AccountPage = () => {
  return (
    <main className="bg-[#07130e] text-emerald-50">
      <PageHeader
        title="Your GPU Doctor account"
        description="Use portal.gpudoctor.com to track repairs, manage listings, and keep invoices, shipping labels, and warranties organized."
        actions={
          <div className="flex flex-wrap gap-3">
            <Link
              href="/login"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-300 px-5 py-3 text-sm font-semibold text-[#07130e] shadow-lg shadow-emerald-500/30 hover:from-emerald-300 hover:to-teal-200"
            >
              Sign in
            </Link>
            <Link
              href="/account/history"
              className="inline-flex items-center rounded-full border border-emerald-400/60 px-5 py-3 text-sm font-semibold text-emerald-100 hover:border-emerald-300 hover:text-emerald-50"
            >
              View full history
            </Link>
          </div>
        }
      />
      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 xl:px-16">
        <div className="space-y-8">
          <div className="rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-8 text-sm text-emerald-50/80">
            <h2 className="text-lg font-semibold text-emerald-200">Dashboard highlights</h2>
            <ul className="mt-4 space-y-3">
              <li>• Monitor repair milestones, technician notes, and warranty status in one timeline.</li>
              <li>• Approve quotes, add refurbish packages, and schedule insured pickups or drop-offs.</li>
              <li>• Download invoices, shipping labels, and certification paperwork any time.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-8">
            <h2 className="text-lg font-semibold text-emerald-200">Recent activity</h2>
            <table className="mt-4 w-full border-collapse text-left text-xs text-emerald-50/80">
              <thead>
                <tr className="text-emerald-200/80">
                  <th className="pb-2 pr-4 font-semibold">Ticket</th>
                  <th className="pb-2 pr-4 font-semibold">Device</th>
                  <th className="pb-2 pr-4 font-semibold">Status</th>
                  <th className="pb-2 font-semibold">Cost</th>
                </tr>
              </thead>
              <tbody>
                {repairHistory.map((entry) => (
                  <tr key={entry.id} className="border-t border-emerald-500/20">
                    <td className="py-3 pr-4 font-semibold text-emerald-100">{entry.id}</td>
                    <td className="py-3 pr-4 text-emerald-50/70">{entry.device}</td>
                    <td className="py-3 pr-4 text-emerald-200">{entry.status}</td>
                    <td className="py-3 text-emerald-200">{entry.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Link
              href="/account/history"
              className="mt-4 inline-flex items-center text-xs font-semibold text-emerald-100 hover:text-emerald-50"
            >
              See full history →
            </Link>
          </div>
        </div>
        <aside className="space-y-8">
          <div className="rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-6 text-sm text-emerald-50/80">
            <h2 className="text-lg font-semibold text-emerald-200">Marketplace controls</h2>
            <p className="mt-3 text-xs text-emerald-50/70">
              Manage your buy & sell listings, enable refurbish add-ons, and release payments when hardware passes verification.
            </p>
            <Link
              href="/marketplace"
              className="mt-5 inline-flex items-center text-xs font-semibold text-emerald-100 hover:text-emerald-50"
            >
              Open marketplace dashboard →
            </Link>
          </div>
          <div className="rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-6 text-sm text-emerald-50/80">
            <h2 className="text-lg font-semibold text-emerald-200">Portal settings</h2>
            <p className="mt-3 text-xs text-emerald-50/70">
              Update contact details, saved addresses, billing profiles, and two-factor authentication. Manage who on your team has
              access to approvals and downloads.
            </p>
            <Link
              href="/portal"
              className="mt-5 inline-flex items-center text-xs font-semibold text-emerald-100 hover:text-emerald-50"
            >
              Explore the customer portal →
            </Link>
          </div>
        </aside>
      </section>
    </main>
  )
}

export default AccountPage
