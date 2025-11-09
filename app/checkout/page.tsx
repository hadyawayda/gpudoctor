import type { Metadata } from 'next'
import Link from 'next/link'

import PageHeader from '@/app/_components/PageHeader'

export const metadata: Metadata = {
  title: 'Checkout',
}

const CheckoutPage = () => {
  return (
    <main className="bg-slate-950 text-white">
      <PageHeader
        title="Secure checkout"
        description="Review your repair order, confirm return shipping, and choose upgrade packages before submitting payment."
      />
      <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-10 xl:px-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-sm text-slate-200">
            <h2 className="text-lg font-semibold text-emerald-200">What happens next</h2>
            <p className="mt-4 text-sm leading-6 text-slate-200">
              After confirming your order, you receive a summary detailing services, turnaround, and return shipping. Atlas AI
              sends milestone notifications so you always know what stage your GPU is in.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-sm text-slate-200">
            <h2 className="text-lg font-semibold text-emerald-200">Need to make changes?</h2>
            <p className="mt-4 text-sm leading-6 text-slate-200">
              Update billing, shipping, or refurbish add-ons from your account dashboard before the repair is finalised.
            </p>
            <Link
              href="/account"
              className="mt-4 inline-flex items-center text-xs font-semibold text-emerald-200 hover:text-emerald-100"
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
