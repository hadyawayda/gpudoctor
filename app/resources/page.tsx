import type { Metadata } from 'next'
import Link from 'next/link'

import PageHeader from '@/app/_components/PageHeader'

const resources = [
  {
    title: 'Service guides',
    description: 'Understand what is included in each repair tier, how diagnostics work, and when expedited service is recommended.',
    links: [
      { href: '/services', label: 'Service catalogue' },
      { href: '/repair-requests', label: 'Submit a repair intake' },
    ],
  },
  {
    title: 'Shipping & logistics',
    description: 'Learn how to package your GPU, schedule pickups, and track insured shipments while repairs are in progress.',
    links: [
      { href: '/shipping', label: 'Shipping policy' },
      { href: '/repair-requests', label: 'Print packaging checklist' },
    ],
  },
  {
    title: 'Policies & documentation',
    description: 'Review privacy, warranty, and marketplace policies so you know how your data and hardware are handled.',
    links: [
      { href: '/privacy', label: 'Privacy policy' },
      { href: '/terms', label: 'Terms of service' },
    ],
  },
]

const faqs = [
  {
    question: 'How long do repairs take?',
    answer:
      'Standard repairs take up to six weeks from approval, while expedited repairs are completed within seven calendar days. Turnaround times are visible in the portal along with technician updates.',
  },
  {
    question: 'What does the warranty cover?',
    answer:
      'Every repair includes a one-week functional warranty covering workmanship and parts we replace. You can extend coverage to six weeks before the repair ships by adding the warranty upgrade.',
  },
  {
    question: 'Can I bundle refurbishment with a store purchase?',
    answer:
      'Yes. Add the refurbish package at checkout to refresh thermal materials, fans, and cosmetics before we ship. You can also request refurbishment for marketplace purchases during the intake process.',
  },
]

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Guides, policies, and FAQs that help technicians and customers get the most out of GPU Doctor services.',
}

const ResourcesPage = () => {
  return (
    <main className="bg-[color:var(--surface-950)] text-[color:var(--text-base)]">
      <PageHeader
        title="Resources"
        description="Explore guides, policies, and FAQs covering diagnostics, shipping, warranties, and marketplace sales."
      />
      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10 xl:px-16">
        <div className="grid gap-6 rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/70 p-8 backdrop-blur md:grid-cols-3">
          {resources.map((resource) => (
            <article key={resource.title} className="space-y-3">
              <h2 className="text-lg font-semibold text-[color:var(--text-strong)]">{resource.title}</h2>
              <p className="text-sm text-[color:var(--text-base)]">{resource.description}</p>
              <div className="flex flex-col gap-2 text-xs">
                {resource.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center text-[color:var(--accent-secondary)] hover:text-[color:var(--accent-secondary)]/80"
                  >
                    {link.label} →
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-10 xl:px-16">
        <div className="rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)]/85 p-8">
          <h2 className="text-2xl font-semibold text-[color:var(--text-strong)]">Frequently asked questions</h2>
          <dl className="mt-6 space-y-6 text-sm">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/70 p-5">
                <dt className="text-base font-semibold text-[color:var(--text-strong)]">{faq.question}</dt>
                <dd className="mt-2 text-[color:var(--text-base)]">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  )
}

export default ResourcesPage
