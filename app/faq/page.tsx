import type { Metadata } from 'next'

import PageHeader from '@/app/_components/PageHeader'

const FAQS: Array<{ question: string; answer: string }> = [
  {
    question: 'How long does a typical repair take?',
    answer:
      'Most GPU repairs complete within 3–5 business days once you approve the quote. Priority and enterprise SLAs can deliver same-day diagnostics.',
  },
  {
    question: 'Do you offer warranty on repairs?',
    answer:
      'Every repair includes a 24-month warranty covering replaced components and the original issue. Marketplace refurb purchases inherit the same coverage.',
  },
  {
    question: 'Can you work on mining GPUs or server accelerators?',
    answer:
      'Absolutely. We service RTX, Radeon, and data-center accelerators with custom stress profiles for rendering, AI, or compute workloads.',
  },
  {
    question: 'How does Atlas AI help with my repair?',
    answer:
      'Atlas parses crash logs, analyses telemetry, and keeps you informed with conversational updates accessible from the dashboard or Discord.',
  },
  {
    question: 'Can I bundle upgrades with my repair?',
    answer:
      'Yes. Add thermal rebuilds, firmware tuning, or refurbish packages directly during approval. Your technician will confirm compatibility.',
  },
]

export const metadata: Metadata = {
  title: 'FAQ',
}

const FAQPage = () => {
  return (
    <main className="bg-slate-950 text-white">
      <PageHeader
        title="Frequently asked questions"
        description="Find answers about diagnostics, warranties, logistics, and Atlas AI support."
      />
      <section className="mx-auto max-w-5xl px-6 pb-24 lg:px-10 xl:px-16">
        <dl className="space-y-8 text-sm leading-7 text-slate-200">
          {FAQS.map(({ question, answer }) => (
            <div key={question} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <dt className="text-lg font-semibold text-white">{question}</dt>
              <dd className="mt-3 text-sm text-slate-200">{answer}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  )
}

export default FAQPage
