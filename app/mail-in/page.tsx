import type { Metadata } from 'next'
import Link from 'next/link'

import PageHeader from '@/app/_components/PageHeader'

import { repairMilestones } from '../_data/site'

export const metadata: Metadata = {
  title: 'Mail-in Service',
}

const MailInPage = () => {
  return (
    <main className="bg-[color:var(--surface-950)] text-[color:var(--text-base)]">
      <PageHeader
        title="Mail-in repair service"
        description="Ship your GPU safely to our lab. We manage insured logistics, detailed diagnostics, and documentation from intake to return shipping."
        actions={
          <Link
            href="/repair-requests"
            className="inline-flex items-center rounded-full bg-[color:var(--accent-primary)] px-5 py-3 text-sm font-semibold text-[color:var(--surface-950)] shadow-lg shadow-[rgba(61,214,140,0.25)] hover:bg-[color:var(--accent-secondary)] hover:text-[color:var(--surface-900)]"
          >
            Start a repair request
          </Link>
        }
      />
      <section className="mx-auto max-w-6xl gap-10 px-6 pb-24 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:px-10 xl:px-16">
        <div className="space-y-6">
          <div className="rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/70 p-8">
            <h2 className="text-lg font-semibold text-[color:var(--text-strong)]">How it works</h2>
            <ol className="mt-4 space-y-4 text-sm">
              {repairMilestones.slice(0, 4).map(({ title, description }, index) => (
                <li key={title} className="flex gap-3">
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
          <div className="rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/70 p-8 text-sm">
            <h2 className="text-lg font-semibold text-[color:var(--text-strong)]">Packaging tips</h2>
            <p className="mt-3 text-sm text-[color:var(--text-base)]">
              Use the original GPU box when possible, surround the card with anti-static foam, and avoid loose accessories. We return your GPU using the same protective materials plus tamper seals.
            </p>
            <ul className="mt-4 space-y-2 text-xs text-[color:var(--text-muted)]">
              <li>• Include screws, water block fittings, and backplates in labelled bags.</li>
              <li>• Photograph the board before shipping; we compare it with lab intake photos.</li>
              <li>• Print the prepaid label generated from your portal account.</li>
            </ul>
          </div>
        </div>
        <aside className="mt-10 space-y-6 text-sm lg:mt-0">
          <div className="rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)]/85 p-6">
            <p className="text-lg font-semibold text-[color:var(--text-strong)]">Logistics support</p>
            <p className="mt-3 text-xs text-[color:var(--text-base)]">
              Request courier pickup, drop-off appointments, or international paperwork through portal.gpudoctor.com. Tracking updates are posted in the portal and sent via email or SMS.
            </p>
          </div>
          <div className="rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/70 p-6">
            <h2 className="text-lg font-semibold text-[color:var(--text-strong)]">Need expedited turnaround?</h2>
            <p className="mt-3 text-xs text-[color:var(--text-base)]">
              Upgrade to the one-week expedited queue for priority bench time and overnight shipping, or contact us for enterprise SLAs.
            </p>
            <Link
              href="/services"
              className="mt-4 inline-flex items-center text-xs font-semibold text-[color:var(--accent-secondary)] hover:text-[color:var(--accent-secondary)]/80"
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
