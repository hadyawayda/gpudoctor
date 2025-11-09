import type { Metadata } from 'next'
import PageHeader from '@/app/_components/PageHeader'

export const metadata: Metadata = {
  title: 'Contact',
}

const ContactPage = () => {
  return (
    <main className="bg-slate-950 text-white">
      <PageHeader
        title="Contact our technicians"
        description="Need diagnostic help, enterprise quotes, or marketplace assistance? Reach our labs anytime and Atlas AI will route your request."
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 xl:px-16">
        <form className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 text-sm text-slate-200 backdrop-blur">
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
                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-500"
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
                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-500"
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
              className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white"
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
              className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-500"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 hover:from-emerald-300 hover:via-cyan-300 hover:to-sky-400"
          >
            Send message
          </button>
          <p className="text-xs text-slate-400">
            We respond within one business hour. Atlas AI generates a ticket and sends you status alerts automatically.
          </p>
        </form>
        <aside className="space-y-6">
          <div className="rounded-3xl border border-emerald-500/10 bg-emerald-500/10 p-6 text-sm text-emerald-200">
            <p className="text-lg font-semibold text-white">Direct channels</p>
            <p className="mt-3 text-xs text-emerald-200/80">WhatsApp +961 76 941 100 • Discord @gpudoctor • support@gpudoctor.com</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200">
            <h2 className="text-lg font-semibold text-emerald-200">Lab hours</h2>
            <p className="mt-3 text-xs text-slate-300">
              Monday–Friday 09:00–18:00 EET. Emergency coverage is available for esports events and production outages.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200">
            <h2 className="text-lg font-semibold text-emerald-200">Global labs</h2>
            <ul className="mt-3 space-y-2 text-xs text-slate-300">
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
