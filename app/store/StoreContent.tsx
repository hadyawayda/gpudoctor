'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import type { CatalogProduct } from '../_data/site'

const unique = <T,>(values: T[]) => Array.from(new Set(values))

const StoreContent = ({ products }: { products: CatalogProduct[] }) => {
  const [query, setQuery] = useState('')
  const [brand, setBrand] = useState('All')
  const [category, setCategory] = useState('All')
  const [condition, setCondition] = useState('All')
  const [availability, setAvailability] = useState('All')

  const prices = useMemo(() => products.map((product) => product.price), [products])
  const minPrice = Math.min(...prices)
  const maxPrice = Math.max(...prices)
  const [priceRange, setPriceRange] = useState<[number, number]>([minPrice, maxPrice])

  const brands = useMemo(() => unique(products.map((product) => product.brand)).sort(), [products])
  const categories = useMemo(() => unique(products.map((product) => product.category)).sort(), [products])

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

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false
      }
      if (query) {
        const text = `${product.name} ${product.model} ${product.brand}`.toLowerCase()
        if (!text.includes(query.trim().toLowerCase())) {
          return false
        }
      }
      if (brand !== 'All' && product.brand !== brand) {
        return false
      }
      if (category !== 'All' && product.category !== category) {
        return false
      }
      if (condition !== 'All' && product.condition !== condition) {
        return false
      }
      if (availability !== 'All' && product.availability !== availability) {
        return false
      }
      return true
    })
  }, [availability, brand, category, condition, priceRange, products, query])

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-10 xl:px-16">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <form className="space-y-6 rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-6 text-sm text-emerald-50/80">
          <div>
            <label className="text-sm font-semibold text-emerald-200" htmlFor="store-search">
              Search inventory
            </label>
            <input
              id="store-search"
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by product name or model"
              className="mt-2 w-full rounded-2xl border border-emerald-500/20 bg-[#091810] px-4 py-3 text-sm text-emerald-50 placeholder:text-emerald-200/40"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-semibold text-emerald-200" htmlFor="store-brand">
                Brand
              </label>
              <select
                id="store-brand"
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
              <label className="text-sm font-semibold text-emerald-200" htmlFor="store-category">
                Category
              </label>
              <select
                id="store-category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-emerald-500/20 bg-[#091810] px-4 py-3 text-sm text-emerald-50"
              >
                <option value="All">All categories</option>
                {categories.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-emerald-200" htmlFor="store-condition">
                Condition
              </label>
              <select
                id="store-condition"
                value={condition}
                onChange={(event) => setCondition(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-emerald-500/20 bg-[#091810] px-4 py-3 text-sm text-emerald-50"
              >
                <option value="All">All conditions</option>
                <option value="New">New</option>
                <option value="Used">Used</option>
                <option value="Refurbished">Refurbished</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-emerald-200" htmlFor="store-availability">
                Availability
              </label>
              <select
                id="store-availability"
                value={availability}
                onChange={(event) => setAvailability(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-emerald-500/20 bg-[#091810] px-4 py-3 text-sm text-emerald-50"
              >
                <option value="All">All statuses</option>
                <option value="In Stock">In Stock</option>
                <option value="Preorder">Preorder</option>
                <option value="Backorder">Backorder</option>
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
        </form>

        <div className="space-y-6">
          <header className="flex flex-col gap-3 rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-emerald-200">{filteredProducts.length} products</h2>
              <p className="text-sm text-emerald-50/70">
                These listings are stocked by GPU Doctor and include documentation for warranty claims and resale. Add optional installation or maintenance services at checkout.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center text-xs font-semibold text-emerald-100 hover:text-emerald-50"
            >
              Explore service add-ons →
            </Link>
          </header>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <article key={product.slug} className="rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-6">
                <div className="relative mb-4 h-48 overflow-hidden rounded-2xl border border-emerald-500/20 bg-[#091810]">
                  <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
                </div>
                <div className="flex items-center justify-between text-xs text-emerald-200/80">
                  <span>{product.brand}</span>
                  <span>{product.condition}</span>
                </div>
                <h2 className="mt-3 text-lg font-semibold text-emerald-100">{product.name}</h2>
                <p className="mt-1 text-sm text-emerald-50/75">{product.model}</p>
                <p className="mt-3 text-xs text-emerald-50/60">{product.tags.join(' • ')}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-semibold text-emerald-200">${product.price}</span>
                  <Link href={`/products/${product.slug}`} className="text-xs font-semibold text-emerald-100 hover:text-emerald-50">
                    View details →
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

export default StoreContent
