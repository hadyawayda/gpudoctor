import type { Metadata } from "next";
import Link from "next/link";

import PageHeader from "@shared/PageHeader";

import { serviceCatalog } from "@data/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "GPU diagnostics, thermal maintenance, refurbishment, and certification packages with documented timelines and warranties.",
};

const ServicesPage = () => {
  const categories = Array.from(
    new Set(serviceCatalog.map((service) => service.category))
  );

  return (
    <main className="bg-background-base pb-24 text-slate-100">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-500/15 via-background-base to-background-base" />
        <PageHeader
          title="GPU services engineered for reliability"
          description="Choose diagnostics, repairs, maintenance, and certification packages that include written timelines, rush options, and documented test results."
          actions={
            <Link
              href="/repair-requests"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-primary-500 to-secondary-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-500/30 hover:from-primary-400 hover:to-secondary-500"
            >
              Start a repair intake
            </Link>
          }
        />
      </div>

      <section className="mx-auto max-w-6xl px-6 lg:px-10 xl:px-16">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category}
              className="rounded-3xl border border-primary-500/20 bg-background-section/70 p-6"
            >
              <header className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-primary-300">
                  {category}
                </h2>
              </header>
              <ul className="mt-6 space-y-5 text-sm text-slate-300">
                {serviceCatalog
                  .filter((service) => service.category === category)
                  .map(({ name, description, price, turnaround, badge }) => (
                    <li
                      key={name}
                      className="rounded-2xl border border-primary-500/15 bg-background-card/80 p-4"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-base font-semibold text-slate-100">
                            {name}
                          </p>
                          <p className="mt-2 leading-6">{description}</p>
                        </div>
                        <div className="text-right text-sm font-semibold text-primary-300">
                          <p>{price}</p>
                          <p className="mt-1 text-xs text-primary-300/70">
                            {turnaround}
                          </p>
                        </div>
                      </div>
                      {badge ? (
                        <p className="mt-4 inline-flex rounded-full bg-gradient-to-r from-primary-500/20 to-accent-500/20 px-3 py-1 text-xs font-semibold text-accent-300">
                          {badge}
                        </p>
                      ) : null}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-6 lg:px-10 xl:px-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="rounded-3xl border border-primary-500/20 bg-background-section/70 p-8">
            <h2 className="text-2xl font-semibold text-primary-300">
              Your rights & documentation
            </h2>
            <p className="mt-4 text-sm text-slate-300">
              Every service produces written notes, photos, and stress results
              stored in your customer portal. Use them to prove the work was
              completed, transfer warranties to buyers, or file insurance
              claims.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-400">
              <li>
                • Intake, approval, and completion timestamps recorded for each
                step.
              </li>
              <li>
                • Optional rush service guarantees in writing with refund
                clauses.
              </li>
              <li>
                • Certification badges and warranty extensions ready for resale
                listings.
              </li>
            </ul>
            <Link
              href="/support"
              className="mt-6 inline-flex items-center text-sm font-semibold text-accent-300 hover:text-accent-200"
            >
              Review policies in the support center →
            </Link>
          </div>
          <div className="rounded-3xl border border-secondary-500/20 bg-background-section/70 p-8 text-sm text-slate-300">
            <h2 className="text-2xl font-semibold text-secondary-300">
              Suggested bundles
            </h2>
            <dl className="mt-6 space-y-5">
              <div className="rounded-2xl border border-primary-500/15 bg-background-card/80 p-5">
                <dt className="font-semibold text-slate-100">Rush Revival</dt>
                <dd className="mt-2">
                  Diagnostic bench evaluation, expedited 7-day lane, and
                  warranty extension upgrade.
                </dd>
                <p className="mt-3 text-xs font-semibold text-primary-300">
                  $347 • 7-day completion
                </p>
              </div>
              <div className="rounded-2xl border border-primary-500/15 bg-background-card/80 p-5">
                <dt className="font-semibold text-slate-100">
                  Creator Refresh
                </dt>
                <dd className="mt-2">
                  Thermal overhaul, preventive maintenance service, and
                  performance re-tuning.
                </dd>
                <p className="mt-3 text-xs font-semibold text-primary-300">
                  $297 • 5-day completion
                </p>
              </div>
              <div className="rounded-2xl border border-primary-500/15 bg-background-card/80 p-5">
                <dt className="font-semibold text-slate-100">
                  Certified resale prep
                </dt>
                <dd className="mt-2">
                  Refurbishment package, GPU Doctor Certified inspection, and
                  warranty extension upgrade.
                </dd>
                <p className="mt-3 text-xs font-semibold text-primary-300">
                  $327 • 10-day completion
                </p>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
