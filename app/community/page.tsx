import type { Metadata } from 'next'
import Link from 'next/link'

import PageHeader from '@/app/shared/PageHeader'

import { forumHighlights } from '../_data/site'

export const metadata: Metadata = {
  title: 'Community',
  description: 'Join the GPU Doctor forums, collaborate with technicians, and chat with the Atlas AI repair assistant.',
}

const CommunityPage = () => {
  return (
    <main className="bg-slate-950 text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.25),_transparent_70%)]" />
        <PageHeader
          title="Community & Atlas AI"
          description="Discuss board-level repairs, share builds, and let Atlas AI copilot your troubleshooting from our dedicated support subdomain."
          actions={
            <Link
              href="/login"
              className="inline-flex items-center rounded-full border border-primary-500/60 px-5 py-3 text-sm font-semibold text-primary-300 hover:border-primary-400 hover:text-slate-100"
            >
              Join the forum
            </Link>
          }
        />
      </div>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 xl:px-16">
        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h2 className="text-2xl font-semibold text-secondary-300">Forum highlights</h2>
            <p className="mt-3 text-sm text-slate-200">
              Dive into dedicated labs for signal integrity, firmware tuning, and thermal engineering. Experts and enthusiasts
              collaborate daily to extend the life of performance GPUs.
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {forumHighlights.map((highlight) => (
                <article key={highlight.name} className="rounded-2xl border border-primary-500/10 bg-primary-500/5 p-5 text-sm text-slate-200">
                  <h3 className="text-lg font-semibold text-white">{highlight.name}</h3>
                  <p className="mt-2 text-xs leading-6 text-slate-300">{highlight.description}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-sm text-slate-200">
            <h2 className="text-2xl font-semibold text-secondary-300">Atlas AI copilot</h2>
            <p className="mt-3 text-sm">
              Hosted on atlas.gpudoctor.com, our AI assistant triages issues, drafts repair tickets, and keeps your team updated in
              conversational threads.
            </p>
            <ul className="mt-5 space-y-3 text-xs text-slate-300">
              <li>• Upload oscilloscope captures and crash dumps for instant insights.</li>
              <li>• Generate RMA-ready documentation for enterprise teams.</li>
              <li>• Receive push notifications when technicians leave updates or require approval.</li>
            </ul>
            <Link
              href="/repair-requests"
              className="mt-5 inline-flex items-center text-xs font-semibold text-primary-300 hover:text-slate-100"
            >
              Book a consult with Atlas →
            </Link>
          </div>
        </div>
        <aside className="space-y-6">
          <div className="rounded-3xl border border-primary-500/10 bg-slate-900/70 p-6 text-sm text-slate-200">
            <h2 className="text-lg font-semibold text-primary-300">Events & workshops</h2>
            <p className="mt-3 text-xs text-slate-300">
              Monthly livestreams with technicians covering micro-soldering, VBIOS tuning, and immersion prep. Members can submit
              boards for live diagnostics.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200">
            <h2 className="text-lg font-semibold text-primary-300">Marketplace integrations</h2>
            <p className="mt-3 text-xs text-slate-300">
              Link your community handle to marketplace listings to showcase refurbish certifications and gather feedback from
              buyers.
            </p>
            <Link
              href="/marketplace"
              className="mt-4 inline-flex items-center text-xs font-semibold text-primary-300 hover:text-slate-100"
            >
              Sync marketplace profile →
            </Link>
          </div>
        </aside>
      </section>
    </main>
  )
}

export default CommunityPage
