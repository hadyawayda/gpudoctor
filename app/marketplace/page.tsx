import type { Metadata } from 'next'
import Link from 'next/link'

import PageHeader from '@/app/_components/PageHeader'

import { marketplaceListings, technicianListings } from '../_data/site'

export const metadata: Metadata = {
  title: 'Marketplace',
  description: 'Buy and sell refurbished GPUs, request refurbish add-ons, and browse technician-sourced IC components.',
}

const MarketplacePage = () => {
  return (
    <main className="bg-slate-950 text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900 via-emerald-500/20 to-slate-950" />
        <PageHeader
          title="GPU Doctor marketplace"
          description="Browse certified trade-ins, sell your own GPUs, and source hard-to-find ICs directly from our technician community."
          actions={
            <Link
              href="/sell"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 hover:from-emerald-300 hover:via-cyan-300 hover:to-sky-400"
            >
              List a GPU today
            </Link>
          }
        />
      </div>

      <section className="mx-auto max-w-6xl px-6 pb-16 lg:px-10 xl:px-16">
        <div className="flex flex-col gap-6 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-emerald-300">Featured listings</h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-200">
              Every certified listing includes diagnostics, refurbish history, and a shareable telemetry report. Choose the
              refurbish add-on to have our lab renew pads, flash firmware, and rebox before shipping.
            </p>
          </div>
          <Link
            href="/repair-requests"
            className="inline-flex items-center text-sm font-semibold text-emerald-200 hover:text-emerald-100"
          >
            Bundle repair with purchase →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {marketplaceListings.map(({ id, title, brand, model, price, condition, description, stats, location, refurbishedByDoctor, includesRefurbOption }) => (
            <article key={id} className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <header className="space-y-1">
                <div className="flex items-center justify-between text-xs text-emerald-200/80">
                  <span>{brand}</span>
                  <span>{condition}</span>
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="text-sm text-slate-300">{model}</p>
              </header>
              <p className="mt-4 text-sm leading-6 text-slate-200">{description}</p>
              <p className="mt-4 text-xs text-emerald-300/80">{stats}</p>
              <div className="mt-5 flex flex-wrap gap-3 text-xs">
                <span className="rounded-full bg-white/10 px-3 py-1 text-slate-200">{location}</span>
                {refurbishedByDoctor ? (
                  <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-emerald-200">GPU Doctor Certified</span>
                ) : null}
                {includesRefurbOption ? (
                  <span className="rounded-full bg-cyan-400/20 px-3 py-1 text-cyan-100">Refurbish add-on available</span>
                ) : null}
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-lg font-semibold text-emerald-300">{price}</span>
                <Link href={`/repair-requests?listing=${id}`} className="text-xs font-semibold text-emerald-200 hover:text-emerald-100">
                  Request diagnostics →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="technicians" className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 xl:px-16">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-emerald-300">Technician listings</h2>
              <p className="mt-3 max-w-2xl text-sm text-slate-200">
                Need donor boards, memory modules, or VRM controllers? Our verified technicians post inventory with lab-tested
                provenance. Request bench validation or bundle components with your repair order.
              </p>
            </div>
            <Link
              href="mailto:marketplace@gpudoctor.com"
              className="inline-flex items-center rounded-full border border-emerald-400/70 px-5 py-3 text-sm font-semibold text-emerald-200 hover:border-emerald-300 hover:text-emerald-100"
            >
              Apply as a technician seller
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {technicianListings.map(({ id, component, quantity, price, supplier, contact, note }) => (
              <article key={id} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200">
                <div className="flex items-center justify-between text-xs text-emerald-200/80">
                  <span>{supplier}</span>
                  <span>Qty {quantity}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-white">{component}</h3>
                <p className="mt-2 text-sm font-semibold text-emerald-300">{price}</p>
                <p className="mt-3 text-xs leading-6 text-slate-300">{note}</p>
                <Link
                  href={`mailto:${contact}`}
                  className="mt-5 inline-flex items-center text-xs font-semibold text-emerald-200 hover:text-emerald-100"
                >
                  Contact supplier →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 pb-24">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-10 xl:px-16">
          <h2 className="text-3xl font-semibold text-emerald-300">Build smarter with marketplace integrations</h2>
          <p className="mt-4 text-sm text-slate-200">
            Sync purchases to your GPU Doctor account, track refurbish status, and drop components into the PC builder to see how
            they fit. Atlas AI keeps an eye on prices and notifies you when a component that matches your saved builds appears.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/builds"
              className="rounded-full border border-emerald-400/60 px-5 py-3 text-sm font-semibold text-emerald-200 hover:border-emerald-300 hover:text-emerald-100"
            >
              Open the builder
            </Link>
            <Link
              href="/account"
              className="rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 hover:from-emerald-300 hover:via-cyan-300 hover:to-sky-400"
            >
              Sync to my account
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default MarketplacePage
