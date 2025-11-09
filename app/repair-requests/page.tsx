import type { Metadata } from 'next'
import Link from 'next/link'

import PageHeader from '@/app/_components/PageHeader'

import { repairMilestones, serviceCatalog, repairHistory } from '../_data/site'

export const metadata: Metadata = {
  title: 'Repair intake',
  description: 'Book diagnostics, choose your turnaround speed, and follow every GPU Doctor repair milestone.',
}

const intakeServices = serviceCatalog.filter((service) =>
  ['Diagnostics', 'Repair & Refurbish', 'Cooling & Materials'].includes(service.category),
)

const RepairRequestsPage = () => {
  return (
    <main className="bg-[color:var(--surface-950)] text-[color:var(--text-base)]">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(61,214,140,0.2),_transparent_70%)]" />
        <PageHeader
          title="Schedule a GPU repair"
          description="Tell us about your hardware, select a standard six-week or expedited one-week turnaround, and we will coordinate shipping and documentation."
          actions={
            <Link
              href="/sell"
              className="inline-flex items-center rounded-full border border-[color:var(--accent-secondary)]/60 px-5 py-3 text-sm font-semibold text-[color:var(--accent-secondary)] hover:border-[color:var(--accent-secondary)]"
            >
              Looking to sell instead?
            </Link>
          }
        />
      </div>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 xl:px-16">
        <form className="space-y-6 rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/75 p-8 text-sm backdrop-blur">
          <div>
            <label className="text-sm font-semibold text-[color:var(--text-strong)]" htmlFor="device">
              GPU or system details
            </label>
            <input
              id="device"
              name="device"
              type="text"
              placeholder="e.g. ASUS ROG Strix RTX 4090 with waterblock"
              className="mt-2 w-full rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)] px-4 py-3 text-sm"
              required
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="text-sm font-semibold text-[color:var(--text-strong)]" htmlFor="symptoms">
                Primary symptom
              </label>
              <select
                id="symptoms"
                name="symptoms"
                className="mt-2 w-full rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)] px-4 py-3 text-sm"
              >
                <option>Artifacts or display corruption</option>
                <option>Fan or pump failure</option>
                <option>Power fault / 12VHPWR</option>
                <option>Driver crash or BSOD</option>
                <option>Thermal runaway</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-[color:var(--text-strong)]" htmlFor="urgency">
                Turnaround target
              </label>
              <select
                id="urgency"
                name="urgency"
                className="mt-2 w-full rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)] px-4 py-3 text-sm"
              >
                <option>Standard (up to 6 weeks)</option>
                <option>Expedited (7 days)</option>
                <option>Scheduled maintenance visit</option>
              </select>
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold text-[color:var(--text-strong)]" htmlFor="service">
              Preferred service package
            </label>
            <select
              id="service"
              name="service"
              className="mt-2 w-full rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)] px-4 py-3 text-sm"
            >
              {intakeServices.map((service) => (
                <option key={service.name} value={service.name}>
                  {service.name} — {service.price} ({service.turnaround})
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm font-semibold text-[color:var(--text-strong)]" htmlFor="history">
              Previous repairs or modifications
            </label>
            <textarea
              id="history"
              name="history"
              rows={4}
              placeholder="Share prior repairs, cooling swaps, or firmware changes."
              className="mt-2 w-full rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)] px-4 py-3 text-sm"
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="text-sm font-semibold text-[color:var(--text-strong)]" htmlFor="pickup">
                Logistics preference
              </label>
              <select
                id="pickup"
                name="pickup"
                className="mt-2 w-full rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)] px-4 py-3 text-sm"
              >
                <option>Schedule courier pickup</option>
                <option>Drop off at lab</option>
                <option>Ship with insured label</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-[color:var(--text-strong)]" htmlFor="notifications">
                Notify me via
              </label>
              <select
                id="notifications"
                name="notifications"
                className="mt-2 w-full rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)] px-4 py-3 text-sm"
              >
                <option>Email updates</option>
                <option>SMS alerts</option>
                <option>Portal notification only</option>
              </select>
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold text-[color:var(--text-strong)]" htmlFor="warranty">
              Warranty preference
            </label>
            <select
              id="warranty"
              name="warranty"
              className="mt-2 w-full rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)] px-4 py-3 text-sm"
            >
              <option>Standard 1-week coverage</option>
              <option>Upgrade to 6-week warranty (+$59)</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-[color:var(--accent-primary)] px-6 py-3 text-sm font-semibold text-[color:var(--surface-950)] shadow-lg shadow-[rgba(61,214,140,0.25)] transition hover:bg-[color:var(--accent-secondary)] hover:text-[color:var(--surface-900)]"
          >
            Submit repair intake
          </button>
          <p className="text-xs text-[color:var(--text-muted)]">
            We respond within 60 minutes during business hours. Diagnostics begin as soon as your GPU is received, and you can
            follow every step inside portal.gpudoctor.com.
          </p>
        </form>

        <aside className="space-y-8">
          <div className="rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)]/85 p-6">
            <h2 className="text-lg font-semibold text-[color:var(--text-strong)]">Track each milestone</h2>
            <ol className="mt-6 space-y-5 text-sm">
              {repairMilestones.map(({ title, description }, index) => (
                <li key={title} className="flex gap-4">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--accent-primary)] text-xs font-semibold text-[color:var(--surface-950)]">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-[color:var(--text-strong)]">{title}</p>
                    <p className="mt-1 leading-6 text-[color:var(--text-base)]">{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/75 p-6 text-sm">
            <h2 className="text-lg font-semibold text-[color:var(--text-strong)]">Recent repair history</h2>
            <ul className="mt-4 space-y-4">
              {repairHistory.map(({ id, device, service, status, cost }) => (
                <li key={id} className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)]/85 p-4">
                  <div className="flex items-center justify-between text-xs text-[color:var(--text-muted)]">
                    <span>{id}</span>
                    <span>{status}</span>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-[color:var(--text-strong)]">{device}</p>
                  <p className="mt-1 text-xs text-[color:var(--text-base)]">{service}</p>
                  <p className="mt-3 text-sm font-semibold text-[color:var(--accent-secondary)]">{cost}</p>
                </li>
              ))}
            </ul>
            <Link
              href="/portal"
              className="mt-6 inline-flex items-center text-xs font-semibold text-[color:var(--accent-secondary)] hover:text-[color:var(--accent-secondary)]/80"
            >
              View full history in the portal →
            </Link>
          </div>
        </aside>
      </section>
    </main>
  )
}

export default RepairRequestsPage
