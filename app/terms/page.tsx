import type { Metadata } from 'next'

import PageHeader from '@/app/_components/PageHeader'

export const metadata: Metadata = {
  title: 'Terms of Service',
}

const TermsPage = () => {
  return (
    <main className="bg-slate-950 text-white">
      <PageHeader
        title="Terms of service"
        description="These terms outline how GPU Doctor delivers services, handles equipment, and protects your rights as a customer."
      />
      <section className="mx-auto max-w-5xl px-6 pb-24 lg:px-10 xl:px-16">
        <div className="space-y-6 text-sm leading-7 text-slate-200">
          <p>
            All repairs require written approval before work begins. Diagnostic fees are waived when you proceed with the
            recommended service. Repaired GPUs undergo a minimum of six hours of stress testing prior to return shipment.
          </p>
          <p>
            GPU Doctor is not liable for damage caused by prior modifications or improper packaging. By submitting hardware, you
            confirm ownership and grant permission to perform component-level repairs and firmware modifications necessary to
            restore functionality.
          </p>
        </div>
      </section>
    </main>
  )
}

export default TermsPage
