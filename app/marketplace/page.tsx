import type { Metadata } from 'next'
import Link from 'next/link'

import PageHeader from '@/app/shared/PageHeader'

import { marketplaceListings } from '../_data/site'

import MarketplaceContent from './MarketplaceContent'

export const metadata: Metadata = {
  title: 'Marketplace',
  description: 'Filter certified GPU listings by brand, cooler type, fans, memory, and price. Add refurbish packages before shipping.',
}

const MarketplacePage = () => {
  return (
    <main className="bg-[#07130e] text-emerald-50">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#07130e] via-emerald-500/15 to-[#07130e]" />
        <PageHeader
          title="GPU Doctor marketplace"
          description="Browse certified trade-ins, sell your own GPUs, and customize filters to find the right card for your build or repair."
          actions={
            <Link
              href="/sell"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-300 px-5 py-3 text-sm font-semibold text-[#07130e] shadow-lg shadow-emerald-500/30 hover:from-emerald-300 hover:to-teal-200"
            >
              List a GPU today
            </Link>
          }
        />
      </div>

      <MarketplaceContent listings={marketplaceListings} />

      <section className="bg-[#07130e] pb-24">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-10 xl:px-16">
          <h2 className="text-3xl font-semibold text-emerald-200">Build smarter with marketplace integrations</h2>
          <p className="mt-4 text-sm text-emerald-50/80">
            Sync purchases to your GPU Doctor account, track refurbish status, and drop components into the PC builder to see how they fit.
            Saved listings are available inside portal.gpudoctor.com for easy approvals and record keeping.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/builds"
              className="rounded-full border border-emerald-400/60 px-5 py-3 text-sm font-semibold text-emerald-100 hover:border-emerald-300 hover:text-emerald-50"
            >
              Open the builder
            </Link>
            <Link
              href="/portal"
              className="rounded-full bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-300 px-5 py-3 text-sm font-semibold text-[#07130e] shadow-lg shadow-emerald-500/30 hover:from-emerald-300 hover:to-teal-200"
            >
              Go to the portal
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default MarketplacePage
