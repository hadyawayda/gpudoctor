import type { Metadata } from 'next'

import Link from 'next/link'

import PageHeader from '@/app/shared/PageHeader'

export const metadata: Metadata = {
  title: 'Privacy Policy',
}

const PrivacyPolicyPage = () => {
  return (
    <main className="bg-[#07130e] text-emerald-50">
      <PageHeader
        title="Privacy policy"
        description="We collect only the information required to repair, refurbish, or ship your hardware, and you stay in control of how it is stored and shared."
      />
      <section className="mx-auto max-w-5xl px-6 pb-24 lg:px-10 xl:px-16">
        <div className="space-y-8 text-sm leading-7 text-emerald-50/80">
          <div className="rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-6">
            <h2 className="text-lg font-semibold text-emerald-200">Information we collect</h2>
            <ul className="mt-4 space-y-3">
              <li>• Contact details, addresses, and payment confirmations submitted during checkout or repair intake.</li>
              <li>• Photos, serial numbers, and diagnostic results created while servicing your hardware.</li>
              <li>• Order history, invoices, and portal activity necessary to provide warranties and legal documentation.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-6">
            <h2 className="text-lg font-semibold text-emerald-200">How your data is used</h2>
            <p className="mt-3">
              We use intake details to perform diagnostics, process payments, and arrange insured shipping. Service photos and stress
              logs remain accessible to you through the customer portal for future reference or resale. We do not sell or rent customer
              information. Vendors assisting with shipping or payment processing receive only the data required to complete those tasks.
            </p>
          </div>
          <div className="rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-6">
            <h2 className="text-lg font-semibold text-emerald-200">Security practices</h2>
            <p className="mt-3">
              Portal.gpudoctor.com enforces single sign-on with mandatory multi-factor authentication for technicians. All records are
              stored in encrypted databases with role-based access controls, and shipping labels are generated through PCI-compliant
              partners. Hardware photos and diagnostic logs are watermarked to prevent tampering.
            </p>
          </div>
          <div className="rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-6">
            <h2 className="text-lg font-semibold text-emerald-200">Retention & control</h2>
            <p className="mt-3">
              Diagnostic reports and repair documentation stay in your portal for at least two years so you can prove work was completed.
              Shipping labels and billing records are archived after 90 days. You may request an export or deletion of your data by emailing
              <a className="ml-1 underline decoration-emerald-400" href="mailto:privacy@gpudoctor.com">privacy@gpudoctor.com</a>.
            </p>
            <p className="mt-3">
              When you request deletion, we remove personal identifiers while keeping anonymized service metrics required for legal
              compliance. Deleting data does not void your warranty; we store proof of coverage in a separate encrypted log.
            </p>
          </div>
          <div className="rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-6">
            <h2 className="text-lg font-semibold text-emerald-200">Your rights</h2>
            <ul className="mt-4 space-y-3">
              <li>• Request a full export of your records in a portable format at any time.</li>
              <li>• Dispute inaccuracies or request corrections through the customer portal or support center.</li>
              <li>• Opt out of marketing messages while still receiving essential repair and shipping updates.</li>
            </ul>
            <p className="mt-3">
              For privacy questions, contact
              <a className="ml-1 underline decoration-emerald-400" href="mailto:privacy@gpudoctor.com">privacy@gpudoctor.com</a> or review
              additional resources in our <Link className="underline decoration-emerald-400" href="/support">support center</Link>.
            </p>
          </div>
          <div className="rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-6">
            <h2 className="text-lg font-semibold text-emerald-200">International customers</h2>
            <p className="mt-3">
              When shipping or servicing devices outside the United States, we comply with regional privacy laws including GDPR and
              PIPEDA. Data may be transferred to our US facilities for repair coordination; contractual safeguards and encryption protect
              those transfers. Contact us if you require a data processing agreement for enterprise work.
            </p>
          </div>
          <div className="rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-6">
            <h2 className="text-lg font-semibold text-emerald-200">Cookies & analytics</h2>
            <p className="mt-3">
              GPU Doctor uses first-party cookies to keep you signed in and remember checkout preferences. Optional analytics cookies are
              anonymised and help us improve service turnarounds; you may disable them in your browser without affecting portal access.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PrivacyPolicyPage
