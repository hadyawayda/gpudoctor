import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

import PageHeader from '@/app/shared/PageHeader'

import { productCategories, getProductsByCategories } from '../_data/site'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Browse GPUs, CPUs, cooling, and chassis curated by GPU Doctor engineers with telemetry-backed validation.',
}

const ProductsPage = () => {
  return (
    <main className="bg-background-base text-slate-100">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.2),_transparent_70%)]" />
        <PageHeader
          title="Curated hardware catalogue"
          description="Every component in our store is stress-tested, firmware-verified, and paired with documentation so you can build confidently or bundle upgrades with a repair."
          actions={
            <Link
              href="/store"
              className="inline-flex items-center rounded-full border border-primary-500/60 px-5 py-3 text-sm font-semibold text-primary-200 hover:border-primary-400 hover:text-primary-100"
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
              <section key={title} className="space-y-6 rounded-3xl border border-primary-500/20 bg-background-section/70 p-8">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-primary-300">{title}</h2>
                    <p className="mt-2 text-sm text-slate-300">{subtitle}</p>
                  </div>
                  <p className="text-xs text-slate-400">{highlight}</p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {products.map((product) => (
                    <Link
                      key={product.slug}
                      href={`/products/${product.slug}`}
                      className="group rounded-2xl border border-primary-500/20 bg-background-card/80 p-5 transition hover:border-primary-400/50"
                    >
                      <div className="relative mb-4 h-44 overflow-hidden rounded-xl border border-primary-500/20 bg-background-card/80">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          width={480}
                          height={320}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="space-y-2 text-sm text-slate-300">
                        <div className="flex items-center justify-between text-xs text-primary-300/80">
                          <span>{product.brand}</span>
                          <span>{product.condition}</span>
                        </div>
                        <h3 className="text-base font-semibold text-slate-100">{product.name}</h3>
                        <p className="text-xs text-slate-400">{product.model}</p>
                        <p className="text-xs text-slate-500">{product.tags.join(' • ')}</p>
                        <p className="text-base font-semibold text-accent-300">${product.price}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </section>

      <section className="bg-background-base pb-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-accent-500/20 bg-accent-500/10 p-8 text-center">
          <h2 className="text-3xl font-semibold text-slate-100">Need something bespoke?</h2>
          <p className="mt-4 text-sm text-slate-300">
            Our engineers can source rare GPUs, pre-flash firmware for cluster deployments, or assemble prebuilt rigs. Share your
            wishlist and we&apos;ll prepare a documented parts list, turnaround estimate, and warranty options tailored to your use case.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/repair-requests"
              className="rounded-full border border-primary-500/60 px-5 py-3 text-sm font-semibold text-primary-200 hover:border-primary-400 hover:text-primary-100"
            >
              Request a sourcing quote
            </Link>
            <Link
              href="/builds"
              className="rounded-full bg-gradient-to-r from-primary-500 to-secondary-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-500/30 hover:from-primary-400 hover:to-secondary-500"
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
