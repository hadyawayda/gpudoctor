import type { Metadata } from 'next'

import PageHeader from '@/app/_components/PageHeader'

export const metadata: Metadata = {
  title: 'Privacy Policy',
}

const sections = [
  {
    title: 'Information we collect',
    paragraphs: [
      'We collect the minimum information necessary to receive, diagnose, and repair your hardware. This includes contact details, shipping addresses, billing information, device serial numbers, and repair history.',
      'When you submit a repair intake, upload photos, or approve a quote, the related documents are stored in the GPU Doctor portal. Diagnostic logs, thermal images, and test reports are retained as part of your repair record.',
    ],
  },
  {
    title: 'How we use your data',
    paragraphs: [
      'Personal data is used for order processing, invoicing, warranty coverage, and to comply with shipping insurance requirements. We never sell or rent personal information, repair notes, or marketplace data.',
      'Technicians access your data only while assigned to your ticket. Marketplace listings display only the information you choose to publish, such as condition, refurbishment status, and asking price.',
    ],
  },
  {
    title: 'Storage, access, and deletion',
    paragraphs: [
      'Repair documentation remains available in portal.gpudoctor.com so technicians and customers can reference past work. You may request deletion or a full export of your data by emailing privacy@gpudoctor.com.',
      'Backups are encrypted at rest, and access is restricted to senior staff for compliance audits. Deletion requests are processed within seven business days once all active repairs or marketplace transactions have closed.',
    ],
  },
  {
    title: 'Third-party services',
    paragraphs: [
      'We rely on payment processors, shipping carriers, and cloud infrastructure providers to deliver our services. Each partner is vetted for data protection and contractual obligations prohibit secondary use of your information.',
      'When booking insured shipments or processing trade-in payouts we may share limited data (name, address, declared value) to satisfy carrier and tax requirements. No diagnostic logs or photos are shared outside GPU Doctor without your explicit consent.',
    ],
  },
]

const PrivacyPolicyPage = () => {
  return (
    <main className="bg-[color:var(--surface-950)] text-[color:var(--text-base)]">
      <PageHeader
        title="Privacy policy"
        description="We respect the confidentiality of your hardware and data. This policy explains how we collect, store, and protect personal information."
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
              Questions about privacy or data retention can be directed to privacy@gpudoctor.com. Please include your ticket ID
              or marketplace listing number so we can respond quickly.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PrivacyPolicyPage
