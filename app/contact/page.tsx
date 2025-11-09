import type { Metadata } from 'next'

import PageHeader from '@/app/_components/PageHeader'

export const metadata: Metadata = {
  title: 'Contact',
}

const ContactPage = () => {
  return (
    <main className="bg-[color:var(--surface-950)] text-[color:var(--text-base)]">
      <PageHeader
        title="Contact our technicians"
        description="Need diagnostic help, enterprise quotes, or marketplace assistance? Reach our labs and a specialist will respond quickly."
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 xl:px-16">
        <form className="space-y-6 rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/70 p-8 text-sm backdrop-blur">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="text-sm font-semibold text-[color:var(--text-strong)]" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                className="mt-2 w-full rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)] px-4 py-3 text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-[color:var(--text-strong)]" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)] px-4 py-3 text-sm"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold text-[color:var(--text-strong)]" htmlFor="topic">
              Topic
            </label>
            <select
              id="topic"
              name="topic"
              className="mt-2 w-full rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)] px-4 py-3 text-sm"
            >
              <option>Repair status</option>
              <option>Marketplace listing</option>
              <option>Enterprise SLA</option>
              <option>PC builder consult</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-semibold text-[color:var(--text-strong)]" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell us how we can help."
              className="mt-2 w-full rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)] px-4 py-3 text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-[color:var(--accent-primary)] px-6 py-3 text-sm font-semibold text-[color:var(--surface-950)] shadow-lg shadow-[rgba(61,214,140,0.25)] hover:bg-[color:var(--accent-secondary)] hover:text-[color:var(--surface-900)]"
          >
            Send message
          </button>
          <p className="text-xs text-[color:var(--text-muted)]">
            We respond within one business hour. You will receive a confirmation ticket in the portal and by email.
          </p>
        </form>
        <aside className="space-y-6 text-sm">
          <div className="rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)]/85 p-6">
            <p className="text-lg font-semibold text-[color:var(--text-strong)]">Direct channels</p>
            <p className="mt-3 text-xs text-[color:var(--text-base)]">WhatsApp +961 76 941 100 • Discord @gpudoctor • support@gpudoctor.com</p>
          </div>
          <div className="rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/70 p-6">
            <h2 className="text-lg font-semibold text-[color:var(--text-strong)]">Lab hours</h2>
            <p className="mt-3 text-xs text-[color:var(--text-base)]">
              Monday–Friday 09:00–18:00 EET. Emergency coverage is available for esports events and production outages.
            </p>
          </div>
          <div className="rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/70 p-6">
            <h2 className="text-lg font-semibold text-[color:var(--text-strong)]">Global labs</h2>
            <ul className="mt-3 space-y-2 text-xs text-[color:var(--text-base)]">
              <li>Austin, TX – Liquid cooling and refurbishment lab</li>
              <li>Toronto, CA – Enterprise service centre</li>
              <li>Remote hubs – Pop-up diagnostics for events</li>
            </ul>
          </div>
        </aside>
      </section>
    </main>
  )
}

export default ContactPage
