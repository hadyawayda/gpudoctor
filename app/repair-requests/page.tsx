import type { Metadata } from 'next'
import Link from 'next/link'

import PageHeader from '@/app/_components/PageHeader'

import { repairMilestones, serviceCatalog, repairHistory } from '../_data/site'

export const metadata: Metadata = {
  title: 'Repair Requests',
  description: 'Book diagnostics, approve quotes, and follow every GPU Doctor repair milestone from one dashboard.',
}

const intakeServices = serviceCatalog.filter((service) => ['Diagnostics', 'Repairs', 'Cooling'].includes(service.category))

const RepairRequestsPage = () => {
  return (
    <main className="bg-slate-950 text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.3),_transparent_70%)]" />
        <PageHeader
          title="Book a GPU Doctor repair"
          description="Tell us what happened, choose your service preferences, and Atlas AI will prepare diagnostics before your GPU even arrives."
          actions={
            <Link
              href="/sell"
              className="inline-flex items-center rounded-full border border-emerald-400/70 px-5 py-3 text-sm font-semibold text-emerald-200 hover:border-emerald-300 hover:text-emerald-100"
            >
              Looking to trade in a GPU?
            </Link>
          }
        />
      </div>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 xl:px-16">
        <form className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 text-sm text-slate-200 backdrop-blur">
          <div>
            <label className="text-sm font-semibold text-emerald-200" htmlFor="device">
              GPU or system details
            </label>
            <input
              id="device"
              name="device"
              type="text"
              placeholder="e.g. ASUS ROG Strix RTX 4090 with EK block"
              className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500"
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
                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white"
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
                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white"
              >
                <option>Standard (3-5 days)</option>
                <option>Priority (48 hours)</option>
                <option>Enterprise SLA (same day)</option>
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
              className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white"
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
              className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500"
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
                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white"
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
                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white"
              >
                <option>Email updates</option>
                <option>SMS alerts</option>
                <option>Discord webhook</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:from-emerald-300 hover:via-cyan-300 hover:to-sky-400"
          >
            Submit repair request
          </button>
          <p className="text-xs text-slate-400">
            We&apos;ll respond within 60 minutes during business hours. Atlas AI prepares diagnostics and quotes instantly once
            photos or telemetry are uploaded.
          </p>
        </form>

        <aside className="space-y-8">
          <div className="rounded-3xl border border-emerald-500/10 bg-slate-900/70 p-6">
            <h2 className="text-lg font-semibold text-emerald-200">Track each milestone</h2>
            <ol className="mt-6 space-y-5 text-sm text-slate-200">
              {repairMilestones.map(({ title, description }, index) => (
                <li key={title} className="flex gap-4">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 text-xs font-semibold text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-white">{title}</p>
                    <p className="mt-1 leading-6 text-slate-200">{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200">
            <h2 className="text-lg font-semibold text-emerald-200">Recent repair history</h2>
            <ul className="mt-4 space-y-4">
              {repairHistory.map(({ id, device, service, status, cost }) => (
                <li key={id} className="rounded-2xl border border-emerald-500/10 bg-emerald-500/5 p-4">
                  <div className="flex items-center justify-between text-xs text-emerald-200/80">
                    <span>{id}</span>
                    <span>{status}</span>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-white">{device}</p>
                  <p className="mt-1 text-xs text-slate-300">{service}</p>
                  <p className="mt-3 text-sm font-semibold text-emerald-300">{cost}</p>
                </li>
              ))}
            </ul>
            <Link
              href="/account"
              className="mt-6 inline-flex items-center text-xs font-semibold text-emerald-200 hover:text-emerald-100"
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
