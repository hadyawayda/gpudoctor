import type { Metadata } from 'next'

import PageHeader from '@/app/_components/PageHeader'

import { repairHistory } from '@/app/_data/site'

export const metadata: Metadata = {
  title: 'Repair history',
}

const AccountHistoryPage = () => {
  return (
    <main className="bg-slate-950 text-white">
      <PageHeader
        title="Repair & service history"
        description="Every GPU you&apos;ve serviced, refurbished, or sold through GPU Doctor appears here with warranty coverage dates and telemetry logs."
      />
      <section className="mx-auto max-w-5xl px-6 pb-24 lg:px-10 xl:px-16">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <table className="min-w-full divide-y divide-white/10 text-left text-xs text-slate-200">
            <thead className="bg-slate-900/60 text-emerald-200/80">
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
            <tbody className="divide-y divide-white/10">
              {repairHistory.map((entry) => (
                <tr key={entry.id} className="hover:bg-white/5">
                  <td className="px-6 py-4 font-semibold text-white">{entry.id}</td>
                  <td className="px-6 py-4 text-slate-200">{entry.device}</td>
                  <td className="px-6 py-4 text-slate-300">{entry.issue}</td>
                  <td className="px-6 py-4 text-slate-300">{entry.service}</td>
                  <td className="px-6 py-4 text-emerald-200">{entry.status}</td>
                  <td className="px-6 py-4 text-slate-300">{entry.submitted}</td>
                  <td className="px-6 py-4 text-slate-300">{entry.warrantyEnds}</td>
                  <td className="px-6 py-4 text-emerald-300">{entry.cost}</td>
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
