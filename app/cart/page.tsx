import type { Metadata } from 'next'
import Link from 'next/link'

import PageHeader from '@/app/shared/PageHeader'

export const metadata: Metadata = {
  title: 'Cart',
}

const CartPage = () => {
  return (
    <main className="bg-[#07130e] text-emerald-50">
      <PageHeader
        title="Your cart"
        description="Review the services and hardware you selected before heading to checkout. Items are saved for 24 hours."
        actions={
          <Link
            href="/checkout"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 hover:from-emerald-300 hover:via-cyan-300 hover:to-sky-400"
          >
            Proceed to checkout
          </Link>
        }
      />
      <section className="mx-auto max-w-4xl px-6 pb-24 lg:px-10 xl:px-16">
        <div className="rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-8 text-center text-sm text-emerald-50/80">
          Cart synchronisation with the marketplace is coming soon. Add items from the store or marketplace and they will appear
          here automatically.
        </div>
      </section>
    </main>
  )
}

export default CartPage
