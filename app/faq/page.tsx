import type { Metadata } from 'next'

import PageHeader from '@/app/_components/PageHeader'

const FAQS: Array<{ question: string; answer: string }> = [
  {
    question: 'How long does a typical repair take?',
    answer:
      'Standard repairs complete within six weeks from approval. Expedited repairs are finished and shipped within seven calendar days.',
  },
  {
    question: 'Do you offer warranty on repairs?',
    answer:
      'Every repair includes a one-week warranty covering workmanship and parts we replace. You can extend coverage to six weeks before the repair ships.',
  },
  {
    question: 'Can you work on mining GPUs or server accelerators?',
    answer:
      'Yes. We service RTX, Radeon, and data-center accelerators with stress profiles tailored for rendering, compute, and broadcast workloads.',
  },
  {
    question: 'Can I bundle upgrades with my repair?',
    answer:
      'Absolutely. Add thermal pad and paste overhauls, preventative maintenance, or certification packages directly when approving your quote.',
  },
  {
    question: 'How do I track my repair?',
    answer:
      'portal.gpudoctor.com displays milestones, technician notes, and shipping updates. You can also opt in to email or SMS notifications.',
  },
]

export const metadata: Metadata = {
  title: 'FAQ',
}

const FAQPage = () => {
  return (
    <main className="bg-[color:var(--surface-950)] text-[color:var(--text-base)]">
      <PageHeader
        title="Frequently asked questions"
        description="Find answers about diagnostics, warranties, logistics, and account management."
      />
      <section className="mx-auto max-w-5xl px-6 pb-24 lg:px-10 xl:px-16">
        <dl className="space-y-8 text-sm leading-7">
          {FAQS.map(({ question, answer }) => (
            <div key={question} className="rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/70 p-6">
              <dt className="text-lg font-semibold text-[color:var(--text-strong)]">{question}</dt>
              <dd className="mt-3 text-sm text-[color:var(--text-base)]">{answer}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  )
}

export default FAQPage
