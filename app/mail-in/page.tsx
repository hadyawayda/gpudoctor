import type { Metadata } from 'next'
import Link from 'next/link'

import PageHeader from '@/app/shared/PageHeader'

import { repairMilestones } from '../_data/site'

export const metadata: Metadata = {
  title: 'Mail-in Service',
}

const MailInPage = () => {
  return (
    <main className="bg-background-base text-slate-100">
      <PageHeader
        title="Mail-in repair service"
        description="Ship your GPU safely to our lab. We document every milestone, from intake photos to final stress reports, so you stay in control of the process."
        actions={
          <Link
            href="/repair-requests"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-primary-500 to-secondary-600 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-primary-500/30 hover:from-primary-400 hover:to-secondary-500"
          >
            Start a repair request
          </Link>
        }
      />
      <section className="mx-auto max-w-6xl gap-10 px-6 pb-24 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:px-10 xl:px-16">
        <div className="space-y-6">
          <div className="rounded-3xl border border-primary-500/20 bg-background-section/70 p-8">
            <h2 className="text-lg font-semibold text-primary-300">How it works</h2>
            <ol className="mt-4 space-y-4 text-sm text-slate-300">
              {repairMilestones.slice(0, 4).map(({ title, description }, index) => (
                <li key={title} className="flex gap-3">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-accent-500 text-xs font-semibold text-slate-950">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-primary-300">{title}</p>
                    <p className="mt-1 leading-6">{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-3xl border border-primary-500/20 bg-background-section/70 p-8 text-sm text-slate-300">
            <h2 className="text-lg font-semibold text-primary-300">Packaging tips</h2>
            <p className="mt-3 text-sm">
              Use the original GPU box when possible, surround the card with anti-static foam, and avoid loose accessories. We
              return your GPU using the same protective materials plus tamper seals and a checklist of the work performed.
            </p>
            <ul className="mt-4 space-y-2 text-xs text-slate-400">
              <li>• Include screws, water block fittings, and backplates in labelled bags.</li>
              <li>• Photograph the board before shipping; we compare your photos with lab intake shots for accountability.</li>
              <li>• Print the prepaid label generated from your account dashboard or portal.gpudoctor.com.</li>
            </ul>
          </div>
        </div>
        <aside className="mt-10 space-y-6 lg:mt-0">
          <div className="rounded-3xl border border-primary-500/20 bg-secondary-500/10 p-6 text-sm text-primary-300">
            <p className="text-lg font-semibold text-slate-100">Portal oversight</p>
            <p className="mt-3 text-xs text-primary-300/80">
              Intake photos, technician notes, and courier scans post automatically to your customer portal so you can audit every step.
            </p>
          </div>
          <div className="rounded-3xl border border-primary-500/20 bg-background-section/70 p-6 text-sm text-slate-300">
            <h2 className="text-lg font-semibold text-primary-300">Need expedited turnaround?</h2>
            <p className="mt-3 text-xs text-slate-400">
              Upgrade to the seven-day expedited lane during checkout or within the portal. We provide daily updates and refund the rush fee if the commitment is missed.
            </p>
            <Link
              href="/services"
              className="mt-4 inline-flex items-center text-xs font-semibold text-primary-200 hover:text-slate-100"
            >
              Compare service tiers →
            </Link>
          </div>
          <div className="rounded-3xl border border-primary-500/20 bg-background-section/70 p-6 text-sm text-slate-300">
            <h2 className="text-lg font-semibold text-primary-300">Documentation you receive</h2>
            <ul className="mt-4 space-y-2 text-xs text-slate-400">
              <li>• Intake and completion photos time-stamped for your records.</li>
              <li>• Stress test results with sensor overlays proving stability.</li>
              <li>• Warranty certificates showing seven-day coverage and optional six-week extensions.</li>
            </ul>
          </div>
        </aside>
      </section>
    </main>
  )
}

export default MailInPage
