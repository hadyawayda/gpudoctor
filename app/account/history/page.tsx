import type { Metadata } from 'next'

import PageHeader from '@/app/_components/PageHeader'

import { repairHistory } from '@/app/_data/site'

export const metadata: Metadata = {
  title: 'Repair history',
}

const AccountHistoryPage = () => {
  return (
    <main className="bg-[color:var(--surface-950)] text-[color:var(--text-base)]">
      <PageHeader
        title="Repair & service history"
        description="Every GPU you have serviced, refurbished, or sold through GPU Doctor appears here with warranty coverage dates and documentation."
      />
      <section className="mx-auto max-w-5xl px-6 pb-24 lg:px-10 xl:px-16">
        <div className="overflow-hidden rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/70">
          <table className="min-w-full divide-y divide-[color:var(--border-subtle)] text-left text-xs">
            <thead className="bg-[color:var(--surface-950)]/85 text-[color:var(--text-muted)]">
              <tr>
                <th className="px-6 py-4 font-semibold">Ticket</th>
                <th className="px-6 py-4 font-semibold">Device</th>
                <th className="px-6 py-4 font-semibold">Issue</th>
                <th className="px-6 py-4 font-semibold">Service</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Submitted</th>
                <th className="px-6 py-4 font-semibold">Warranty</th>
                <th className="px-6 py-4 font-semibold">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[color:var(--border-subtle)]">
              {repairHistory.map((entry) => (
                <tr key={entry.id} className="hover:bg-[color:var(--surface-900)]/60">
                  <td className="px-6 py-4 font-semibold text-[color:var(--text-strong)]">{entry.id}</td>
                  <td className="px-6 py-4 text-[color:var(--text-base)]">{entry.device}</td>
                  <td className="px-6 py-4 text-[color:var(--text-base)]">{entry.issue}</td>
                  <td className="px-6 py-4 text-[color:var(--text-base)]">{entry.service}</td>
                  <td className="px-6 py-4 text-[color:var(--accent-secondary)]">{entry.status}</td>
                  <td className="px-6 py-4 text-[color:var(--text-base)]">{entry.submitted}</td>
                  <td className="px-6 py-4 text-[color:var(--text-base)]">{entry.warrantyEnds}</td>
                  <td className="px-6 py-4 text-[color:var(--accent-secondary)]">{entry.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}

export default AccountHistoryPage
