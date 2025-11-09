import type { Metadata } from 'next'

import PageHeader from '@/app/_components/PageHeader'

import { repairHistory } from '@/app/_data/site'

export const metadata: Metadata = {
  title: 'Repair history',
}

const AccountHistoryPage = () => {
  return (
    <main className="bg-[#07130e] text-emerald-50">
      <PageHeader
        title="Repair & service history"
        description="Every GPU you&apos;ve serviced, refurbished, or sold through GPU Doctor appears here with warranty coverage dates and telemetry logs."
      />
      <section className="mx-auto max-w-5xl px-6 pb-24 lg:px-10 xl:px-16">
        <div className="overflow-hidden rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70">
          <table className="min-w-full divide-y divide-emerald-500/20 text-left text-xs text-emerald-50/80">
            <thead className="bg-[#091810]/80 text-emerald-200/80">
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
            <tbody className="divide-y divide-emerald-500/20">
              {repairHistory.map((entry) => (
                <tr key={entry.id} className="hover:bg-[#091810]/70">
                  <td className="px-6 py-4 font-semibold text-emerald-100">{entry.id}</td>
                  <td className="px-6 py-4 text-emerald-50/80">{entry.device}</td>
                  <td className="px-6 py-4 text-emerald-50/70">{entry.issue}</td>
                  <td className="px-6 py-4 text-emerald-50/70">{entry.service}</td>
                  <td className="px-6 py-4 text-emerald-200">{entry.status}</td>
                  <td className="px-6 py-4 text-emerald-50/70">{entry.submitted}</td>
                  <td className="px-6 py-4 text-emerald-50/70">{entry.warrantyEnds}</td>
                  <td className="px-6 py-4 text-emerald-100">{entry.cost}</td>
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
