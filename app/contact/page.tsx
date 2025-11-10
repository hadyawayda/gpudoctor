import type { Metadata } from 'next'
import PageHeader from '@/app/shared/PageHeader'

export const metadata: Metadata = {
  title: 'Contact',
}

const ContactPage = () => {
  return (
    <main className="bg-background-base text-slate-100">
      <PageHeader
        title="Contact our technicians"
        description="Need diagnostic help, enterprise quotes, or marketplace assistance? Reach our labs anytime and a technician will confirm your ticket."
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 xl:px-16">
        <form className="space-y-6 rounded-3xl border border-primary-500/20 bg-background-section/70 p-8 text-sm text-slate-300">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="text-sm font-semibold text-primary-300" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                className="mt-2 w-full rounded-2xl border border-primary-500/20 bg-background-card px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-primary-300" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-2xl border border-primary-500/20 bg-background-card px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold text-primary-300" htmlFor="topic">
              Topic
            </label>
            <select
              id="topic"
              name="topic"
              className="mt-2 w-full rounded-2xl border border-primary-500/20 bg-background-card px-4 py-3 text-sm text-slate-100"
            >
              <option>Repair status</option>
              <option>Marketplace listing</option>
              <option>Enterprise SLA</option>
              <option>PC builder consult</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-semibold text-primary-300" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell us how we can help."
              className="mt-2 w-full rounded-2xl border border-primary-500/20 bg-background-card px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-primary-500 to-secondary-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-500/30 hover:from-primary-400 hover:to-secondary-500"
          >
            Send message
          </button>
          <p className="text-xs text-primary-300/70">
            We respond within one business hour during the workweek. Your request is logged in the customer portal for reference.
          </p>
        </form>
        <aside className="space-y-6">
          <div className="rounded-3xl border border-primary-500/20 bg-background-section/70 p-6 text-sm text-slate-300">
            <p className="text-lg font-semibold text-primary-300">Direct channels</p>
            <p className="mt-3 text-xs text-slate-400">WhatsApp +961 76 941 100 • Discord @gpudoctor • support@gpudoctor.com</p>
          </div>
          <div className="rounded-3xl border border-primary-500/20 bg-background-section/70 p-6 text-sm text-slate-300">
            <h2 className="text-lg font-semibold text-primary-300">Lab hours</h2>
            <p className="mt-3 text-xs text-slate-400">
              Monday–Friday 09:00–18:00 EET. Emergency coverage is available for esports events and production outages.
            </p>
          </div>
          <div className="rounded-3xl border border-primary-500/20 bg-background-section/70 p-6 text-sm text-slate-300">
            <h2 className="text-lg font-semibold text-primary-300">Global labs</h2>
            <ul className="mt-3 space-y-2 text-xs text-slate-400">
              <li>Austin, TX – Liquid cooling and immersion lab</li>
              <li>Toronto, CA – Enterprise refurb centre</li>
              <li>Remote hubs – Pop-up diagnostics for esports events</li>
            </ul>
          </div>
        </aside>
      </section>
    </main>
  )
}

export default ContactPage
