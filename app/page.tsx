import Link from 'next/link'

import {
  landingMetrics,
  landingHighlights,
  serviceCatalog,
  repairMilestones,
  marketplaceListings,
  landingCtas,
} from './_data/site'

const Home = () => {
  const featuredServices = serviceCatalog.slice(0, 6)
  const featuredListings = marketplaceListings.slice(0, 3)

  return (
    <main className="bg-[color:var(--surface-950)] text-[color:var(--text-base)]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(61,214,140,0.25),_transparent_65%)]" />
        <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-32 lg:grid-cols-[1.25fr_1fr] lg:px-10 xl:px-16">
          <header className="space-y-6">
            <span className="inline-flex items-center rounded-full border border-[color:var(--accent-secondary)]/40 bg-[color:var(--accent-soft)] px-4 py-1 text-sm font-medium text-[color:var(--accent-secondary)]">
              GPU repairs, refurbishments, and hardware sourcing
            </span>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-[color:var(--text-strong)] sm:text-5xl lg:text-6xl">
              Precision GPU care with options for one-week or six-week repair paths.
            </h1>
            <p className="max-w-xl text-lg text-[color:var(--text-muted)]">
              Book diagnostics, choose a standard or expedited turnaround, and receive detailed certification reports. Diagnostic
              fees are always credited toward approved work, and warranty upgrades extend coverage to six weeks.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/repair-requests"
                className="rounded-full bg-[color:var(--accent-primary)] px-6 py-3 text-sm font-semibold text-[color:var(--surface-950)] shadow-lg shadow-[rgba(61,214,140,0.25)] transition hover:bg-[color:var(--accent-secondary)] hover:text-[color:var(--surface-900)]"
              >
                Start a repair intake
              </Link>
              <Link
                href="/store"
                className="rounded-full border border-[color:var(--accent-secondary)]/60 px-6 py-3 text-sm font-semibold text-[color:var(--accent-secondary)] transition hover:border-[color:var(--accent-secondary)] hover:text-[color:var(--accent-secondary)]"
              >
                Shop the store
              </Link>
            </div>
          </header>
          <aside className="rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/70 p-6 backdrop-blur">
            <h2 className="text-lg font-semibold text-[color:var(--text-strong)]">Service structure at a glance</h2>
            <ul className="mt-4 space-y-4 text-sm text-[color:var(--text-base)]">
              <li>
                <strong className="text-[color:var(--text-strong)]">Diagnostic intake:</strong> $79 credited toward repairs with a
                full report inside 48 hours.
              </li>
              <li>
                <strong className="text-[color:var(--text-strong)]">Turnaround options:</strong> Standard repairs complete within 6
                weeks, expedited queue delivers in 7 days.
              </li>
              <li>
                <strong className="text-[color:var(--text-strong)]">Warranty coverage:</strong> Every repair includes a 1-week
                warranty that can be extended to six weeks.
              </li>
              <li>
                <strong className="text-[color:var(--text-strong)]">Shipping support:</strong> Insured, documented shipments with
                reusable packaging and status alerts.
              </li>
            </ul>
          </aside>
        </div>
        <div className="mx-auto flex max-w-6xl flex-wrap gap-6 px-6 pb-24 lg:px-10 xl:px-16">
          {landingMetrics.map(({ label, value, emphasis }) => (
            <div
              key={label}
              className="flex flex-1 min-w-[16rem] flex-col rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/75 px-6 py-5 backdrop-blur"
            >
              <span className="text-2xl font-semibold text-[color:var(--accent-secondary)]">{value}</span>
              <span className="mt-2 text-sm font-medium text-[color:var(--text-strong)]">{label}</span>
              <p className="mt-3 text-xs text-[color:var(--text-muted)]">{emphasis}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr]">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-[color:var(--text-strong)]">Why technicians trust GPU Doctor</h2>
              <p className="text-lg text-[color:var(--text-muted)]">
                Experienced technicians handle every ticket from intake to shipping. Our documentation mirrors what you would
                expect inside an engineering lab so you know exactly how your hardware was treated.
              </p>
              <div className="grid gap-6">
                {landingHighlights.map(({ title, description }) => (
                  <div key={title} className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/75 p-6">
                    <h3 className="text-lg font-semibold text-[color:var(--text-strong)]">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[color:var(--text-base)]">{description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/80 p-8 shadow-[0_24px_60px_-30px_rgba(61,214,140,0.45)]">
              <h3 className="text-xl font-semibold text-[color:var(--text-strong)]">Repair journey</h3>
              <ol className="mt-6 space-y-6 text-sm text-[color:var(--text-base)]">
                {repairMilestones.map(({ title, description, tip }, index) => (
                  <li key={title} className="relative pl-10">
                    <span className="absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full bg-[color:var(--accent-primary)] text-sm font-semibold text-[color:var(--surface-950)]">
                      {index + 1}
                    </span>
                    <div>
                      <h4 className="font-semibold text-[color:var(--text-strong)]">{title}</h4>
                      <p className="mt-2 leading-6 text-[color:var(--text-base)]">{description}</p>
                      {tip ? <p className="mt-1 text-xs text-[color:var(--accent-secondary)]/80">Tip: {tip}</p> : null}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--surface-900)]/60 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 xl:px-16">
          <div className="flex flex-col items-start justify-between gap-6 pb-12 lg:flex-row">
            <div>
              <h2 className="text-3xl font-semibold text-[color:var(--text-strong)]">Service pricing and bundles</h2>
              <p className="mt-3 max-w-2xl text-[color:var(--text-muted)]">
                Inspired by the clear pricing model at vik-on.com, our tiers are transparent. Choose the level that matches how
                quickly you need your GPU back in service.
              </p>
            </div>
            <Link
              href="/services"
              className="rounded-full border border-[color:var(--accent-secondary)]/60 px-6 py-3 text-sm font-semibold text-[color:var(--accent-secondary)] transition hover:border-[color:var(--accent-secondary)]"
            >
              View detailed services
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <article className="rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)]/85 p-6">
              <h3 className="text-lg font-semibold text-[color:var(--text-strong)]">Diagnostics</h3>
              <p className="mt-3 text-sm text-[color:var(--text-base)]">
                Visual inspection, electrical testing, and written report. Diagnostic fees are fully credited toward approved
                repairs.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-[color:var(--text-muted)]">
                <li>• $79 diagnostic fee</li>
                <li>• Report within 48 hours</li>
                <li>• Shipping coordination available</li>
              </ul>
              <p className="mt-6 text-sm font-semibold text-[color:var(--accent-secondary)]">Best for: identifying fault domains</p>
            </article>
            <article className="rounded-3xl border border-[color:var(--accent-secondary)]/50 bg-[color:var(--surface-950)]/90 p-6 shadow-[0_20px_40px_-28px_rgba(61,214,140,0.6)]">
              <h3 className="text-lg font-semibold text-[color:var(--text-strong)]">Standard repair</h3>
              <p className="mt-3 text-sm text-[color:var(--text-base)]">
                Full component-level repair with a six-week processing window. Includes cleaning, replacement parts, and one-week
                warranty.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-[color:var(--text-muted)]">
                <li>• From $199 depending on fault</li>
                <li>• Burn-in report included</li>
                <li>• Warranty upgrade available</li>
              </ul>
              <p className="mt-6 text-sm font-semibold text-[color:var(--accent-secondary)]">Best for: planned maintenance</p>
            </article>
            <article className="rounded-3xl border border-[color:var(--accent-secondary)]/70 bg-[color:var(--surface-950)]/90 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-[color:var(--text-strong)]">Expedited repair</h3>
                <span className="rounded-full bg-[color:var(--accent-primary)]/20 px-3 py-1 text-xs font-semibold text-[color:var(--accent-secondary)]">
                  7-day turnaround
                </span>
              </div>
              <p className="mt-3 text-sm text-[color:var(--text-base)]">
                Priority queue with guaranteed bench time and insured return shipping. Perfect for production environments where
                downtime is expensive.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-[color:var(--text-muted)]">
                <li>• From $349 including priority parts sourcing</li>
                <li>• Includes return shipping upgrade</li>
                <li>• Combine with warranty extension for six-week coverage</li>
              </ul>
              <p className="mt-6 text-sm font-semibold text-[color:var(--accent-secondary)]">Best for: urgent recoveries</p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 xl:px-16">
          <div className="flex flex-col items-start justify-between gap-6 pb-12 lg:flex-row">
            <div>
              <h2 className="text-3xl font-semibold text-[color:var(--text-strong)]">Popular services</h2>
              <p className="mt-3 max-w-2xl text-[color:var(--text-muted)]">
                Thermal material refreshes, preventative maintenance, and certification packages are available individually or as
                add-ons to repair tickets and store purchases.
              </p>
            </div>
            <Link
              href="/repair-requests"
              className="rounded-full border border-[color:var(--accent-secondary)]/60 px-6 py-3 text-sm font-semibold text-[color:var(--accent-secondary)] transition hover:border-[color:var(--accent-secondary)]"
            >
              Request a custom quote
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredServices.map(({ name, description, price, turnaround, badge }) => (
              <article key={name} className="relative rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/70 p-6">
                {badge ? (
                  <span className="absolute right-6 top-6 rounded-full bg-[color:var(--accent-primary)]/90 px-3 py-1 text-xs font-semibold text-[color:var(--surface-950)]">
                    {badge}
                  </span>
                ) : null}
                <h3 className="text-lg font-semibold text-[color:var(--text-strong)]">{name}</h3>
                <p className="mt-3 text-sm leading-6 text-[color:var(--text-base)]">{description}</p>
                <div className="mt-6 flex items-center justify-between text-sm font-semibold text-[color:var(--accent-secondary)]">
                  <span>{price}</span>
                  <span className="text-[color:var(--text-muted)]">{turnaround}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--surface-900)]/70 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <h2 className="text-3xl font-semibold text-[color:var(--text-strong)]">Marketplace highlights</h2>
              <p className="mt-4 text-[color:var(--text-muted)]">
                Buy and sell GPUs with full documentation. Listings marked as GPU Doctor Certified include diagnostics, thermal
                service, and warranty options. Add the refurbish package at checkout to refresh pads, paste, and fans before we
                ship.
              </p>
              <div className="mt-8 grid gap-6">
                {featuredListings.map(({ id, title, price, description, stats, location, refurbishedByDoctor, includesRefurbOption }) => (
                  <article key={id} className="rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)]/85 p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-[color:var(--text-strong)]">{title}</h3>
                      <span className="text-sm font-semibold text-[color:var(--accent-secondary)]">{price}</span>
                    </div>
                    <p className="mt-3 text-sm text-[color:var(--text-base)]">{description}</p>
                    <p className="mt-4 text-xs text-[color:var(--accent-secondary)]/80">{stats}</p>
                    <div className="mt-4 flex flex-wrap gap-3 text-xs">
                      <span className="rounded-full bg-[color:var(--surface-900)] px-3 py-1 text-[color:var(--text-base)]">{location}</span>
                      {refurbishedByDoctor ? (
                        <span className="rounded-full bg-[color:var(--accent-primary)]/20 px-3 py-1 text-[color:var(--accent-secondary)]">GPU Doctor Certified</span>
                      ) : null}
                      {includesRefurbOption ? (
                        <span className="rounded-full bg-[color:var(--accent-secondary)]/10 px-3 py-1 text-[color:var(--accent-secondary)]">Refurbish add-on</span>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
              <Link
                href="/marketplace"
                className="mt-8 inline-flex items-center text-sm font-semibold text-[color:var(--accent-secondary)] hover:text-[color:var(--accent-secondary)]/80"
              >
                Browse the marketplace →
              </Link>
            </div>
            <div className="flex flex-col gap-8">
              <div className="rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)]/85 p-8 text-sm text-[color:var(--text-base)]">
                <h3 className="text-xl font-semibold text-[color:var(--text-strong)]">Customer protections</h3>
                <ul className="mt-4 space-y-3">
                  <li>• One-week warranty on every repair with optional six-week extension.</li>
                  <li>• Insured shipping both ways with photo documentation.</li>
                  <li>• Expedited repairs get priority tracking and technician updates.</li>
                </ul>
              </div>
              <div className="rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/75 p-8 text-sm text-[color:var(--text-base)]">
                <h3 className="text-xl font-semibold text-[color:var(--text-strong)]">Need the portal?</h3>
                <p className="mt-3 text-sm">
                  portal.gpudoctor.com consolidates repair history, invoices, stored builds, saved carts, and shipping addresses.
                  Use it to approve quotes, download receipts, and manage billing preferences.
                </p>
                <Link
                  href="/portal"
                  className="mt-4 inline-flex items-center text-sm font-semibold text-[color:var(--accent-secondary)] hover:text-[color:var(--accent-secondary)]/80"
                >
                  Explore the portal features →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 text-center lg:px-10 xl:px-16">
          <h2 className="text-3xl font-semibold text-[color:var(--text-strong)]">Choose your next step</h2>
          <p className="mt-4 text-sm text-[color:var(--text-muted)]">
            Whether you are mailing hardware for diagnostics, shopping refurbished GPUs, or building from scratch, we provide the
            structure and documentation needed to protect your investment.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {landingCtas.map(({ title, href, description }) => (
              <Link
                key={href}
                href={href}
                className="flex w-full max-w-sm flex-col items-start rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/70 p-6 text-left transition hover:border-[color:var(--accent-secondary)]/60"
              >
                <span className="text-base font-semibold text-[color:var(--text-strong)]">{title}</span>
                <span className="mt-2 text-xs text-[color:var(--text-muted)]">{description}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
