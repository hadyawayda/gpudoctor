'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { catalogProducts } from '../_data/site'

const getPrice = (price: number) => price

const StorePage = () => {
  const brands = Array.from(new Set(catalogProducts.map((product) => product.brand))).sort()
  const categories = Array.from(new Set(catalogProducts.map((product) => product.category))).sort()
  const conditions = Array.from(new Set(catalogProducts.map((product) => product.condition))).sort()

  const maxPrice = Math.max(...catalogProducts.map((product) => getPrice(product.price)))
  const minPrice = Math.min(...catalogProducts.map((product) => getPrice(product.price)))

  const [brandFilter, setBrandFilter] = useState('All')
  const [categoryFilter, setCategoryFilter] = useState('All')
  const [conditionFilter, setConditionFilter] = useState('All')
  const [availabilityFilter, setAvailabilityFilter] = useState('All')
  const [priceRange, setPriceRange] = useState<[number, number]>([minPrice, maxPrice])

  const filteredProducts = useMemo(() => {
    return catalogProducts.filter((product) => {
      if (brandFilter !== 'All' && product.brand !== brandFilter) {
        return false
      }
      if (categoryFilter !== 'All' && product.category !== categoryFilter) {
        return false
      }
      if (conditionFilter !== 'All' && product.condition !== conditionFilter) {
        return false
      }
      if (availabilityFilter !== 'All' && product.availability !== availabilityFilter) {
        return false
      }
      const price = getPrice(product.price)
      if (price < priceRange[0] || price > priceRange[1]) {
        return false
      }
      return true
    })
  }, [availabilityFilter, brandFilter, categoryFilter, conditionFilter, priceRange])

  const handlePriceChange = (index: 0 | 1, value: number) => {
    setPriceRange((prev) => {
      const next: [number, number] = [...prev]
      next[index] = value
      if (index === 0) {
        next[0] = Math.min(value, next[1])
      } else {
        next[1] = Math.max(value, next[0])
      }
      return next
    })
  }

  return (
    <main className="bg-[color:var(--surface-950)] text-[color:var(--text-base)]">
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-28 lg:px-10 xl:px-16">
        <header className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-[color:var(--text-strong)] sm:text-5xl">Storefront</h1>
            <p className="text-lg text-[color:var(--text-muted)]">
              Real-time availability for GPU Doctor curated hardware. Each item includes documentation, compatibility notes, and
              optional refurbishment and warranty upgrades.
            </p>
          </div>
          <Link
            href="/marketplace"
            className="inline-flex items-center rounded-full border border-[color:var(--accent-secondary)]/60 px-5 py-3 text-sm font-semibold text-[color:var(--accent-secondary)] hover:border-[color:var(--accent-secondary)]"
          >
            Browse marketplace listings
          </Link>
        </header>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/75 p-6">
            <h2 className="text-lg font-semibold text-[color:var(--text-strong)]">Filter inventory</h2>
            <div className="mt-6 space-y-6 text-sm">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-[color:var(--text-muted)]">Brand</label>
                <select
                  className="mt-2 w-full rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)] px-4 py-3"
                  value={brandFilter}
                  onChange={(event) => setBrandFilter(event.target.value)}
                >
                  <option>All</option>
                  {brands.map((brand) => (
                    <option key={brand}>{brand}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-[color:var(--text-muted)]">Category</label>
                <select
                  className="mt-2 w-full rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)] px-4 py-3"
                  value={categoryFilter}
                  onChange={(event) => setCategoryFilter(event.target.value)}
                >
                  <option>All</option>
                  {categories.map((category) => (
                    <option key={category}>{category}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-[color:var(--text-muted)]">Condition</label>
                <select
                  className="mt-2 w-full rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)] px-4 py-3"
                  value={conditionFilter}
                  onChange={(event) => setConditionFilter(event.target.value)}
                >
                  <option>All</option>
                  {conditions.map((condition) => (
                    <option key={condition}>{condition}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-[color:var(--text-muted)]">Availability</label>
                <select
                  className="mt-2 w-full rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)] px-4 py-3"
                  value={availabilityFilter}
                  onChange={(event) => setAvailabilityFilter(event.target.value)}
                >
                  <option>All</option>
                  <option>In Stock</option>
                  <option>Preorder</option>
                  <option>Backorder</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-[color:var(--text-muted)]">Price range</label>
                <div className="mt-3 space-y-3">
                  <div className="flex justify-between text-xs text-[color:var(--text-muted)]">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    step={10}
                    value={priceRange[0]}
                    onChange={(event) => handlePriceChange(0, Number(event.target.value))}
                  />
                  <input
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    step={10}
                    value={priceRange[1]}
                    onChange={(event) => handlePriceChange(1, Number(event.target.value))}
                  />
                </div>
              </div>
            </div>
          </aside>

          <div>
            <div className="flex flex-col gap-6 pb-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-[color:var(--text-strong)]">Available products</h2>
                <p className="mt-3 max-w-2xl text-sm text-[color:var(--text-muted)]">
                  All store items are either brand-new or freshly certified after refurbishment. Pair purchases with our
                  maintenance plans or refurbishment add-ons for maximum protection.
                </p>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center text-sm font-semibold text-[color:var(--accent-secondary)] hover:text-[color:var(--accent-secondary)]/80"
              >
                Explore service bundles →
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <article key={product.slug} className="rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/75 p-6 backdrop-blur">
                  <div className="relative mb-4 h-48 overflow-hidden rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)]">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs text-[color:var(--text-muted)]">
                    <span>{product.brand}</span>
                    <span>{product.condition}</span>
                  </div>
                  <h2 className="mt-3 text-lg font-semibold text-[color:var(--text-strong)]">{product.name}</h2>
                  <p className="mt-1 text-sm text-[color:var(--text-base)]">{product.model}</p>
                  <p className="mt-3 text-xs text-[color:var(--text-muted)]">{product.tags.join(' • ')}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-semibold text-[color:var(--accent-secondary)]">${product.price.toLocaleString()}</span>
                    <Link
                      href={`/products/${product.slug}`}
                      className="text-xs font-semibold text-[color:var(--accent-secondary)] hover:text-[color:var(--accent-secondary)]/80"
                    >
                      View details →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-10 text-xs text-[color:var(--text-muted)]">
              Need installation or refurbishment before shipping? Add the refurbish package at checkout or contact us for a
              bundled quote.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/70 p-8 backdrop-blur lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-2xl font-semibold text-[color:var(--text-strong)]">Need enterprise stock?</h2>
            <p className="mt-3 text-sm text-[color:var(--text-base)]">
              We maintain buffer inventory for studios, esports teams, and data centers. Reserve GPUs, schedule refurbishment
              windows, or set up recurring shipments.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center text-xs font-semibold text-[color:var(--accent-secondary)] hover:text-[color:var(--accent-secondary)]/80"
            >
              Contact the sourcing team →
            </Link>
          </div>
          <div className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)]/85 p-6 text-sm text-[color:var(--text-base)]">
            <p className="font-semibold text-[color:var(--text-strong)]">Same-day installation</p>
            <p className="mt-2 text-xs text-[color:var(--text-muted)]">
              Book a technician to integrate your purchase into a workstation or rack. Includes cable management and thermal
              checks.
            </p>
            <p className="mt-5 font-semibold text-[color:var(--text-strong)]">Documentation included</p>
            <p className="mt-2 text-xs text-[color:var(--text-muted)]">
              Every shipment includes benchmark logs, thermal profiles, and repair history when applicable.
            </p>
            <p className="mt-5 font-semibold text-[color:var(--text-strong)]">Warranty options</p>
            <p className="mt-2 text-xs text-[color:var(--text-muted)]">
              Extend coverage to six weeks at checkout or bundle maintenance visits for long-term deployments.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default StorePage
