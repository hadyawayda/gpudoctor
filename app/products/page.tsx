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
    <main className="bg-[#07130e] text-emerald-50">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(60,227,123,0.2),_transparent_70%)]" />
        <PageHeader
          title="Curated hardware catalogue"
          description="Every component in our store is stress-tested, firmware-verified, and paired with documentation so you can build confidently or bundle upgrades with a repair."
          actions={
            <Link
              href="/store"
              className="inline-flex items-center rounded-full border border-emerald-400/60 px-5 py-3 text-sm font-semibold text-emerald-100 hover:border-emerald-300 hover:text-emerald-50"
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
              <section key={title} className="space-y-6 rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-8">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-emerald-200">{title}</h2>
                    <p className="mt-2 text-sm text-emerald-50/80">{subtitle}</p>
                  </div>
                  <p className="text-xs text-emerald-50/70">{highlight}</p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {products.map((product) => (
                    <Link
                      key={product.slug}
                      href={`/products/${product.slug}`}
                      className="group rounded-2xl border border-emerald-500/20 bg-[#091810]/80 p-5 transition hover:border-emerald-400/50"
                    >
                      <div className="relative mb-4 h-44 overflow-hidden rounded-xl border border-emerald-500/20 bg-[#0d2018]/80">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          width={480}
                          height={320}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="space-y-2 text-sm text-emerald-50/80">
                        <div className="flex items-center justify-between text-xs text-emerald-200/80">
                          <span>{product.brand}</span>
                          <span>{product.condition}</span>
                        </div>
                        <h3 className="text-base font-semibold text-emerald-100">{product.name}</h3>
                        <p className="text-xs text-emerald-50/70">{product.model}</p>
                        <p className="text-xs text-emerald-50/60">{product.tags.join(' • ')}</p>
                        <p className="text-base font-semibold text-emerald-200">${product.price}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </section>

      <section className="bg-[#07130e] pb-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-8 text-center text-[#052611]">
          <h2 className="text-3xl font-semibold text-[#052611]">Need something bespoke?</h2>
          <p className="mt-4 text-sm text-[#052611]/80">
            Our engineers can source rare GPUs, pre-flash firmware for cluster deployments, or assemble prebuilt rigs. Share your
            wishlist and we&apos;ll prepare a documented parts list, turnaround estimate, and warranty options tailored to your use case.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/repair-requests"
              className="rounded-full border border-[#052611]/40 px-5 py-3 text-sm font-semibold text-[#052611] hover:border-[#052611]/60 hover:text-[#03190c]"
            >
              Request a sourcing quote
            </Link>
            <Link
              href="/builds"
              className="rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 hover:from-emerald-300 hover:via-cyan-300 hover:to-sky-400"
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
