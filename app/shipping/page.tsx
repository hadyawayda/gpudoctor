import type { Metadata } from 'next'

import PageHeader from '@/app/shared/PageHeader'

export const metadata: Metadata = {
  title: 'Shipping Policy',
}

const ShippingPolicyPage = () => {
  return (
    <main className="bg-[#07130e] text-emerald-50">
      <PageHeader
        title="Shipping policy"
        description="We coordinate insured two-way shipping so your GPU arrives safely and returns with documented proof of service."
      />
      <section className="mx-auto max-w-5xl px-6 pb-24 lg:px-10 xl:px-16">
        <div className="space-y-8 text-sm leading-7 text-emerald-50/80">
          <article className="rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-6">
            <h2 className="text-lg font-semibold text-emerald-200">Inbound shipments</h2>
            <p className="mt-3">
              After scheduling a repair we email a prepaid label with insurance equal to your declared value. Package your GPU in
              anti-static wrap, sturdy foam, and a double wall box. If you prefer to handle shipping yourself, email the tracking
              number so we can monitor the delivery. Damage discovered on arrival is photographed and added to your portal record.
            </p>
          </article>
          <article className="rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-6">
            <h2 className="text-lg font-semibold text-emerald-200">Return shipments</h2>
            <p className="mt-3">
              Repairs ship with tamper seals, fresh packaging materials, and insurance equal to the invoice value. Rush jobs ship via
              overnight service; standard jobs use 2-day service. Tracking numbers and photos of the packed GPU are uploaded to your
              portal before the carrier picks up the parcel.
            </p>
          </article>
          <article className="rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-6">
            <h2 className="text-lg font-semibold text-emerald-200">Loss or damage</h2>
            <p className="mt-3">
              Contact <a className="underline decoration-emerald-400" href="mailto:shipping@gpudoctor.com">shipping@gpudoctor.com</a> within 24 hours
              if a shipment is delayed, missing, or arrives damaged. We will file the insurance claim, provide documentation, and if parts are
              available we will prioritize a replacement or repair immediately.
            </p>
          </article>
          <article className="rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-6">
            <h2 className="text-lg font-semibold text-emerald-200">Processing timelines</h2>
            <p className="mt-3">
              Standard intakes ship back within the six-week repair window once the job is complete. Expedited seven-day services ship
              overnight with signature confirmation. Tracking numbers and photos of the packed GPU are posted to your customer portal when
              the carrier scans the parcel.
            </p>
          </article>
          <article className="rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-6">
            <h2 className="text-lg font-semibold text-emerald-200">International logistics</h2>
            <p className="mt-3">
              International customers are responsible for customs declarations and duties. We provide commercial invoices and HS codes in
              your portal; please confirm local import rules before shipping. Expedited customs brokerage is available for enterprise
              accounts—contact us for details.
            </p>
          </article>
          <article className="rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-6">
            <h2 className="text-lg font-semibold text-emerald-200">Packaging checklist</h2>
            <ul className="mt-4 space-y-2 text-sm text-emerald-50/80">
              <li>• Remove loose accessories and secure cables with twist ties.</li>
              <li>• Use anti-static bags or wrap and double-box fragile water-cooled cards.</li>
              <li>• Include a copy of your intake confirmation and the warranty extension selection for faster processing.</li>
            </ul>
          </article>
        </div>
      </section>
    </main>
  )
}

export default ShippingPolicyPage
