import type { Metadata } from 'next'
import Link from 'next/link'

import PageHeader from '@/app/_components/PageHeader'

import { repairMilestones } from '../_data/site'

export const metadata: Metadata = {
  title: 'Mail-in Service',
}

const MailInPage = () => {
  return (
    <main className="bg-slate-950 text-white">
      <PageHeader
        title="Mail-in repair service"
        description="Ship your GPU safely to our lab. Atlas AI monitors every milestone and keeps you updated with telemetry-rich reports."
        actions={
          <Link
            href="/repair-requests"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 hover:from-emerald-300 hover:via-cyan-300 hover:to-sky-400"
          >
            Start a repair request
          </Link>
        }
      />
      <section className="mx-auto max-w-6xl gap-10 px-6 pb-24 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:px-10 xl:px-16">
        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-lg font-semibold text-emerald-200">How it works</h2>
            <ol className="mt-4 space-y-4 text-sm text-slate-200">
              {repairMilestones.slice(0, 4).map(({ title, description }, index) => (
                <li key={title} className="flex gap-3">
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
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-sm text-slate-200">
            <h2 className="text-lg font-semibold text-emerald-200">Packaging tips</h2>
            <p className="mt-3 text-sm">
              Use the original GPU box when possible, surround the card with anti-static foam, and avoid loose accessories. We
              return your GPU using the same protective materials plus tamper seals.
            </p>
            <ul className="mt-4 space-y-2 text-xs text-slate-300">
              <li>• Include screws, water block fittings, and backplates in labelled bags.</li>
              <li>• Photograph the board before shipping; Atlas AI compares it with lab intake photos.</li>
              <li>• Print the prepaid label generated from your account dashboard.</li>
            </ul>
          </div>
        </div>
        <aside className="mt-10 space-y-6 lg:mt-0">
          <div className="rounded-3xl border border-emerald-500/10 bg-emerald-500/10 p-6 text-sm text-emerald-200">
            <p className="text-lg font-semibold text-white">Atlas AI oversight</p>
            <p className="mt-3 text-xs text-emerald-200/80">
              Atlas confirms intake photos, flags unusual wear, and prepares technician notes before your GPU arrives.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200">
            <h2 className="text-lg font-semibold text-emerald-200">Need expedited turnaround?</h2>
            <p className="mt-3 text-xs text-slate-300">
              Upgrade to our 48-hour priority queue or enterprise SLA for same-day diagnostics and overnight shipping.
            </p>
            <Link
              href="/services"
              className="mt-4 inline-flex items-center text-xs font-semibold text-emerald-200 hover:text-emerald-100"
            >
              Compare service tiers →
            </Link>
          </div>
        </aside>
      </section>
    </main>
  )
}

export default MailInPage
