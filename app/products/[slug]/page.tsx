import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import PageHeader from '@/app/shared/PageHeader'

import { catalogProducts, findProductBySlug } from '../../_data/site'

type ProductPageProps = {
  params: { slug?: string }
}

export function generateStaticParams() {
  return catalogProducts.map((product) => ({ slug: product.slug }))
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = params.slug ? findProductBySlug(params.slug) : undefined
  if (!product) {
    return { title: 'Product not found' }
  }

  return {
    title: `${product.name} – GPU Doctor catalogue`,
    description: product.description,
  }
}

const ProductDetailPage = ({ params }: ProductPageProps) => {
  const product = params.slug ? findProductBySlug(params.slug) : undefined

  if (!product) {
    notFound()
  }

  return (
    <main className="bg-[#07130e] text-emerald-50">
      <PageHeader
        title={product.name}
        description={`${product.description} Explore compatible services, marketplace listings, and upgrade options below.`}
        actions={
          <div className="flex flex-wrap gap-3">
            <Link
              href="/marketplace"
              className="inline-flex items-center rounded-full border border-emerald-400/60 px-5 py-3 text-sm font-semibold text-emerald-200 hover:border-emerald-300 hover:text-emerald-100"
            >
              Check marketplace availability
            </Link>
            <Link
              href={`/repair-requests?product=${product.slug}`}
              className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 hover:from-emerald-300 hover:via-cyan-300 hover:to-sky-400"
            >
              Schedule a service
            </Link>
          </div>
        }
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 xl:px-16">
        <div className="space-y-6 rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-8">
          <div className="relative h-72 overflow-hidden rounded-2xl border border-emerald-500/20 bg-[#0d2018]/80">
            <Image src={product.images[0]} alt={product.name} width={960} height={640} className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-wrap gap-3 text-xs text-emerald-200/80">
            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-emerald-100">{product.brand}</span>
            <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-emerald-100">{product.condition}</span>
            <span className="rounded-full bg-teal-400/20 px-3 py-1 text-emerald-100">{product.availability}</span>
          </div>
          <p className="text-sm leading-7 text-emerald-50/80">{product.description}</p>
          <div>
            <h2 className="text-lg font-semibold text-emerald-200">Key specifications</h2>
            <dl className="mt-4 grid gap-4 text-sm text-emerald-50/80 sm:grid-cols-2">
              {product.specs.map((spec) => (
                <div key={spec.label} className="rounded-2xl border border-emerald-500/20 bg-[#091810]/80 p-4">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-emerald-200">{spec.label}</dt>
                  <dd className="mt-2 text-sm text-emerald-50/90">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <aside className="space-y-6">
          <div className="rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-6">
            <h2 className="text-lg font-semibold text-emerald-200">Purchase options</h2>
            <p className="mt-3 text-3xl font-semibold text-emerald-200">${product.price.toLocaleString()}</p>
            <p className="mt-2 text-xs text-emerald-50/70">
              Includes GPU Doctor telemetry pack, intake documentation, and seven-day workmanship coverage on refurbished hardware. Extend to six weeks for $59.
            </p>
            <div className="mt-5 grid gap-3 text-xs">
              <span className="rounded-2xl border border-emerald-500/20 bg-[#091810]/80 px-4 py-3 text-emerald-50/80">
                Add to builder to check case clearance and PSU headroom.
              </span>
              <span className="rounded-2xl border border-emerald-500/20 bg-[#091810]/80 px-4 py-3 text-emerald-50/80">
                Bundle with <strong>Thermal overhaul</strong> or scheduled maintenance for long-term reliability.
              </span>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/builds"
                className="rounded-full border border-emerald-400/60 px-5 py-3 text-xs font-semibold text-emerald-200 hover:border-emerald-300 hover:text-emerald-100"
              >
                Add to PC builder
              </Link>
              <Link
                href="/cart"
                className="rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-500 px-5 py-3 text-xs font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 hover:from-emerald-300 hover:via-cyan-300 hover:to-sky-400"
              >
                Reserve now
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-6 text-sm text-emerald-50/80">
            <h2 className="text-lg font-semibold text-emerald-200">Service recommendations</h2>
            <ul className="mt-4 space-y-4">
              <li className="rounded-2xl border border-emerald-500/15 bg-emerald-500/10 p-4 text-emerald-50/90">
                <p className="text-sm font-semibold text-emerald-50">Thermal optimisation</p>
                <p className="mt-1 text-xs text-emerald-50/80">
                  Pair with the complete thermal overhaul to refresh paste and pads before reinstalling the card.
                </p>
              </li>
              <li className="rounded-2xl border border-emerald-500/15 bg-emerald-500/10 p-4 text-emerald-50/90">
                <p className="text-sm font-semibold text-emerald-50">Performance re-tuning</p>
                <p className="mt-1 text-xs text-emerald-50/80">Our technicians calibrate fan curves, drivers, and power targets to match your workloads.</p>
              </li>
            </ul>
            <Link
              href="/services"
              className="mt-6 inline-flex items-center text-xs font-semibold text-emerald-100 hover:text-emerald-50"
            >
              Explore all services →
            </Link>
          </div>
        </aside>
      </section>
    </main>
  )
}

export default ProductDetailPage
