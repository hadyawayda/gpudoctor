import type { Metadata } from 'next'

import PageHeader from '@/app/_components/PageHeader'

export const metadata: Metadata = {
  title: 'Shipping Policy',
}

const sections = [
  {
    title: 'Inbound shipping',
    paragraphs: [
      'We offer insured courier pickups and printable labels for customers in supported regions. Packaging guidelines are provided during the repair intake to ensure the GPU is protected and insurance remains valid.',
      'If you supply your own packaging, use antistatic shielding and rigid foam. Damage caused by inadequate packing may void warranty coverage.',
    ],
  },
  {
    title: 'Outbound shipping',
    paragraphs: [
      'Standard repairs ship within the six-week service window. Expedited repairs include priority shipping with tracking updates posted in the portal and sent via email or SMS.',
      'Every shipment leaves with tamper seals, condition photos, and a copy of the diagnostic summary. Shipping insurance is based on the declared value captured during intake.',
    ],
  },
  {
    title: 'Delays and claims',
    paragraphs: [
      'If a carrier delay or damage occurs, contact us immediately. We will file the insurance claim, provide interim loaner options when available, and prioritise your ticket in the queue.',
      'Claims require photos of the packaging and hardware within 24 hours of delivery. Keep all packing materials until the claim is resolved.',
    ],
  },
]

const ShippingPolicyPage = () => {
  return (
    <main className="bg-[color:var(--surface-950)] text-[color:var(--text-base)]">
      <PageHeader
        title="Shipping policy"
        description="We coordinate insured two-way shipping so your GPU arrives safely and returns with a full repair report."
      />
      <section className="mx-auto max-w-5xl px-6 pb-24 lg:px-10 xl:px-16">
        <div className="space-y-10 text-sm leading-7">
          {sections.map((section) => (
            <article key={section.title} className="space-y-3">
              <h2 className="text-lg font-semibold text-[color:var(--text-strong)]">{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-[color:var(--text-base)]">
                  {paragraph}
                </p>
              ))}
            </article>
          ))}
          <div className="rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/70 p-6 text-xs text-[color:var(--text-muted)]">
            <p>
              For shipping support email shipping@gpudoctor.com or call +1 (512) 555-0198. Include your ticket ID so we can
              respond without delay.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ShippingPolicyPage
