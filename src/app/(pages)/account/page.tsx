import type { Metadata } from "next";
import Link from "next/link";

import PageHeader from "@shared/PageHeader";

import { repairHistory } from "@data/site";

export const metadata: Metadata = {
  title: "Account",
};

const AccountPage = () => {
  return (
    <main className="bg-background-base text-slate-100">
      <PageHeader
        title="Your GPU Doctor account"
        description="Use portal.gpudoctor.com to track repairs, manage listings, and keep invoices, shipping labels, and warranties organized."
        actions={
          <div className="flex flex-wrap gap-3">
            <Link
              href="/login"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-primary-500 to-secondary-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-500/30 hover:from-primary-400 hover:to-secondary-500"
            >
              Sign in
            </Link>
            <Link
              href="/account/history"
              className="inline-flex items-center rounded-full border border-primary-500/60 px-5 py-3 text-sm font-semibold text-primary-200 hover:border-primary-400 hover:text-slate-100"
            >
              View full history
            </Link>
          </div>
        }
      />
      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 xl:px-16">
        <div className="space-y-8">
          <div className="rounded-3xl border border-primary-500/20 bg-background-section/70 p-8 text-sm text-slate-300">
            <h2 className="text-lg font-semibold text-primary-300">
              Dashboard highlights
            </h2>
            <ul className="mt-4 space-y-3">
              <li>
                • Monitor repair milestones, technician notes, and warranty
                status in one timeline.
              </li>
              <li>
                • Approve quotes, add refurbish packages, and schedule insured
                pickups or drop-offs.
              </li>
              <li>
                • Download invoices, shipping labels, and certification
                paperwork any time.
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-primary-500/20 bg-background-section/70 p-8">
            <h2 className="text-lg font-semibold text-primary-300">
              Recent activity
            </h2>
            <table className="mt-4 w-full border-collapse text-left text-xs text-slate-300">
              <thead>
                <tr className="text-primary-300/80">
                  <th className="pb-2 pr-4 font-semibold">Ticket</th>
                  <th className="pb-2 pr-4 font-semibold">Device</th>
                  <th className="pb-2 pr-4 font-semibold">Status</th>
                  <th className="pb-2 font-semibold">Cost</th>
                </tr>
              </thead>
              <tbody>
                {repairHistory.map((entry) => (
                  <tr key={entry.id} className="border-t border-primary-500/20">
                    <td className="py-3 pr-4 font-semibold text-slate-100">
                      {entry.id}
                    </td>
                    <td className="py-3 pr-4 text-slate-400">{entry.device}</td>
                    <td className="py-3 pr-4 text-primary-300">
                      {entry.status}
                    </td>
                    <td className="py-3 text-primary-300">{entry.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Link
              href="/account/history"
              className="mt-4 inline-flex items-center text-xs font-semibold text-primary-200 hover:text-slate-100"
            >
              See full history →
            </Link>
          </div>
        </div>
        <aside className="space-y-8">
          <div className="rounded-3xl border border-primary-500/20 bg-background-section/70 p-6 text-sm text-slate-300">
            <h2 className="text-lg font-semibold text-primary-300">
              Marketplace controls
            </h2>
            <p className="mt-3 text-xs text-slate-400">
              Manage your buy & sell listings, enable refurbish add-ons, and
              release payments when hardware passes verification.
            </p>
            <Link
              href="/marketplace"
              className="mt-5 inline-flex items-center text-xs font-semibold text-primary-200 hover:text-slate-100"
            >
              Open marketplace dashboard →
            </Link>
          </div>
          <div className="rounded-3xl border border-primary-500/20 bg-background-section/70 p-6 text-sm text-slate-300">
            <h2 className="text-lg font-semibold text-primary-300">
              Portal settings
            </h2>
            <p className="mt-3 text-xs text-slate-400">
              Update contact details, saved addresses, billing profiles, and
              two-factor authentication. Manage who on your team has access to
              approvals and downloads.
            </p>
            <Link
              href="/portal"
              className="mt-5 inline-flex items-center text-xs font-semibold text-primary-200 hover:text-slate-100"
            >
              Explore the customer portal →
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default AccountPage;
