import type { Metadata } from 'next'
import Link from 'next/link'

import PageHeader from '@/app/shared/PageHeader'

export const metadata: Metadata = {
  title: 'Checkout',
}

const CheckoutPage = () => {
  return (
    <main className="bg-background-base text-slate-100">
      <PageHeader
        title="Secure checkout"
        description="Review your repair order, confirm return shipping, and lock in any expedited or warranty upgrades before submitting payment."
      />
      <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-10 xl:px-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-primary-500/20 bg-background-section/70 p-8 text-sm text-slate-300">
            <h2 className="text-lg font-semibold text-primary-300">What happens next</h2>
            <p className="mt-4 text-sm leading-6">
              After confirming your order you receive a timestamped summary outlining the selected services, diagnostic credit,
              and the standard six-week bench timeline. If you added the seven-day expedited lane, the countdown begins once the
              quote is approved and paid.
            </p>
            <ul className="mt-5 space-y-3 text-xs text-slate-400">
              <li>• Prepaid insured labels and packing instructions are delivered to your email and stored in the portal.</li>
              <li>• Technician updates, photos, and stress logs appear in your customer portal as each milestone is completed.</li>
              <li>• Any rush or warranty fees are automatically refunded if our commitments are not met.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-primary-500/20 bg-background-section/70 p-8 text-sm text-slate-300">
            <h2 className="text-lg font-semibold text-primary-300">Need to make changes?</h2>
            <p className="mt-4 text-sm leading-6">
              Update billing profiles, shipping addresses, refurbish add-ons, or warranty extensions from your account before the
              repair is finalised. All adjustments are logged with user, time, and IP details to preserve your technician rights.
            </p>
            <Link
              href="/account"
              className="mt-4 inline-flex items-center text-xs font-semibold text-primary-200 hover:text-slate-100"
            >
              Go to account settings →
            </Link>
            <div className="mt-6 rounded-2xl border border-primary-500/20 bg-background-card p-4 text-xs text-slate-400">
              <p className="font-semibold text-primary-300">Reminder</p>
              <p className="mt-2">
                The included seven-day warranty begins on delivery. Extend it to six weeks now for $59 or add it from the portal
                within 48 hours of receipt.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CheckoutPage
