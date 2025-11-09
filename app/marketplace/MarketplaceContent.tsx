'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'

import type { MarketplaceListing } from '../_data/site'

const unique = <T,>(values: T[]) => Array.from(new Set(values))

const getMemorySize = (memory: string) => {
  const match = memory.match(/(\d+)/)
  return match ? Number(match[1]) : null
}

const MarketplaceContent = ({ listings }: { listings: MarketplaceListing[] }) => {
  const [query, setQuery] = useState('')
  const [brand, setBrand] = useState('All')
  const [coolerType, setCoolerType] = useState<'All' | MarketplaceListing['coolerType']>('All')
  const [fanCount, setFanCount] = useState('All')
  const [memory, setMemory] = useState('All')
  const [onlyCertified, setOnlyCertified] = useState(false)
  const [withRefurbOption, setWithRefurbOption] = useState(false)

  const prices = useMemo(() => listings.map((item) => item.priceValue), [listings])
  const minPrice = Math.min(...prices)
  const maxPrice = Math.max(...prices)
  const [priceRange, setPriceRange] = useState<[number, number]>([minPrice, maxPrice])

  const brands = useMemo(() => unique(listings.map((item) => item.brand)).sort(), [listings])
  const fanOptions = useMemo(() => unique(listings.map((item) => item.fanCount)).sort((a, b) => a - b), [listings])
  const memoryOptions = useMemo(
    () =>
      unique(
        listings
          .map((item) => getMemorySize(item.memory))
          .filter((value): value is number => Boolean(value))
      ).sort((a, b) => a - b),
    [listings]
  )

  const handlePriceChange = (index: 0 | 1) => (value: number) => {
    setPriceRange((previous) => {
      const next: [number, number] = [...previous]
      next[index] = value
      if (next[0] > next[1]) {
        if (index === 0) {
          next[1] = value
        } else {
          next[0] = value
        }
      }
      return next
    })
  }

  const filteredListings = useMemo(() => {
    return listings.filter((listing) => {
      if (listing.priceValue < priceRange[0] || listing.priceValue > priceRange[1]) {
        return false
      }
      if (query) {
        const search = `${listing.title} ${listing.model} ${listing.brand}`.toLowerCase()
        if (!search.includes(query.trim().toLowerCase())) {
          return false
        }
      }
      if (brand !== 'All' && listing.brand !== brand) {
        return false
      }
      if (coolerType !== 'All' && listing.coolerType !== coolerType) {
        return false
      }
      if (fanCount !== 'All' && String(listing.fanCount) !== fanCount) {
        return false
      }
      if (memory !== 'All') {
        const size = getMemorySize(listing.memory)
        if (size !== Number(memory)) {
          return false
        }
      }
      if (onlyCertified && !listing.refurbishedByDoctor) {
        return false
      }
      if (withRefurbOption && !listing.includesRefurbOption) {
        return false
      }
      return true
    })
  }, [brand, coolerType, fanCount, listings, memory, onlyCertified, priceRange, query, withRefurbOption])

  return (
    <section className="mx-auto max-w-6xl px-6 pb-16 lg:px-10 xl:px-16">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <form className="space-y-6 rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-6 text-sm text-emerald-50/80">
          <div>
            <label className="text-sm font-semibold text-emerald-200" htmlFor="search">
              Search listings
            </label>
            <input
              id="search"
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by model, brand, or keyword"
              className="mt-2 w-full rounded-2xl border border-emerald-500/20 bg-[#091810] px-4 py-3 text-sm text-emerald-50 placeholder:text-emerald-200/40"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-semibold text-emerald-200" htmlFor="brand">
                Brand
              </label>
              <select
                id="brand"
                value={brand}
                onChange={(event) => setBrand(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-emerald-500/20 bg-[#091810] px-4 py-3 text-sm text-emerald-50"
              >
                <option value="All">All brands</option>
                {brands.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-emerald-200" htmlFor="cooler">
                Cooler type
              </label>
              <select
                id="cooler"
                value={coolerType}
                onChange={(event) => setCoolerType(event.target.value as typeof coolerType)}
                className="mt-2 w-full rounded-2xl border border-emerald-500/20 bg-[#091810] px-4 py-3 text-sm text-emerald-50"
              >
                <option value="All">All coolers</option>
                <option value="Air">Air</option>
                <option value="Liquid">Liquid</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-emerald-200" htmlFor="fans">
                Number of fans
              </label>
              <select
                id="fans"
                value={fanCount}
                onChange={(event) => setFanCount(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-emerald-500/20 bg-[#091810] px-4 py-3 text-sm text-emerald-50"
              >
                <option value="All">All configurations</option>
                {fanOptions.map((value) => (
                  <option key={value} value={value}>
                    {value === 0 ? 'No fans (water cooled)' : `${value}-fan`}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-emerald-200" htmlFor="memory">
                Memory capacity
              </label>
              <select
                id="memory"
                value={memory}
                onChange={(event) => setMemory(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-emerald-500/20 bg-[#091810] px-4 py-3 text-sm text-emerald-50"
              >
                <option value="All">All sizes</option>
                {memoryOptions.map((value) => (
                  <option key={value} value={value}>
                    {value} GB
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-emerald-200">Price range</p>
            <div className="mt-3 flex items-center justify-between text-xs text-emerald-200/80">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                value={priceRange[0]}
                onChange={(event) => handlePriceChange(0)(Number(event.target.value))}
                className="w-full"
              />
              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                value={priceRange[1]}
                onChange={(event) => handlePriceChange(1)(Number(event.target.value))}
                className="w-full"
              />
            </div>
          </div>

          <div className="space-y-3 rounded-2xl border border-emerald-500/20 bg-[#091810] p-4 text-xs text-emerald-50/80">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={onlyCertified}
                onChange={(event) => setOnlyCertified(event.target.checked)}
                className="h-4 w-4 rounded border border-emerald-500/40 bg-transparent"
              />
              GPU Doctor certified only
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={withRefurbOption}
                onChange={(event) => setWithRefurbOption(event.target.checked)}
                className="h-4 w-4 rounded border border-emerald-500/40 bg-transparent"
              />
              Show refurbish add-on eligible listings
            </label>
          </div>
        </form>

        <div className="space-y-6">
          <header className="flex flex-col gap-3 rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-emerald-200">{filteredListings.length} listings</h2>
              <p className="text-sm text-emerald-50/70">
                All marketplace GPUs include documented diagnostics. Add a refurbish package before shipping to receive certification
                paperwork and refreshed thermals.
              </p>
            </div>
            <Link
              href="/store"
              className="inline-flex items-center text-xs font-semibold text-emerald-100 hover:text-emerald-50"
            >
              Visit the store →
            </Link>
          </header>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredListings.map(({ id, title, brand: brandName, model, price, condition, description, stats, location, refurbishedByDoctor, includesRefurbOption, coolerType: type, fanCount: fans, memory }) => (
              <article key={id} className="rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-6">
                <header className="space-y-1">
                  <div className="flex items-center justify-between text-xs text-emerald-200/80">
                    <span>{brandName}</span>
                    <span>{condition}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-emerald-100">{title}</h3>
                  <p className="text-sm text-emerald-50/80">{model}</p>
                </header>
                <p className="mt-4 text-sm leading-6 text-emerald-50/75">{description}</p>
                <p className="mt-4 text-xs text-emerald-200/80">{stats}</p>
                <div className="mt-4 grid gap-2 text-xs text-emerald-50/75">
                  <span>Cooler: {type}</span>
                  <span>Fans: {fans === 0 ? 'Water cooled' : `${fans}-fan array`}</span>
                  <span>Memory: {memory}</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-3 text-xs text-emerald-50/75">
                  <span className="rounded-full bg-emerald-400/10 px-3 py-1">{location}</span>
                  {refurbishedByDoctor ? (
                    <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-emerald-100">GPU Doctor Certified</span>
                  ) : null}
                  {includesRefurbOption ? (
                    <span className="rounded-full bg-teal-400/20 px-3 py-1 text-emerald-100">Refurbish add-on available</span>
                  ) : null}
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-lg font-semibold text-emerald-200">{price}</span>
                  <Link href={`/repair-requests?listing=${id}`} className="text-xs font-semibold text-emerald-100 hover:text-emerald-50">
                    Request diagnostics →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MarketplaceContent
