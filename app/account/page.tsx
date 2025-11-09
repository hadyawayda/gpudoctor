import type { Metadata } from 'next'
import Link from 'next/link'

import PageHeader from '@/app/_components/PageHeader'

import { repairHistory } from '../_data/site'

export const metadata: Metadata = {
  title: 'Account',
}

const AccountPage = () => {
  return (
    <main className="bg-slate-950 text-white">
      <PageHeader
        title="Your GPU Doctor account"
        description="Track repairs, manage marketplace listings, and sync Atlas AI notifications across your devices."
        actions={
          <div className="flex flex-wrap gap-3">
            <Link
              href="/login"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 hover:from-emerald-300 hover:via-cyan-300 hover:to-sky-400"
            >
              Sign in
            </Link>
            <Link
              href="/account/history"
              className="inline-flex items-center rounded-full border border-emerald-400/60 px-5 py-3 text-sm font-semibold text-emerald-200 hover:border-emerald-300 hover:text-emerald-100"
            >
              View full history
            </Link>
          </div>
        }
      />
      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 xl:px-16">
        <div className="space-y-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-sm text-slate-200">
            <h2 className="text-lg font-semibold text-emerald-200">Dashboard highlights</h2>
            <ul className="mt-4 space-y-3">
              <li>• Monitor repair milestones with live telemetry and technician notes.</li>
              <li>• Approve quotes, add refurbish packages, and book courier pickups.</li>
              <li>• Sync Atlas AI troubleshooting threads with Slack, Discord, or email.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-lg font-semibold text-emerald-200">Recent activity</h2>
            <table className="mt-4 w-full border-collapse text-left text-xs text-slate-200">
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
                  <tr key={entry.id} className="border-t border-white/10">
                    <td className="py-3 pr-4 font-semibold text-white">{entry.id}</td>
                    <td className="py-3 pr-4 text-slate-300">{entry.device}</td>
                    <td className="py-3 pr-4 text-emerald-200">{entry.status}</td>
                    <td className="py-3 text-emerald-300">{entry.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Link
              href="/account/history"
              className="mt-4 inline-flex items-center text-xs font-semibold text-emerald-200 hover:text-emerald-100"
            >
              See full history →
            </Link>
          </div>
        </div>
        <aside className="space-y-8">
          <div className="rounded-3xl border border-emerald-500/10 bg-slate-900/70 p-6 text-sm text-slate-200">
            <h2 className="text-lg font-semibold text-emerald-200">Marketplace controls</h2>
            <p className="mt-3 text-xs text-slate-300">
              Manage your buy & sell listings, enable refurbish add-ons, and release payments when hardware passes verification.
            </p>
            <Link
              href="/marketplace"
              className="mt-5 inline-flex items-center text-xs font-semibold text-emerald-200 hover:text-emerald-100"
            >
              Open marketplace dashboard →
            </Link>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200">
            <h2 className="text-lg font-semibold text-emerald-200">Atlas AI notifications</h2>
            <p className="mt-3 text-xs text-slate-300">
              Configure alerts for temperature spikes, completed repairs, and community mentions. Atlas syncs across mobile, web,
              and Discord.
            </p>
            <Link
              href="/community"
              className="mt-5 inline-flex items-center text-xs font-semibold text-emerald-200 hover:text-emerald-100"
            >
              Customize alerts →
            </Link>
          </div>
        </aside>
      </section>
    </main>
  )
}

export default AccountPage
