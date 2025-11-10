import type { Metadata } from 'next'
import Link from 'next/link'

import PageHeader from '@/app/shared/PageHeader'

export const metadata: Metadata = {
  title: 'Support Center',
  description:
    'Find answers about diagnostics, warranties, shipping logistics, and how GPU Doctor protects your rights throughout every repair.',
}

const SupportPage = () => {
  return (
    <main className="bg-background-base text-slate-100">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(60,227,123,0.18),_transparent_70%)]" />
        <PageHeader
          title="Support center"
          description="Review policies, queue expectations, and the documentation we provide so you stay in control of every repair."
        />
      </div>

      <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-10 xl:px-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <article className="rounded-3xl border border-primary-500/25 bg-background-section/80 p-6">
              <h2 className="text-xl font-semibold text-primary-300">Response timelines</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-100/85">
                <li>• Diagnostic reports post within 48 hours of intake payment.</li>
                <li>• Standard repairs progress over a six-week bench schedule with weekly status emails.</li>
                <li>• Expedited lane work is completed in seven calendar days or the rush fee is refunded.</li>
              </ul>
            </article>
            <article className="rounded-3xl border border-primary-500/25 bg-background-section/80 p-6">
              <h2 className="text-xl font-semibold text-primary-300">How we protect your hardware</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-100/85">
                <li>• Intake photos and serials are recorded before any service begins.</li>
                <li>• Each repair includes a 7-day workmanship warranty with an optional 6-week extension.</li>
                <li>• Completed work is documented with parts used, voltages tested, and stress logs archived in your portal.</li>
              </ul>
            </article>
            <article className="rounded-3xl border border-primary-500/25 bg-background-section/80 p-6">
              <h2 className="text-xl font-semibold text-primary-300">Need personal assistance?</h2>
              <p className="mt-3 text-sm text-slate-100/85">
                Email <Link className="underline decoration-primary-400" href="mailto:support@gpudoctor.com">support@gpudoctor.com</Link> or
                call <Link className="underline decoration-primary-400" href="tel:+18005551234">+1 (800) 555-1234</Link>. Our team replies within one business hour during the workweek.
              </p>
              <p className="mt-3 text-sm text-slate-100/85">
                For existing customers, log into <Link className="underline decoration-primary-400" href="/portal">portal.gpudoctor.com</Link> to
                view tickets, upload photos, or approve quotes securely.
              </p>
            </article>
          </div>
          <aside className="space-y-6">
            <div className="rounded-3xl border border-primary-500/25 bg-background-section/80 p-6 text-sm text-slate-100/85">
              <h3 className="text-lg font-semibold text-primary-300">Policy library</h3>
              <p className="mt-3">These pages outline your rights, our responsibilities, and shipping coverage.</p>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link className="hover:text-primary-300" href="/privacy">
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary-300" href="/terms">
                    Terms of use
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary-300" href="/shipping">
                    Shipping & handling policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="rounded-3xl border border-primary-500/25 bg-background-section/80 p-6 text-sm text-slate-100/85">
              <h3 className="text-lg font-semibold text-primary-300">Quick links</h3>
              <ul className="mt-3 space-y-3">
                <li>
                  <Link className="hover:text-primary-300" href="/repair-requests">
                    Start a repair intake
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary-300" href="/store">
                    Shop certified hardware
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary-300" href="/sell">
                    Arrange a sale or trade-in
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary-300" href="/faq">
                    Frequently asked questions
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default SupportPage
