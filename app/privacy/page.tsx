import type { Metadata } from 'next'

import PageHeader from '@/app/_components/PageHeader'

export const metadata: Metadata = {
  title: 'Privacy Policy',
}

const PrivacyPolicyPage = () => {
  return (
    <main className="bg-slate-950 text-white">
      <PageHeader
        title="Privacy policy"
        description="We collect only the data required to provide diagnostics, marketplace transactions, and logistics for your hardware."
      />
      <section className="mx-auto max-w-5xl px-6 pb-24 lg:px-10 xl:px-16">
        <div className="space-y-6 text-sm leading-7 text-slate-200">
          <p>
            Telemetry and diagnostic logs generated during repairs are stored securely and accessible only to you and the assigned
            technician. We never sell personal information or marketplace data to third parties.
          </p>
          <p>
            Shipping and billing information is retained for the duration of a service or transaction and archived after 90 days.
            You may request deletion or an export of your records at any time—Atlas AI will coordinate the request with our
            support team.
          </p>
          <p>
            Atlas AI may process crash logs and screenshots to generate troubleshooting steps. These artifacts are purged after 30
            days unless you pin them to your dashboard.
          </p>
        </div>
      </section>
    </main>
  )
}

export default PrivacyPolicyPage
