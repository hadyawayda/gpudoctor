import type { Metadata } from "next";
import Link from "next/link";

import PageHeader from "@shared/PageHeader";

import {
  repairMilestones,
  serviceCatalog,
  repairHistory,
} from "@data/site";

export const metadata: Metadata = {
  title: "Schedule a Repair",
  description:
    "Book diagnostics, approve quotes, and follow every GPU Doctor repair milestone from one dashboard.",
};

const intakeServices = serviceCatalog.filter((service) =>
  ["Diagnostics", "Repairs", "Cooling"].includes(service.category)
);

const RepairRequestsPage = () => {
  return (
    <main className="bg-background-base text-slate-100">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(60,227,123,0.28),_transparent_70%)]" />
        <PageHeader
          title="Schedule a GPU Doctor repair"
          description="Tell us what happened, pay the diagnostic fee, and choose the standard 6-week workflow or the 7-day expedited lane. Every intake is logged for your records."
          actions={
            <Link
              href="/sell"
              className="inline-flex items-center rounded-full border border-primary-500/60 px-5 py-3 text-sm font-semibold text-primary-200 hover:border-primary-400 hover:text-slate-100"
            >
              Looking to trade in a GPU?
            </Link>
          }
        />
      </div>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 xl:px-16">
        <form className="space-y-6 rounded-3xl border border-primary-500/20 bg-background-section/70 p-8 text-sm text-slate-300">
          <div>
            <label
              className="text-sm font-semibold text-primary-300"
              htmlFor="device"
            >
              GPU or system details
            </label>
            <input
              id="device"
              name="device"
              type="text"
              placeholder="e.g. ASUS ROG Strix RTX 4090 with EK block"
              className="mt-2 w-full rounded-2xl border border-primary-500/20 bg-background-card px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400"
              required
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                className="text-sm font-semibold text-primary-300"
                htmlFor="symptoms"
              >
                Primary symptom
              </label>
              <select
                id="symptoms"
                name="symptoms"
                className="mt-2 w-full rounded-2xl border border-primary-500/20 bg-background-card px-4 py-3 text-sm text-slate-100"
              >
                <option>Artifacts / display corruption</option>
                <option>Fan or pump failure</option>
                <option>12VHPWR / power fault</option>
                <option>Driver crash or BSOD</option>
                <option>Thermal runaway</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label
                className="text-sm font-semibold text-primary-300"
                htmlFor="urgency"
              >
                Turnaround target
              </label>
              <select
                id="urgency"
                name="urgency"
                className="mt-2 w-full rounded-2xl border border-primary-500/20 bg-background-card px-4 py-3 text-sm text-slate-100"
              >
                <option>Standard (up to 6 weeks)</option>
                <option>Expedited (7-day repair lane)</option>
                <option>Custom enterprise schedule</option>
              </select>
            </div>
          </div>
          <div>
            <label
              className="text-sm font-semibold text-primary-300"
              htmlFor="service"
            >
              Preferred service package
            </label>
            <select
              id="service"
              name="service"
              className="mt-2 w-full rounded-2xl border border-primary-500/20 bg-background-card px-4 py-3 text-sm text-slate-100"
            >
              {intakeServices.map((service) => (
                <option key={service.name} value={service.name}>
                  {service.name} — {service.price} ({service.turnaround})
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              className="text-sm font-semibold text-primary-300"
              htmlFor="history"
            >
              Previous repairs or modifications
            </label>
            <textarea
              id="history"
              name="history"
              rows={4}
              placeholder="Tell us about past repairs, water blocks, or BIOS mods."
              className="mt-2 w-full rounded-2xl border border-primary-500/20 bg-background-card px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400"
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                className="text-sm font-semibold text-primary-300"
                htmlFor="pickup"
              >
                Pickup preference
              </label>
              <select
                id="pickup"
                name="pickup"
                className="mt-2 w-full rounded-2xl border border-primary-500/20 bg-background-card px-4 py-3 text-sm text-slate-100"
              >
                <option>Schedule courier pickup</option>
                <option>Drop off at lab</option>
                <option>Mail-in with insured label</option>
              </select>
            </div>
            <div>
              <label
                className="text-sm font-semibold text-primary-300"
                htmlFor="notifications"
              >
                Notify me via
              </label>
              <select
                id="notifications"
                name="notifications"
                className="mt-2 w-full rounded-2xl border border-primary-500/20 bg-background-card px-4 py-3 text-sm text-slate-100"
              >
                <option>Email updates</option>
                <option>SMS alerts</option>
                <option>Discord webhook</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-primary-500 to-secondary-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-500/30 transition hover:from-primary-400 hover:to-secondary-500"
          >
            Submit repair request
          </button>
          <p className="text-xs text-primary-300/70">
            We&apos;ll confirm your intake within one business hour. Diagnostics
            start after the fee is paid, and every update is logged in your
            portal.
          </p>
        </form>

        <aside className="space-y-8">
          <div className="rounded-3xl border border-primary-500/20 bg-background-section/70 p-6">
            <h2 className="text-lg font-semibold text-primary-300">
              Track each milestone
            </h2>
            <ol className="mt-6 space-y-5 text-sm text-slate-300">
              {repairMilestones.map(({ title, description }, index) => (
                <li key={title} className="flex gap-4">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-accent-500 text-xs font-semibold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-slate-100">{title}</p>
                    <p className="mt-1 leading-6">{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-3xl border border-primary-500/20 bg-background-section/70 p-6 text-sm text-slate-300">
            <h2 className="text-lg font-semibold text-primary-300">
              Recent repair history
            </h2>
            <ul className="mt-4 space-y-4">
              {repairHistory.map(({ id, device, service, status, cost }) => (
                <li
                  key={id}
                  className="rounded-2xl border border-primary-500/15 bg-background-card/80 p-4"
                >
                  <div className="flex items-center justify-between text-xs text-primary-300/70">
                    <span>{id}</span>
                    <span>{status}</span>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-slate-100">
                    {device}
                  </p>
                  <p className="mt-1 text-xs text-primary-300/70">{service}</p>
                  <p className="mt-3 text-sm font-semibold text-primary-300">
                    {cost}
                  </p>
                </li>
              ))}
            </ul>
            <Link
              href="/account"
              className="mt-6 inline-flex items-center text-xs font-semibold text-primary-200 hover:text-slate-100"
            >
              View full history in your account →
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default RepairRequestsPage;
