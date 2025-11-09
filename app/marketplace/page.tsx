'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'

import PageHeader from '@/app/_components/PageHeader'

import { marketplaceListings } from '../_data/site'

const getNumericPrice = (price: string) => Number(price.replace(/[^0-9.]/g, ''))

const MarketplacePage = () => {
  const brands = Array.from(new Set(marketplaceListings.map((listing) => listing.brand))).sort()
  const maxListingPrice = Math.max(...marketplaceListings.map((listing) => getNumericPrice(listing.price)))
  const minListingPrice = Math.min(...marketplaceListings.map((listing) => getNumericPrice(listing.price)))

  const [brandFilter, setBrandFilter] = useState('All')
  const [conditionFilter, setConditionFilter] = useState<'All' | 'Refurbished' | 'Used'>('All')
  const [fansFilter, setFansFilter] = useState('Any')
  const [coolerFilter, setCoolerFilter] = useState('Any')
  const [categoryFilter, setCategoryFilter] = useState('Any')
  const [priceRange, setPriceRange] = useState<[number, number]>([minListingPrice, maxListingPrice])

  const filteredListings = useMemo(() => {
    return marketplaceListings.filter((listing) => {
      const numericPrice = getNumericPrice(listing.price)
      if (numericPrice < priceRange[0] || numericPrice > priceRange[1]) {
        return false
      }
      if (brandFilter !== 'All' && listing.brand !== brandFilter) {
        return false
      }
      if (conditionFilter !== 'All' && listing.condition !== conditionFilter) {
        return false
      }
      if (fansFilter !== 'Any' && listing.fans !== Number(fansFilter)) {
        return false
      }
      if (coolerFilter !== 'Any' && listing.cooler !== coolerFilter) {
        return false
      }
      if (categoryFilter !== 'Any' && listing.category !== categoryFilter) {
        return false
      }
      return true
    })
  }, [brandFilter, categoryFilter, conditionFilter, coolerFilter, fansFilter, priceRange])

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
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(61,214,140,0.18),_transparent_70%)]" />
        <PageHeader
          title="GPU Doctor marketplace"
          description="Browse certified trade-ins, list your own hardware, and add refurbishment or warranty upgrades before shipping."
          actions={
            <Link
              href="/sell"
              className="inline-flex items-center rounded-full bg-[color:var(--accent-primary)] px-5 py-3 text-sm font-semibold text-[color:var(--surface-950)] shadow-lg shadow-[rgba(61,214,140,0.25)] hover:bg-[color:var(--accent-secondary)] hover:text-[color:var(--surface-900)]"
            >
              Sell your GPU
            </Link>
          }
        />
      </div>

      <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-10 xl:px-16">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/75 p-6">
            <h2 className="text-lg font-semibold text-[color:var(--text-strong)]">Filters</h2>
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
                <label className="text-xs font-semibold uppercase tracking-wide text-[color:var(--text-muted)]">Condition</label>
                <div className="mt-3 grid gap-2">
                  {(['All', 'Refurbished', 'Used'] as const).map((condition) => (
                    <label key={condition} className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="condition"
                        value={condition}
                        checked={conditionFilter === condition}
                        onChange={() => setConditionFilter(condition)}
                      />
                      <span>{condition}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-[color:var(--text-muted)]">Number of fans</label>
                <select
                  className="mt-2 w-full rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)] px-4 py-3"
                  value={fansFilter}
                  onChange={(event) => setFansFilter(event.target.value)}
                >
                  <option value="Any">Any</option>
                  <option value="0">0 (waterblock)</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-[color:var(--text-muted)]">Cooler type</label>
                <select
                  className="mt-2 w-full rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)] px-4 py-3"
                  value={coolerFilter}
                  onChange={(event) => setCoolerFilter(event.target.value)}
                >
                  <option value="Any">Any</option>
                  <option value="Air">Air</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Waterblock">Waterblock</option>
                  <option value="Blower">Blower</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-[color:var(--text-muted)]">Category</label>
                <select
                  className="mt-2 w-full rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)] px-4 py-3"
                  value={categoryFilter}
                  onChange={(event) => setCategoryFilter(event.target.value)}
                >
                  <option value="Any">Any</option>
                  <option value="Gaming">Gaming</option>
                  <option value="Workstation">Workstation</option>
                  <option value="Data Center">Data Center</option>
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
                    min={minListingPrice}
                    max={maxListingPrice}
                    step={10}
                    value={priceRange[0]}
                    onChange={(event) => handlePriceChange(0, Number(event.target.value))}
                  />
                  <input
                    type="range"
                    min={minListingPrice}
                    max={maxListingPrice}
                    step={10}
                    value={priceRange[1]}
                    onChange={(event) => handlePriceChange(1, Number(event.target.value))}
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-[color:var(--text-muted)]">Warranty add-ons</label>
                <p className="mt-2 text-xs text-[color:var(--text-muted)]">
                  Every listing includes a one-week warranty. Add the six-week extension during checkout for $59.
                </p>
              </div>
            </div>
          </aside>

          <div>
            <div className="flex flex-col gap-6 pb-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-[color:var(--text-strong)]">Listings</h2>
                <p className="mt-3 max-w-2xl text-sm text-[color:var(--text-muted)]">
                  Filters help you narrow down the exact board you need. Combine refurbishment and certification with any listing
                  for peace of mind.
                </p>
              </div>
              <Link
                href="/repair-requests"
                className="inline-flex items-center text-sm font-semibold text-[color:var(--accent-secondary)] hover:text-[color:var(--accent-secondary)]/80"
              >
                Bundle repair with purchase →
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredListings.map(({ id, title, brand, model, price, condition, description, stats, location, refurbishedByDoctor, includesRefurbOption, fans, cooler, chipset }) => (
                <article id={id} key={id} className="relative rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/75 p-6 backdrop-blur">
                  <header className="space-y-1">
                    <div className="flex items-center justify-between text-xs text-[color:var(--text-muted)]">
                      <span>{brand}</span>
                      <span>{condition}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-[color:var(--text-strong)]">{title}</h3>
                    <p className="text-sm text-[color:var(--text-base)]">{model}</p>
                  </header>
                  <p className="mt-4 text-sm leading-6 text-[color:var(--text-base)]">{description}</p>
                  <p className="mt-4 text-xs text-[color:var(--accent-secondary)]/80">{stats}</p>
                  <div className="mt-4 flex flex-wrap gap-3 text-xs">
                    <span className="rounded-full bg-[color:var(--surface-950)] px-3 py-1 text-[color:var(--text-base)]">{location}</span>
                    {chipset ? (
                      <span className="rounded-full bg-[color:var(--accent-secondary)]/10 px-3 py-1 text-[color:var(--accent-secondary)]">{chipset}</span>
                    ) : null}
                    {fans !== undefined ? (
                      <span className="rounded-full bg-[color:var(--accent-secondary)]/10 px-3 py-1 text-[color:var(--accent-secondary)]">{fans} fan{fans === 1 ? '' : 's'}</span>
                    ) : null}
                    {cooler ? (
                      <span className="rounded-full bg-[color:var(--accent-primary)]/20 px-3 py-1 text-[color:var(--accent-secondary)]">{cooler}</span>
                    ) : null}
                    {refurbishedByDoctor ? (
                      <span className="rounded-full bg-[color:var(--accent-primary)]/25 px-3 py-1 text-[color:var(--accent-secondary)]">GPU Doctor Certified</span>
                    ) : null}
                    {includesRefurbOption ? (
                      <span className="rounded-full bg-[color:var(--accent-secondary)]/15 px-3 py-1 text-[color:var(--accent-secondary)]">Refurbish add-on</span>
                    ) : null}
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-lg font-semibold text-[color:var(--accent-secondary)]">{price}</span>
                    <Link href={`/repair-requests?listing=${id}`} className="text-xs font-semibold text-[color:var(--accent-secondary)] hover:text-[color:var(--accent-secondary)]/80">
                      Request diagnostics →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-10 text-xs text-[color:var(--text-muted)]">
              Shipping is insured both ways. Diagnostic fees are credited when you combine a marketplace purchase with repair or
              refurbishment services.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default MarketplacePage
