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
  const featuredServices = serviceCatalog.slice(0, 4)
  const featuredListings = marketplaceListings.slice(0, 3)

  return (
    <main className="bg-slate-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.35),_rgba(30,64,175,0.2)_45%,_transparent_70%)]" />
        <div className="absolute inset-y-0 right-0 -z-10 hidden w-1/2 bg-[radial-gradient(circle_at_top,_rgba(8,145,178,0.35),_transparent_60%)] lg:block" />
        <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-32 lg:grid-cols-[1.2fr_1fr] lg:px-10 xl:px-16">
          <header className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-300">
              Next-gen GPU care & custom rigs
            </span>
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Repair. Refurbish. Rebuild. All with the GPU Doctor lab on your side.
            </h1>
            <p className="max-w-xl text-lg text-slate-200">
              We specialise in GPU-first diagnostics, precision repairs, and bespoke PC builds. From esports arenas to AI
              clusters, our technicians and Atlas AI assistant keep your silicon stable, cool, and fast.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/repair-requests"
                className="rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:from-emerald-300 hover:via-cyan-300 hover:to-sky-400"
              >
                Book a repair intake
              </Link>
              <Link
                href="/marketplace"
                className="rounded-full border border-emerald-400/60 px-6 py-3 text-sm font-semibold text-emerald-200 transition hover:border-emerald-300 hover:text-emerald-100"
              >
                Explore the marketplace
              </Link>
            </div>
          </header>
          <aside className="rounded-3xl border border-emerald-500/20 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-lg font-semibold text-emerald-200">System Design Snapshot</h2>
            <ul className="mt-4 space-y-4 text-sm text-slate-200">
              <li>
                <strong className="text-white">Service hub:</strong> Customers create profiles, book diagnostics, approve
                quotes, and track repair history in real time.
              </li>
              <li>
                <strong className="text-white">Marketplace:</strong> Trade-in, refurbish, or buy certified GPUs plus
                technician-grade IC listings.
              </li>
              <li>
                <strong className="text-white">Builder studio:</strong> Compose PC builds, compare components, and visualise
                airflow before you buy.
              </li>
              <li>
                <strong className="text-white">Atlas assistant:</strong> AI-guided troubleshooting, repair status alerts, and
                forum copilot for the community.
              </li>
            </ul>
          </aside>
        </div>
        <div className="mx-auto flex max-w-6xl flex-wrap gap-6 px-6 pb-24 lg:px-10 xl:px-16">
          {landingMetrics.map(({ label, value, emphasis }) => (
            <div
              key={label}
              className="flex flex-1 min-w-[16rem] flex-col rounded-2xl border border-emerald-500/20 bg-white/5 px-6 py-5 backdrop-blur"
            >
              <span className="text-2xl font-semibold text-emerald-300">{value}</span>
              <span className="mt-2 text-sm font-medium text-slate-200">{label}</span>
              <p className="mt-3 text-xs text-slate-300">{emphasis}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-emerald-300">Why GPU Doctor?</h2>
              <p className="text-lg text-slate-200">
                We rebuilt the traditional repair shop into a full-stack GPU operations lab. Hardware telemetry feeds into our
                Atlas AI, technicians collaborate in clean rooms, and you control every step from a unified dashboard.
              </p>
              <div className="grid gap-6">
                {landingHighlights.map(({ title, description }) => (
                  <div key={title} className="rounded-2xl border border-emerald-500/10 bg-emerald-500/5 p-6">
                    <h3 className="text-lg font-semibold text-white">{title}</h3>
                    <p className="mt-3 text-sm text-slate-200">{description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-8 shadow-[0_20px_60px_-30px_rgba(16,185,129,0.5)]">
              <h3 className="text-xl font-semibold text-cyan-200">Repair journey, visualised</h3>
              <ol className="mt-6 space-y-6 text-sm text-slate-200">
                {repairMilestones.map(({ title, description, tip }, index) => (
                  <li key={title} className="relative pl-10">
                    <span className="absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 text-sm font-semibold text-slate-950">
                      {index + 1}
                    </span>
                    <div>
                      <h4 className="font-semibold text-white">{title}</h4>
                      <p className="mt-2 leading-6 text-slate-200">{description}</p>
                      {tip ? <p className="mt-1 text-xs text-emerald-300/80">Tip: {tip}</p> : null}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,_rgba(16,185,129,0.25),_transparent_65%)]" />
        <div className="mx-auto max-w-6xl px-6 lg:px-10 xl:px-16">
          <div className="flex flex-col items-start justify-between gap-6 pb-12 lg:flex-row">
            <div>
              <h2 className="text-3xl font-semibold text-emerald-300">GPU services engineered for every scenario</h2>
              <p className="mt-3 max-w-2xl text-slate-200">
                From emergency soldering to AI workstation optimisation, choose the repair path that matches your workload. Every
                service includes telemetry exports and lifetime history tracking.
              </p>
            </div>
            <Link
              href="/services"
              className="rounded-full border border-emerald-400/60 px-6 py-3 text-sm font-semibold text-emerald-200 transition hover:border-emerald-300 hover:text-emerald-100"
            >
              View all services
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredServices.map(({ name, description, price, turnaround, badge }) => (
              <article key={name} className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                {badge ? (
                  <span className="absolute right-6 top-6 rounded-full bg-emerald-400/90 px-3 py-1 text-xs font-semibold text-slate-900">
                    {badge}
                  </span>
                ) : null}
                <h3 className="text-lg font-semibold text-white">{name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-200">{description}</p>
                <div className="mt-6 flex items-center justify-between text-sm font-semibold text-emerald-300">
                  <span>{price}</span>
                  <span className="text-slate-200">{turnaround}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <h2 className="text-3xl font-semibold text-emerald-300">Certified GPU marketplace</h2>
              <p className="mt-4 text-slate-200">
                Buy, sell, and refurbish GPUs with confidence. Listings flagged as GPU Doctor certified include full telemetry
                history, stress reports, and extended warranties. Prefer DIY? Add an instant refurbish package before
                checkout.
              </p>
              <div className="mt-8 grid gap-6">
                {featuredListings.map(({ id, title, price, description, stats, location, refurbishedByDoctor, includesRefurbOption }) => (
                  <article key={id} className="rounded-3xl border border-emerald-500/10 bg-emerald-500/5 p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-white">{title}</h3>
                      <span className="text-sm font-semibold text-emerald-300">{price}</span>
                    </div>
                    <p className="mt-3 text-sm text-slate-200">{description}</p>
                    <p className="mt-4 text-xs text-emerald-300/80">{stats}</p>
                    <div className="mt-4 flex flex-wrap gap-3 text-xs">
                      <span className="rounded-full bg-white/10 px-3 py-1 text-slate-200">{location}</span>
                      {refurbishedByDoctor ? (
                        <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-emerald-200">GPU Doctor Certified</span>
                      ) : null}
                      {includesRefurbOption ? (
                        <span className="rounded-full bg-cyan-400/20 px-3 py-1 text-cyan-100">Refurbish on demand</span>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
              <Link
                href="/marketplace"
                className="mt-8 inline-flex items-center text-sm font-semibold text-emerald-200 hover:text-emerald-100"
              >
                Browse the full marketplace →
              </Link>
            </div>
            <div className="flex flex-col gap-8">
              <div className="rounded-3xl border border-cyan-500/10 bg-cyan-500/10 p-6 text-slate-950">
                <h3 className="text-lg font-semibold">Trade in or consign your GPU</h3>
                <p className="mt-3 text-sm text-slate-900">
                  Submit your hardware details, pick a refurbish package, and let our team handle the rest. Get instant price
                  guidance and shipping labels through your dashboard.
                </p>
                <Link
                  href="/sell"
                  className="mt-4 inline-flex items-center text-sm font-semibold text-slate-900 underline decoration-emerald-400 decoration-2"
                >
                  Sell your GPU →
                </Link>
              </div>
              <div className="rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/20 via-slate-900 to-slate-950 p-6 text-slate-200">
                <h3 className="text-lg font-semibold text-purple-100">Technician marketplace</h3>
                <p className="mt-3 text-sm">
                  Electronics technicians can post ICs, fan kits, and VRM components directly to our marketplace feed. Buyers can
                  request bench validation or bundling with repair orders.
                </p>
                <Link
                  href="/marketplace#technicians"
                  className="mt-4 inline-flex items-center text-sm font-semibold text-purple-100 hover:text-purple-50"
                >
                  View technician listings →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 xl:px-16">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-emerald-300">Build PCs the modern way</h2>
              <p className="mt-3 max-w-3xl text-slate-200">
                Select curated components, view them inside showcase cases, and export shopping lists or repair upgrades to your
                account. Our builder understands GPU clearance, PSU headroom, and coolant loop compatibility.
              </p>
            </div>
            <Link
              href="/builds"
              className="rounded-full border border-emerald-400/60 px-6 py-3 text-sm font-semibold text-emerald-200 transition hover:border-emerald-300 hover:text-emerald-100"
            >
              Launch the builder
            </Link>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {landingCtas.map(({ title, description, href }) => (
              <Link
                key={href}
                href={href}
                className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 text-left transition hover:border-emerald-400/40"
              >
                <div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm text-slate-200">{description}</p>
                </div>
                <span className="mt-6 text-sm font-semibold text-emerald-300 group-hover:text-emerald-200">Open →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <h2 className="text-3xl font-semibold text-emerald-300">Community, forums, and Atlas AI copilot</h2>
              <p className="mt-4 text-slate-200">
                Join thousands of builders, technicians, and creators discussing GPUs, firmware, and diagnostics. Our Atlas AI
                assistant lives on a dedicated subdomain to help debug issues, draft repair tickets, and compile benchmark logs
                instantly.
              </p>
              <div className="mt-8 grid gap-6">
                {forumHighlights.map(({ name, description }) => (
                  <article key={name} className="rounded-3xl border border-emerald-500/10 bg-emerald-500/5 p-6">
                    <h3 className="text-lg font-semibold text-white">{name}</h3>
                    <p className="mt-3 text-sm text-slate-200">{description}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-slate-700 bg-slate-900/80 p-8 shadow-[0_20px_50px_-30px_rgba(56,189,248,0.65)]">
              <h3 className="text-xl font-semibold text-cyan-200">What you can do today</h3>
              <ul className="mt-6 space-y-4 text-sm text-slate-200">
                <li>• Generate Atlas AI-assisted troubleshooting scripts before mailing in hardware.</li>
                <li>• Schedule virtual consults with technicians to review oscilloscope captures.</li>
                <li>• Track service history and market trends directly inside your GPU Doctor dashboard.</li>
              </ul>
              <Link
                href="/account"
                className="mt-8 inline-flex items-center text-sm font-semibold text-emerald-200 hover:text-emerald-100"
              >
                Visit your account →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
