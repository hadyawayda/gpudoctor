import type { Metadata } from 'next'
import Link from 'next/link'

import PageHeader from '@/app/_components/PageHeader'

export const metadata: Metadata = {
  title: 'Cart',
}

const CartPage = () => {
  return (
    <main className="bg-[color:var(--surface-950)] text-[color:var(--text-base)]">
      <PageHeader
        title="Your cart"
        description="Review the services and hardware you selected before heading to checkout. Items are saved for 24 hours."
        actions={
          <Link
            href="/checkout"
            className="inline-flex items-center rounded-full bg-[color:var(--accent-primary)] px-5 py-3 text-sm font-semibold text-[color:var(--surface-950)] shadow-lg shadow-[rgba(61,214,140,0.25)] hover:bg-[color:var(--accent-secondary)] hover:text-[color:var(--surface-900)]"
          >
            Proceed to checkout
          </Link>
        }
      />
      <section className="mx-auto max-w-4xl px-6 pb-24 lg:px-10 xl:px-16">
        <div className="rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/70 p-8 text-center text-sm">
          Cart synchronisation with the marketplace is coming soon. Add items from the store or marketplace and they will appear here automatically.
        </div>
      </section>
    </main>
  )
}

export default CartPage
