import type { Metadata } from 'next'
import PageHeader from '@/app/shared/PageHeader'

export const metadata: Metadata = {
  title: 'Contact',
}

const ContactPage = () => {
  return (
    <main className="bg-[#07130e] text-emerald-50">
      <PageHeader
        title="Contact our technicians"
        description="Need diagnostic help, enterprise quotes, or marketplace assistance? Reach our labs anytime and a technician will confirm your ticket."
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 xl:px-16">
        <form className="space-y-6 rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-8 text-sm text-emerald-50/80">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="text-sm font-semibold text-emerald-200" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                className="mt-2 w-full rounded-2xl border border-emerald-500/20 bg-[#091810] px-4 py-3 text-sm text-emerald-50 placeholder:text-emerald-200/40"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-emerald-200" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-2xl border border-emerald-500/20 bg-[#091810] px-4 py-3 text-sm text-emerald-50 placeholder:text-emerald-200/40"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold text-emerald-200" htmlFor="topic">
              Topic
            </label>
            <select
              id="topic"
              name="topic"
              className="mt-2 w-full rounded-2xl border border-emerald-500/20 bg-[#091810] px-4 py-3 text-sm text-emerald-50"
            >
              <option>Repair status</option>
              <option>Marketplace listing</option>
              <option>Enterprise SLA</option>
              <option>PC builder consult</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-semibold text-emerald-200" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell us how we can help."
              className="mt-2 w-full rounded-2xl border border-emerald-500/20 bg-[#091810] px-4 py-3 text-sm text-emerald-50 placeholder:text-emerald-200/40"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-300 px-6 py-3 text-sm font-semibold text-[#07130e] shadow-lg shadow-emerald-500/30 hover:from-emerald-300 hover:to-teal-200"
          >
            Send message
          </button>
          <p className="text-xs text-emerald-200/70">
            We respond within one business hour during the workweek. Your request is logged in the customer portal for reference.
          </p>
        </form>
        <aside className="space-y-6">
          <div className="rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-6 text-sm text-emerald-50/80">
            <p className="text-lg font-semibold text-emerald-200">Direct channels</p>
            <p className="mt-3 text-xs text-emerald-50/70">WhatsApp +961 76 941 100 • Discord @gpudoctor • support@gpudoctor.com</p>
          </div>
          <div className="rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-6 text-sm text-emerald-50/80">
            <h2 className="text-lg font-semibold text-emerald-200">Lab hours</h2>
            <p className="mt-3 text-xs text-emerald-50/70">
              Monday–Friday 09:00–18:00 EET. Emergency coverage is available for esports events and production outages.
            </p>
          </div>
          <div className="rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-6 text-sm text-emerald-50/80">
            <h2 className="text-lg font-semibold text-emerald-200">Global labs</h2>
            <ul className="mt-3 space-y-2 text-xs text-emerald-50/70">
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
