import type { Metadata } from 'next'
import Link from 'next/link'

import PageHeader from '@/app/_components/PageHeader'

export const metadata: Metadata = {
  title: 'Checkout',
}

const CheckoutPage = () => {
  return (
    <main className="bg-[color:var(--surface-950)] text-[color:var(--text-base)]">
      <PageHeader
        title="Secure checkout"
        description="Review your repair order, confirm return shipping, and choose upgrade packages before submitting payment."
      />
      <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-10 xl:px-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/70 p-8 text-sm">
            <h2 className="text-lg font-semibold text-[color:var(--text-strong)]">What happens next</h2>
            <p className="mt-4 text-sm leading-6 text-[color:var(--text-base)]">
              After confirming your order you receive a summary detailing services, turnaround, and return shipping. Status
              updates appear in the portal and are emailed at each milestone.
            </p>
          </div>
          <div className="rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/70 p-8 text-sm">
            <h2 className="text-lg font-semibold text-[color:var(--text-strong)]">Need to make changes?</h2>
            <p className="mt-4 text-sm leading-6 text-[color:var(--text-base)]">
              Update billing, shipping, or refurbishment add-ons from your account dashboard before the repair is finalised.
            </p>
            <Link
              href="/portal"
              className="mt-4 inline-flex items-center text-xs font-semibold text-[color:var(--accent-secondary)] hover:text-[color:var(--accent-secondary)]/80"
            >
              Go to account settings →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CheckoutPage
