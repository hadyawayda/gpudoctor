import type { Metadata } from 'next'

import PageHeader from '@/app/shared/PageHeader'

const FAQS: Array<{ question: string; answer: string }> = [
  {
    question: 'What does the diagnostic fee cover?',
    answer:
      'The $89 diagnostic bench fee unlocks intake testing, power rail probing, and a written fault report. If you approve the repair quote we credit the fee toward the final invoice.',
  },
  {
    question: 'How long do repairs take?',
    answer:
      'Standard repairs progress through a six-week bench timeline with weekly updates. Need it sooner? Add the $199 expedited lane and we complete approved work within seven calendar days or refund the rush fee.',
  },
  {
    question: 'What warranty is included?',
    answer:
      'Every repair ships with a seven-day workmanship warranty covering the serviced fault. You can extend coverage to six weeks for $59, and that extension transfers to a buyer if you resell the hardware.',
  },
  {
    question: 'How do I track progress and approvals?',
    answer:
      'Sign in at portal.gpudoctor.com to view milestones, invoices, and courier scans. The portal stores timestamps, photos, and technician notes so your rights stay documented.',
  },
  {
    question: 'Do you handle shipping and insurance?',
    answer:
      'Yes. We generate prepaid, insured labels for inbound and outbound shipments. If you use your own carrier, upload the tracking number so we can monitor delivery and add it to your records.',
  },
  {
    question: 'Can I bundle maintenance or refurbishment?',
    answer:
      'Absolutely. Add thermal paste or pad refreshes, scheduled maintenance plans, or the GPU Doctor Certified inspection during approval. Bundles appear on your invoice for tax and resale documentation.',
  },
]

export const metadata: Metadata = {
  title: 'FAQ',
}

const FAQPage = () => {
  return (
    <main className="bg-[#07130e] text-emerald-50">
      <PageHeader
        title="Frequently asked questions"
        description="Get clarity on diagnostics, turnaround expectations, warranties, and how GPU Doctor protects your hardware throughout the process."
      />
      <section className="mx-auto max-w-5xl px-6 pb-24 lg:px-10 xl:px-16">
        <dl className="space-y-6 text-sm leading-7 text-emerald-50/80">
          {FAQS.map(({ question, answer }) => (
            <div key={question} className="rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-6">
              <dt className="text-lg font-semibold text-emerald-200">{question}</dt>
              <dd className="mt-3 text-sm text-emerald-50/80">{answer}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  )
}

export default FAQPage
