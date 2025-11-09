import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

import PageHeader from '@/app/_components/PageHeader'

import { productCategories, getProductsByCategories } from '../_data/site'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Browse GPUs, CPUs, cooling, and chassis curated by GPU Doctor technicians with detailed validation.',
}

const ProductsPage = () => {
  return (
    <main className="bg-[color:var(--surface-950)] text-[color:var(--text-base)]">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(61,214,140,0.18),_transparent_70%)]" />
        <PageHeader
          title="Curated hardware catalogue"
          description="Every component in our store is stress-tested, documented, and ready for your next GPU build or repair upgrade."
          actions={
            <Link
              href="/store"
              className="inline-flex items-center rounded-full border border-[color:var(--accent-secondary)]/60 px-5 py-3 text-sm font-semibold text-[color:var(--accent-secondary)] hover:border-[color:var(--accent-secondary)]"
            >
              Visit the live store feed
            </Link>
          }
        />
      </div>

      <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-10 xl:px-16">
        <div className="grid gap-10">
          {productCategories.map(({ title, subtitle, categories, highlight }) => {
            const products = getProductsByCategories(categories)
            return (
              <section key={title} className="space-y-6 rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/70 p-8 backdrop-blur">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-[color:var(--text-strong)]">{title}</h2>
                    <p className="mt-2 text-sm text-[color:var(--text-base)]">{subtitle}</p>
                  </div>
                  <p className="text-xs text-[color:var(--text-muted)]">{highlight}</p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {products.map((product) => (
                    <Link
                      key={product.slug}
                      href={`/products/${product.slug}`}
                      className="group rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)]/85 p-5 transition hover:border-[color:var(--accent-secondary)]/60"
                    >
                      <div className="relative mb-4 h-44 overflow-hidden rounded-xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/80">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          width={480}
                          height={320}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between text-xs text-[color:var(--text-muted)]">
                          <span>{product.brand}</span>
                          <span>{product.condition}</span>
                        </div>
                        <h3 className="text-base font-semibold text-[color:var(--text-strong)]">{product.name}</h3>
                        <p className="text-xs text-[color:var(--text-base)]">{product.model}</p>
                        <p className="text-xs text-[color:var(--text-muted)]">{product.tags.join(' • ')}</p>
                        <p className="text-base font-semibold text-[color:var(--accent-secondary)]">${product.price}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </section>

      <section className="bg-[color:var(--surface-900)]/70 pb-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)]/85 p-8 text-center">
          <h2 className="text-3xl font-semibold text-[color:var(--text-strong)]">Need something bespoke?</h2>
          <p className="mt-4 text-sm text-[color:var(--text-base)]">
            Our technicians can source rare GPUs, pre-stage refurbishment, or assemble prebuilt rigs. Share your wishlist and we
            will design a parts list with maintenance and warranty recommendations.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/repair-requests"
              className="rounded-full border border-[color:var(--accent-secondary)]/60 px-5 py-3 text-sm font-semibold text-[color:var(--accent-secondary)] hover:border-[color:var(--accent-secondary)]"
            >
              Request a sourcing quote
            </Link>
            <Link
              href="/builds"
              className="rounded-full bg-[color:var(--accent-primary)] px-5 py-3 text-sm font-semibold text-[color:var(--surface-950)] shadow-lg shadow-[rgba(61,214,140,0.25)] hover:bg-[color:var(--accent-secondary)] hover:text-[color:var(--surface-900)]"
            >
              Start a build
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ProductsPage
