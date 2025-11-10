import type { Metadata } from "next";

import PageHeader from "@shared/PageHeader";

import { repairHistory } from "@data/site";

export const metadata: Metadata = {
  title: "Repair history",
};

const AccountHistoryPage = () => {
  return (
    <main className="bg-background-base text-slate-100">
      <PageHeader
        title="Repair & service history"
        description="Every GPU you've serviced, refurbished, or sold through GPU Doctor appears here with warranty coverage dates and telemetry logs."
      />
      <section className="mx-auto max-w-5xl px-6 pb-24 lg:px-10 xl:px-16">
        <div className="overflow-hidden rounded-3xl border border-primary-500/20 bg-background-section/70">
          <table className="min-w-full divide-y divide-emerald-500/20 text-left text-xs text-slate-300">
            <thead className="bg-background-card/80 text-primary-300/80">
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
                <tr key={entry.id} className="hover:bg-background-card/70">
                  <td className="px-6 py-4 font-semibold text-slate-100">
                    {entry.id}
                  </td>
                  <td className="px-6 py-4 text-slate-300">{entry.device}</td>
                  <td className="px-6 py-4 text-slate-400">{entry.issue}</td>
                  <td className="px-6 py-4 text-slate-400">{entry.service}</td>
                  <td className="px-6 py-4 text-primary-300">{entry.status}</td>
                  <td className="px-6 py-4 text-slate-400">
                    {entry.submitted}
                  </td>
                  <td className="px-6 py-4 text-slate-400">
                    {entry.warrantyEnds}
                  </td>
                  <td className="px-6 py-4 text-slate-100">{entry.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default AccountHistoryPage;
