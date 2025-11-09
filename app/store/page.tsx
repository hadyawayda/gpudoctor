import type { Metadata } from 'next'
import Link from 'next/link'

import PageHeader from '@/app/_components/PageHeader'

import { catalogProducts } from '../_data/site'

import StoreContent from './StoreContent'

export const metadata: Metadata = {
  title: 'Store',
  description: 'Shop GPU Doctor curated inventory with filters for brand, category, condition, availability, and price range.',
}

const StorePage = () => {
  return (
    <main className="bg-[#07130e] text-emerald-50">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(60,227,123,0.22),_transparent_70%)]" />
        <PageHeader
          title="Live store feed"
          description="Real-time availability for GPU Doctor curated hardware. Filter by brand, condition, or price, and bundle installation or maintenance services at checkout."
          actions={
            <Link
              href="/marketplace"
              className="inline-flex items-center rounded-full border border-emerald-400/60 px-5 py-3 text-sm font-semibold text-emerald-100 hover:border-emerald-300 hover:text-emerald-50"
            >
              Browse marketplace listings
            </Link>
          }
        />
      </div>

      <StoreContent products={catalogProducts} />
    </main>
  )
}

export default StorePage
