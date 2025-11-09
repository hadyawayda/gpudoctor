import Link from 'next/link'

import {
  landingMetrics,
  landingHighlights,
  serviceCatalog,
  repairMilestones,
  marketplaceListings,
  landingCtas,
  forumHighlights,
} from './_data/site'

const Home = () => {
  const featuredServices = serviceCatalog.slice(0, 6)
  const featuredListings = marketplaceListings.slice(0, 3)

  return (
    <main className="bg-[#06140e] text-emerald-50">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(60,227,123,0.3),_rgba(10,31,23,0.95)_65%)]" />
        <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-32 lg:grid-cols-[1.2fr_1fr] lg:px-10 xl:px-16">
          <header className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-emerald-400/10 px-4 py-1 text-sm font-medium text-emerald-200">
              GPU repair lab & certified marketplace
            </span>
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Protect your GPUs with documented repairs, fair timelines, and transparent pricing.
            </h1>
            <p className="max-w-xl text-lg text-emerald-50/80">
              GPU Doctor pairs board-level expertise with written guarantees. Pay the diagnostic fee, choose the standard 6-week
              workflow or upgrade to the 7-day expedited lane, and receive stress-tested hardware backed by a 7-day warranty with
              optional 6-week extension.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/repair-requests"
                className="rounded-full bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-300 px-6 py-3 text-sm font-semibold text-[#07130e] shadow-lg shadow-emerald-500/30 transition hover:from-emerald-300 hover:to-teal-200"
              >
                Schedule a repair intake
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-emerald-400/60 px-6 py-3 text-sm font-semibold text-emerald-100 transition hover:border-emerald-300 hover:text-emerald-50"
              >
                Explore services
              </Link>
            </div>
          </header>
          <aside className="rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/80 p-6 backdrop-blur">
            <h2 className="text-lg font-semibold text-emerald-200">What every job includes</h2>
            <ul className="mt-4 space-y-4 text-sm text-emerald-50/80">
              <li>
                <strong className="text-emerald-100">Documented intake:</strong> Serial photos, condition notes, and proof of
                ownership stored in your account.
              </li>
              <li>
                <strong className="text-emerald-100">Published timelines:</strong> Standard 6-week queue or 7-day expedited lane with
                daily status messages.
              </li>
              <li>
                <strong className="text-emerald-100">Certified handoff:</strong> Stress logs, temperature reports, and warranty options
                attached to every return shipment.
              </li>
            </ul>
          </aside>
        </div>
        <div className="mx-auto flex max-w-6xl flex-wrap gap-6 px-6 pb-24 lg:px-10 xl:px-16">
          {landingMetrics.map(({ label, value, emphasis }) => (
            <div
              key={label}
              className="flex flex-1 min-w-[16rem] flex-col rounded-2xl border border-emerald-500/20 bg-[#0b1f17]/70 px-6 py-5"
            >
              <span className="text-2xl font-semibold text-emerald-200">{value}</span>
              <span className="mt-2 text-sm font-medium text-emerald-50/80">{label}</span>
              <p className="mt-3 text-xs text-emerald-50/70">{emphasis}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#07130e] py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-emerald-200">Why technicians trust GPU Doctor</h2>
              <p className="text-lg text-emerald-50/80">
                You get a partner who respects the value of your hardware. Every diagnosis, solder, and shipment is executed with
                documented accountability so your rights stay preserved.
              </p>
              <div className="grid gap-6">
                {landingHighlights.map(({ title, description }) => (
                  <div key={title} className="rounded-2xl border border-emerald-500/15 bg-[#0b1f17]/70 p-6">
                    <h3 className="text-lg font-semibold text-emerald-100">{title}</h3>
                    <p className="mt-3 text-sm text-emerald-50/80">{description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-emerald-500/25 bg-[#0b1f17]/80 p-8 shadow-[0_20px_60px_-30px_rgba(60,227,123,0.45)]">
              <h3 className="text-xl font-semibold text-emerald-200">Repair journey overview</h3>
              <ol className="mt-6 space-y-6 text-sm text-emerald-50/80">
                {repairMilestones.map(({ title, description, tip }, index) => (
                  <li key={title} className="relative pl-10">
                    <span className="absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 text-sm font-semibold text-[#07130e]">
                      {index + 1}
                    </span>
                    <div>
                      <h4 className="font-semibold text-emerald-100">{title}</h4>
                      <p className="mt-2 leading-6">{description}</p>
                      {tip ? <p className="mt-1 text-xs text-emerald-200/80">Tip: {tip}</p> : null}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#07130e] py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 xl:px-16">
          <div className="flex flex-col items-start justify-between gap-6 pb-12 lg:flex-row">
            <div>
              <h2 className="text-3xl font-semibold text-emerald-200">Service menu highlights</h2>
              <p className="mt-3 max-w-2xl text-emerald-50/80">
                From thermal refreshes to certification badges, choose the services that keep your GPUs cool, compliant, and ready
                for resale.
              </p>
            </div>
            <Link
              href="/services"
              className="rounded-full border border-emerald-400/60 px-6 py-3 text-sm font-semibold text-emerald-100 transition hover:border-emerald-300 hover:text-emerald-50"
            >
              View all services
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredServices.map(({ name, description, price, turnaround, badge }) => (
              <article key={name} className="relative rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-6">
                {badge ? (
                  <span className="absolute right-6 top-6 rounded-full bg-emerald-400/90 px-3 py-1 text-xs font-semibold text-[#07130e]">
                    {badge}
                  </span>
                ) : null}
                <h3 className="text-lg font-semibold text-emerald-100">{name}</h3>
                <p className="mt-3 text-sm leading-6 text-emerald-50/80">{description}</p>
                <div className="mt-6 flex items-center justify-between text-sm font-semibold text-emerald-200">
                  <span>{price}</span>
                  <span className="text-emerald-50/70">{turnaround}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#081910] py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 xl:px-16">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-emerald-200">Pricing, fees, and guarantees</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-6 text-sm text-emerald-50/80">
                  <h3 className="text-lg font-semibold text-emerald-100">Diagnostic fee</h3>
                  <p className="mt-3">
                    $89 covers intake, testing, and reporting. Approve the quote and the fee is automatically credited toward the
                    repair.
                  </p>
                </div>
                <div className="rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-6 text-sm text-emerald-50/80">
                  <h3 className="text-lg font-semibold text-emerald-100">Expedited option</h3>
                  <p className="mt-3">
                    Add the $199 rush upgrade to jump into a 7-day repair lane. If we miss the promise, the rush fee is refunded.
                  </p>
                </div>
                <div className="rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-6 text-sm text-emerald-50/80">
                  <h3 className="text-lg font-semibold text-emerald-100">Standard workflow</h3>
                  <p className="mt-3">
                    Our standard queue completes within six weeks and includes weekly updates plus optional maintenance add-ons.
                  </p>
                </div>
                <div className="rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-6 text-sm text-emerald-50/80">
                  <h3 className="text-lg font-semibold text-emerald-100">Warranty options</h3>
                  <p className="mt-3">
                    Every repair ships with a 7-day workmanship warranty. Upgrade to 6 weeks for $59 and transfer coverage to your
                    buyer.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-8">
              <h3 className="text-xl font-semibold text-emerald-200">Customer protections</h3>
              <ul className="mt-6 space-y-4 text-sm text-emerald-50/80">
                {forumHighlights.map(({ name, description }) => (
                  <li key={name} className="rounded-2xl border border-emerald-500/15 bg-[#0d2018]/80 p-4">
                    <p className="text-sm font-semibold text-emerald-100">{name}</p>
                    <p className="mt-2 text-xs text-emerald-50/75">{description}</p>
                  </li>
                ))}
              </ul>
              <Link
                href="/support"
                className="mt-6 inline-flex items-center text-sm font-semibold text-emerald-100 hover:text-emerald-50"
              >
                Visit the support center →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#07130e] py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h2 className="text-3xl font-semibold text-emerald-200">Marketplace & store highlights</h2>
              <p className="mt-4 text-emerald-50/80">
                Certified listings, refurb-ready trade-ins, and curated store inventory all include thermal data and paperwork so
                you know exactly what you are buying.
              </p>
              <div className="mt-8 grid gap-6">
                {featuredListings.map(({ id, title, price, description, stats, location, refurbishedByDoctor, includesRefurbOption }) => (
                  <article key={id} className="rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-emerald-100">{title}</h3>
                      <span className="text-sm font-semibold text-emerald-200">{price}</span>
                    </div>
                    <p className="mt-3 text-sm text-emerald-50/80">{description}</p>
                    <p className="mt-4 text-xs text-emerald-200/80">{stats}</p>
                    <div className="mt-4 flex flex-wrap gap-3 text-xs text-emerald-50/75">
                      <span className="rounded-full bg-emerald-400/10 px-3 py-1">{location}</span>
                      {refurbishedByDoctor ? (
                        <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-emerald-100">GPU Doctor Certified</span>
                      ) : null}
                      {includesRefurbOption ? (
                        <span className="rounded-full bg-teal-400/20 px-3 py-1 text-emerald-100">Refurbish add-on available</span>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link className="text-sm font-semibold text-emerald-100 hover:text-emerald-50" href="/marketplace">
                  Browse the full marketplace →
                </Link>
                <Link className="text-sm font-semibold text-emerald-100 hover:text-emerald-50" href="/store">
                  Shop the store →
                </Link>
              </div>
            </div>
            <aside className="flex flex-col gap-8">
              <div className="rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-6">
                <h3 className="text-lg font-semibold text-emerald-200">Sell or consign</h3>
                <p className="mt-3 text-sm text-emerald-50/80">
                  Submit your hardware details, choose refurbish add-ons, and we handle photography, documentation, and payment
                  release once the buyer signs off.
                </p>
                <Link className="mt-4 inline-flex items-center text-sm font-semibold text-emerald-100 hover:text-emerald-50" href="/sell">
                  Sell your GPU →
                </Link>
              </div>
              <div className="rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-6">
                <h3 className="text-lg font-semibold text-emerald-200">Customer portal</h3>
                <p className="mt-3 text-sm text-emerald-50/80">
                  Track invoices, addresses, saved builds, and repair history from portal.gpudoctor.com. Export documents when you
                  need proof for buyers or insurance claims.
                </p>
                <Link className="mt-4 inline-flex items-center text-sm font-semibold text-emerald-100 hover:text-emerald-50" href="/portal">
                  Explore the portal →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-[#06140e] pb-24">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-10 xl:px-16">
          <h2 className="text-3xl font-semibold text-emerald-200">Get started today</h2>
          <p className="mt-4 text-sm text-emerald-50/80">
            Whether you need a rush repair, preventive maintenance, or verified hardware, GPU Doctor keeps your equipment protected
            with transparent paperwork and support.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {landingCtas.map(({ title, description, href }) => (
              <Link
                key={href}
                href={href}
                className="group flex flex-col justify-between rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-6 text-left transition hover:border-emerald-400/50"
              >
                <div>
                  <h3 className="text-lg font-semibold text-emerald-100">{title}</h3>
                  <p className="mt-3 text-sm text-emerald-50/80">{description}</p>
                </div>
                <span className="mt-6 text-sm font-semibold text-emerald-200 group-hover:text-emerald-100">Open →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
