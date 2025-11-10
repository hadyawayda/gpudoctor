import type { Metadata } from "next";
import Link from "next/link";

import PageHeader from "@shared/PageHeader";

export const metadata: Metadata = {
  title: "Terms of Service",
};

const TermsPage = () => {
  return (
    <main className="bg-background-base text-slate-100">
      <PageHeader
        title="Terms of service"
        description="These terms outline how GPU Doctor delivers services, protects your hardware, and upholds technician and customer rights."
      />
      <section className="mx-auto max-w-5xl px-6 pb-24 lg:px-10 xl:px-16">
        <div className="space-y-8 text-sm leading-7 text-slate-300">
          <article className="rounded-3xl border border-primary-500/20 bg-background-section/70 p-6">
            <h2 className="text-lg font-semibold text-primary-300">
              Service approval
            </h2>
            <p className="mt-3">
              Diagnostics begin once the $89 intake fee is paid. No repair work
              is performed until you approve a written quote that lists labor,
              parts, and optional rush or warranty upgrades. Declining service
              ends the process and we return your hardware after collecting any
              outstanding shipping costs.
            </p>
          </article>
          <article className="rounded-3xl border border-primary-500/20 bg-background-section/70 p-6">
            <h2 className="text-lg font-semibold text-primary-300">
              Payments & billing
            </h2>
            <p className="mt-3">
              We accept major credit cards, wire transfers, and approved
              purchase orders for enterprise clients. Quotes are valid for seven
              days; parts availability may require re-quoting after that window.
              Taxes are calculated based on the service location and appear on
              invoices stored in your customer portal.
            </p>
          </article>
          <article className="rounded-3xl border border-primary-500/20 bg-background-section/70 p-6">
            <h2 className="text-lg font-semibold text-primary-300">
              Turnaround commitments
            </h2>
            <p className="mt-3">
              Standard repairs follow a six-week bench timeline with weekly
              updates. Purchasing the $199 expedited add-on moves your job into
              a seven-day lane with daily check-ins. If the expedited deadline
              is missed, the rush fee is refunded.
            </p>
          </article>
          <article className="rounded-3xl border border-primary-500/20 bg-background-section/70 p-6">
            <h2 className="text-lg font-semibold text-primary-300">
              Ownership & liability
            </h2>
            <p className="mt-3">
              By submitting hardware you confirm you own it or have written
              authorization. We are not responsible for issues caused by prior
              modifications, counterfeit parts, or improper packaging. If
              incoming damage is discovered, we will document it and pause the
              job until you provide instructions.
            </p>
          </article>
          <article className="rounded-3xl border border-primary-500/20 bg-background-section/70 p-6">
            <h2 className="text-lg font-semibold text-primary-300">
              Warranty coverage
            </h2>
            <p className="mt-3">
              Completed repairs include a 7-day workmanship warranty. You may
              extend coverage to 6 weeks for $59; this extension transfers to a
              buyer if you sell the device. Warranty claims must be initiated
              through the customer portal and require proof of the issue.
              Shipping is covered if the fault is confirmed.
            </p>
          </article>
          <article className="rounded-3xl border border-primary-500/20 bg-background-section/70 p-6">
            <h2 className="text-lg font-semibold text-primary-300">
              Cancellations & storage
            </h2>
            <p className="mt-3">
              Cancelling after approving a quote may incur restocking fees for
              special-order parts. Completed devices must be picked up or
              scheduled for return shipping within 14 days of notification;
              after that, storage fees of $5 per day apply. Hardware left beyond
              60 days may be recycled or sold to recover costs.
            </p>
          </article>
          <article className="rounded-3xl border border-primary-500/20 bg-background-section/70 p-6">
            <h2 className="text-lg font-semibold text-primary-300">
              Dispute resolution
            </h2>
            <p className="mt-3">
              If you believe a service was completed improperly, notify us
              within seven days through the portal or by emailing
              <a
                className="ml-1 underline decoration-primary-400"
                href="mailto:legal@gpudoctor.com"
              >
                legal@gpudoctor.com
              </a>
              . We will review the documentation, offer corrective action, or
              refund the affected labor when appropriate. Unresolved disputes
              are handled in the state of Texas under local regulations.
            </p>
          </article>
          <article className="rounded-3xl border border-primary-500/20 bg-background-section/70 p-6">
            <h2 className="text-lg font-semibold text-primary-300">
              Technician rights
            </h2>
            <p className="mt-3">
              GPU Doctor technicians are authorized to halt work if counterfeit
              parts, biohazards, or unsafe modifications are discovered. We will
              notify you immediately, document the findings, and provide options
              for remediation or return shipping without further work.
            </p>
          </article>
          <p>
            Additional details, including shipping terms and privacy practices,
            are available in the{" "}
            <Link className="underline decoration-primary-400" href="/support">
              support center
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
};

export default TermsPage;
