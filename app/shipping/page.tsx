import type { Metadata } from 'next'

import PageHeader from '@/app/_components/PageHeader'

export const metadata: Metadata = {
  title: 'Shipping Policy',
}

const ShippingPolicyPage = () => {
  return (
    <main className="bg-slate-950 text-white">
      <PageHeader
        title="Shipping policy"
        description="We coordinate insured two-way shipping so your GPU arrives safely and returns stress-tested."
      />
      <section className="mx-auto max-w-5xl px-6 pb-24 lg:px-10 xl:px-16">
        <div className="space-y-6 text-sm leading-7 text-slate-200">
          <p>
            Domestic shipments use insured express couriers with coverage up to the declared GPU value. International shipments
            include customs documentation prepared by Atlas AI and real-time tracking from pickup to delivery.
          </p>
          <p>
            If a package is delayed or damaged, contact us immediately. We will liaise with the carrier, provide interim loaner
            hardware when available, and prioritise your repair in the queue.
          </p>
        </div>
      </section>
    </main>
  )
}

export default ShippingPolicyPage
