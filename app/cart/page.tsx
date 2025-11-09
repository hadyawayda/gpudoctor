import type { Metadata } from 'next'
import Link from 'next/link'

import PageHeader from '@/app/shared/PageHeader'

export const metadata: Metadata = {
  title: 'Cart',
}

const CartPage = () => {
  return (
    <main className="bg-background-base text-slate-100">
      <PageHeader
        title="Your cart"
        description="Review the services and hardware you selected before heading to checkout. Items are saved for 24 hours."
        actions={
          <Link
            href="/checkout"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-primary-500 to-secondary-600 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-primary-500/30 hover:from-primary-400 hover:to-secondary-500"
          >
            Proceed to checkout
          </Link>
        }
      />
      <section className="mx-auto max-w-4xl px-6 pb-24 lg:px-10 xl:px-16">
        <div className="rounded-3xl border border-primary-500/20 bg-background-section/70 p-8 text-center text-sm text-slate-300">
          Cart synchronisation with the marketplace is coming soon. Add items from the store or marketplace and they will appear
          here automatically.
        </div>
      </section>
    </main>
  )
}

export default CartPage
