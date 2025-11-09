import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import PageHeader from '@/app/_components/PageHeader'

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
    title: `${product.name} – GPU Doctor store`,
    description: product.description,
  }
}

const ProductDetailPage = ({ params }: ProductPageProps) => {
  const product = params.slug ? findProductBySlug(params.slug) : undefined

  if (!product) {
    notFound()
  }

  return (
    <main className="bg-[color:var(--surface-950)] text-[color:var(--text-base)]">
      <PageHeader
        title={product.name}
        description={`${product.description} Review compatible services, refurbishment options, and warranty upgrades below.`}
        actions={
          <div className="flex flex-wrap gap-3">
            <Link
              href="/marketplace"
              className="inline-flex items-center rounded-full border border-[color:var(--accent-secondary)]/60 px-5 py-3 text-sm font-semibold text-[color:var(--accent-secondary)] hover:border-[color:var(--accent-secondary)]"
            >
              Check marketplace availability
            </Link>
            <Link
              href={`/repair-requests?product=${product.slug}`}
              className="inline-flex items-center rounded-full bg-[color:var(--accent-primary)] px-5 py-3 text-sm font-semibold text-[color:var(--surface-950)] shadow-lg shadow-[rgba(61,214,140,0.25)] hover:bg-[color:var(--accent-secondary)] hover:text-[color:var(--surface-900)]"
            >
              Schedule a service
            </Link>
          </div>
        }
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 xl:px-16">
        <div className="space-y-6 rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/75 p-8 backdrop-blur">
          <div className="relative h-72 overflow-hidden rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)]">
            <Image src={product.images[0]} alt={product.name} width={960} height={640} className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-wrap gap-3 text-xs text-[color:var(--text-muted)]">
            <span className="rounded-full bg-[color:var(--surface-950)] px-3 py-1 text-[color:var(--text-base)]">{product.brand}</span>
            <span className="rounded-full bg-[color:var(--accent-secondary)]/10 px-3 py-1 text-[color:var(--accent-secondary)]">{product.condition}</span>
            <span className="rounded-full bg-[color:var(--accent-primary)]/20 px-3 py-1 text-[color:var(--accent-secondary)]">{product.availability}</span>
          </div>
          <p className="text-sm leading-7 text-[color:var(--text-base)]">{product.description}</p>
          <div>
            <h2 className="text-lg font-semibold text-[color:var(--text-strong)]">Key specifications</h2>
            <dl className="mt-4 grid gap-4 text-sm text-[color:var(--text-base)] sm:grid-cols-2">
              {product.specs.map((spec) => (
                <div key={spec.label} className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)]/80 p-4">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-[color:var(--text-muted)]">{spec.label}</dt>
                  <dd className="mt-2 text-sm text-[color:var(--text-strong)]">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <aside className="space-y-6">
          <div className="rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)]/85 p-6">
            <h2 className="text-lg font-semibold text-[color:var(--text-strong)]">Purchase options</h2>
            <p className="mt-3 text-3xl font-semibold text-[color:var(--accent-secondary)]">${product.price.toLocaleString()}</p>
            <p className="mt-2 text-xs text-[color:var(--text-muted)]">
              Includes GPU Doctor documentation pack, eligibility for refurbishment add-on, and one-week warranty with optional six-week extension.
            </p>
            <div className="mt-5 grid gap-3 text-xs text-[color:var(--text-base)]">
              <span className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/70 px-4 py-3">
                Add to builder to check case clearance and PSU headroom.
              </span>
              <span className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/70 px-4 py-3">
                Bundle with <strong>Thermal pad &amp; paste overhaul</strong> for improved cooling.
              </span>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/builds"
                className="rounded-full border border-[color:var(--accent-secondary)]/60 px-5 py-3 text-xs font-semibold text-[color:var(--accent-secondary)] hover:border-[color:var(--accent-secondary)]"
              >
                Add to PC builder
              </Link>
              <Link
                href="/cart"
                className="rounded-full bg-[color:var(--accent-primary)] px-5 py-3 text-xs font-semibold text-[color:var(--surface-950)] shadow-lg shadow-[rgba(61,214,140,0.25)] hover:bg-[color:var(--accent-secondary)] hover:text-[color:var(--surface-900)]"
              >
                Reserve now
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/75 p-6 text-sm">
            <h2 className="text-lg font-semibold text-[color:var(--text-strong)]">Recommended services</h2>
            <ul className="mt-4 space-y-4">
              <li className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)]/85 p-4">
                <p className="text-sm font-semibold text-[color:var(--text-strong)]">Thermal optimisation</p>
                <p className="mt-1 text-xs text-[color:var(--text-base)]">
                  Pair with the thermal pad &amp; paste overhaul to refresh all interface materials.
                </p>
              </li>
              <li className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)]/85 p-4">
                <p className="text-sm font-semibold text-[color:var(--text-strong)]">Certification & warranty</p>
                <p className="mt-1 text-xs text-[color:var(--text-base)]">
                  Add the GPU Doctor Certified inspection to prep for resale or redeployment with extended coverage.
                </p>
              </li>
            </ul>
            <Link
              href="/services"
              className="mt-6 inline-flex items-center text-xs font-semibold text-[color:var(--accent-secondary)] hover:text-[color:var(--accent-secondary)]/80"
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
