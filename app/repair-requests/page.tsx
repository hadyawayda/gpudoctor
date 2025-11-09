import type { Metadata } from 'next'
import Link from 'next/link'

import PageHeader from '@/app/_components/PageHeader'

import { repairMilestones, serviceCatalog, repairHistory } from '../_data/site'

export const metadata: Metadata = {
  title: 'Schedule a Repair',
  description: 'Book diagnostics, approve quotes, and follow every GPU Doctor repair milestone from one dashboard.',
}

const intakeServices = serviceCatalog.filter((service) => ['Diagnostics', 'Repairs', 'Cooling'].includes(service.category))

const RepairRequestsPage = () => {
  return (
    <main className="bg-[#07130e] text-emerald-50">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(60,227,123,0.28),_transparent_70%)]" />
        <PageHeader
          title="Schedule a GPU Doctor repair"
          description="Tell us what happened, pay the diagnostic fee, and choose the standard 6-week workflow or the 7-day expedited lane. Every intake is logged for your records."
          actions={
            <Link
              href="/sell"
              className="inline-flex items-center rounded-full border border-emerald-400/70 px-5 py-3 text-sm font-semibold text-emerald-100 hover:border-emerald-300 hover:text-emerald-50"
            >
              Looking to trade in a GPU?
            </Link>
          }
        />
      </div>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 xl:px-16">
        <form className="space-y-6 rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-8 text-sm text-emerald-50/80">
          <div>
            <label className="text-sm font-semibold text-emerald-200" htmlFor="device">
              GPU or system details
            </label>
            <input
              id="device"
              name="device"
              type="text"
              placeholder="e.g. ASUS ROG Strix RTX 4090 with EK block"
              className="mt-2 w-full rounded-2xl border border-emerald-500/20 bg-[#091810] px-4 py-3 text-sm text-emerald-50 placeholder:text-emerald-200/40"
              required
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="text-sm font-semibold text-emerald-200" htmlFor="symptoms">
                Primary symptom
              </label>
              <select
                id="symptoms"
                name="symptoms"
                className="mt-2 w-full rounded-2xl border border-emerald-500/20 bg-[#091810] px-4 py-3 text-sm text-emerald-50"
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
              <label className="text-sm font-semibold text-emerald-200" htmlFor="urgency">
                Turnaround target
              </label>
              <select
                id="urgency"
                name="urgency"
                className="mt-2 w-full rounded-2xl border border-emerald-500/20 bg-[#091810] px-4 py-3 text-sm text-emerald-50"
              >
                <option>Standard (up to 6 weeks)</option>
                <option>Expedited (7-day repair lane)</option>
                <option>Custom enterprise schedule</option>
              </select>
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold text-emerald-200" htmlFor="service">
              Preferred service package
            </label>
            <select
              id="service"
              name="service"
              className="mt-2 w-full rounded-2xl border border-emerald-500/20 bg-[#091810] px-4 py-3 text-sm text-emerald-50"
            >
              {intakeServices.map((service) => (
                <option key={service.name} value={service.name}>
                  {service.name} — {service.price} ({service.turnaround})
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm font-semibold text-emerald-200" htmlFor="history">
              Previous repairs or modifications
            </label>
            <textarea
              id="history"
              name="history"
              rows={4}
              placeholder="Tell us about past repairs, water blocks, or BIOS mods."
              className="mt-2 w-full rounded-2xl border border-emerald-500/20 bg-[#091810] px-4 py-3 text-sm text-emerald-50 placeholder:text-emerald-200/40"
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="text-sm font-semibold text-emerald-200" htmlFor="pickup">
                Pickup preference
              </label>
              <select
                id="pickup"
                name="pickup"
                className="mt-2 w-full rounded-2xl border border-emerald-500/20 bg-[#091810] px-4 py-3 text-sm text-emerald-50"
              >
                <option>Schedule courier pickup</option>
                <option>Drop off at lab</option>
                <option>Mail-in with insured label</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-emerald-200" htmlFor="notifications">
                Notify me via
              </label>
              <select
                id="notifications"
                name="notifications"
                className="mt-2 w-full rounded-2xl border border-emerald-500/20 bg-[#091810] px-4 py-3 text-sm text-emerald-50"
              >
                <option>Email updates</option>
                <option>SMS alerts</option>
                <option>Discord webhook</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-300 px-6 py-3 text-sm font-semibold text-[#07130e] shadow-lg shadow-emerald-500/30 transition hover:from-emerald-300 hover:to-teal-200"
          >
            Submit repair request
          </button>
          <p className="text-xs text-emerald-200/70">
            We&apos;ll confirm your intake within one business hour. Diagnostics start after the fee is paid, and every update is logged in your portal.
          </p>
        </form>

        <aside className="space-y-8">
          <div className="rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-6">
            <h2 className="text-lg font-semibold text-emerald-200">Track each milestone</h2>
            <ol className="mt-6 space-y-5 text-sm text-emerald-50/80">
              {repairMilestones.map(({ title, description }, index) => (
                <li key={title} className="flex gap-4">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 text-xs font-semibold text-[#07130e]">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-emerald-100">{title}</p>
                    <p className="mt-1 leading-6">{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-6 text-sm text-emerald-50/80">
            <h2 className="text-lg font-semibold text-emerald-200">Recent repair history</h2>
            <ul className="mt-4 space-y-4">
              {repairHistory.map(({ id, device, service, status, cost }) => (
                <li key={id} className="rounded-2xl border border-emerald-500/15 bg-[#0d2018]/80 p-4">
                  <div className="flex items-center justify-between text-xs text-emerald-200/70">
                    <span>{id}</span>
                    <span>{status}</span>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-emerald-100">{device}</p>
                  <p className="mt-1 text-xs text-emerald-200/70">{service}</p>
                  <p className="mt-3 text-sm font-semibold text-emerald-200">{cost}</p>
                </li>
              ))}
            </ul>
            <Link
              href="/account"
              className="mt-6 inline-flex items-center text-xs font-semibold text-emerald-100 hover:text-emerald-50"
            >
              View full history in your account →
            </Link>
          </div>
        </aside>
      </section>
    </main>
  )
}

export default RepairRequestsPage
