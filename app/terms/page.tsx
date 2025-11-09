import type { Metadata } from 'next'

import PageHeader from '@/app/_components/PageHeader'

export const metadata: Metadata = {
  title: 'Terms of Service',
}

const sections = [
  {
    title: 'Repair authorisation',
    paragraphs: [
      'By submitting hardware for diagnostics, you confirm that you own the equipment or are authorised to approve repairs. Work begins only after you accept a written estimate that lists labour, parts, and shipping charges.',
      'The $79 diagnostic fee is credited toward the approved repair. If you decline service, diagnostics and return shipping are still billable.',
    ],
  },
  {
    title: 'Turnaround timelines',
    paragraphs: [
      'Standard repairs target completion within six weeks from the date of approval. Expedited repairs move to the front of the queue and ship within seven calendar days. Delays caused by parts procurement or customer response time will be communicated through the portal.',
      'If you request changes after work has started, additional time or cost may apply. Rush repairs require prompt responses to approval requests so the timeline can be met.',
    ],
  },
  {
    title: 'Warranty and liability',
    paragraphs: [
      'All repairs include a one-week functional warranty that covers workmanship and parts replaced by GPU Doctor. You may purchase a six-week extension before the repair ships. Warranty claims must be submitted in writing with supporting photos or telemetry.',
      'We are not responsible for pre-existing damage, counterfeit components, or issues caused by improper packaging during transit. If severe hidden damage prevents successful repair, you may choose to return the hardware unrepaired or recycle it through our facility.',
    ],
  },
  {
    title: 'Marketplace and store sales',
    paragraphs: [
      'Consignment payouts occur once a listed item passes our certification process and the buyer&apos;s warranty window closes. Listing descriptions must be accurate; misrepresentation voids warranty and payout protections.',
      'Store purchases ship with documentation and tamper seals. Opening a product for self-installation prior to contacting GPU Doctor may void return eligibility.',
    ],
  },
]

const TermsPage = () => {
  return (
    <main className="bg-[color:var(--surface-950)] text-[color:var(--text-base)]">
      <PageHeader
        title="Terms of service"
        description="These terms describe how GPU Doctor handles diagnostics, repairs, shipping, and marketplace transactions."
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
        </div>
      </section>
    </main>
  )
}

export default TermsPage
