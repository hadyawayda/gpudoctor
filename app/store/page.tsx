import Link from 'next/link'
import Image from 'next/image'

import { catalogProducts } from '../_data/site'

const StorePage = () => {
  const featuredProducts = catalogProducts.filter((product) => product.availability === 'In Stock').slice(0, 6)

  return (
    <main className="bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-28 lg:px-10 xl:px-16">
        <header className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-emerald-300 sm:text-5xl">Live store feed</h1>
            <p className="text-lg text-slate-200">
              Real-time availability for GPU Doctor curated hardware. Each item ships with telemetry reports, Atlas AI setup, and
              optional refurbish or installation packages.
            </p>
          </div>
          <Link
            href="/marketplace"
            className="inline-flex items-center rounded-full border border-emerald-400/60 px-5 py-3 text-sm font-semibold text-emerald-200 hover:border-emerald-300 hover:text-emerald-100"
          >
            Browse community listings
          </Link>
        </header>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {featuredProducts.map((product) => (
            <article key={product.slug} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="relative mb-4 h-48 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between text-xs text-emerald-200/80">
                <span>{product.brand}</span>
                <span>{product.condition}</span>
              </div>
              <h2 className="mt-3 text-lg font-semibold text-white">{product.name}</h2>
              <p className="mt-1 text-sm text-slate-300">{product.model}</p>
              <p className="mt-3 text-xs text-slate-400">{product.tags.join(' • ')}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-semibold text-emerald-300">${product.price}</span>
                <Link
                  href={`/products/${product.slug}`}
                  className="text-xs font-semibold text-emerald-200 hover:text-emerald-100"
                >
                  View details →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-2xl font-semibold text-emerald-300">Need enterprise SLAs?</h2>
            <p className="mt-3 text-sm text-slate-200">
              We stock redundant GPUs, rackmount-ready kits, and overnight swap programs for render farms and inference clusters.
              Contact our enterprise team to secure dedicated inventory.
            </p>
            <Link
              href="/services"
              className="mt-6 inline-flex items-center text-xs font-semibold text-emerald-200 hover:text-emerald-100"
            >
              Explore enterprise services →
            </Link>
          </div>
          <div className="rounded-2xl border border-emerald-500/10 bg-emerald-500/10 p-6 text-sm text-emerald-200">
            <p className="font-semibold text-white">Same-day installation</p>
            <p className="mt-2 text-xs text-emerald-200/80">
              Book a technician to integrate your purchase into an existing workstation, rack, or immersion loop.
            </p>
            <p className="mt-5 font-semibold text-white">Telemetry-ready shipping</p>
            <p className="mt-2 text-xs text-emerald-200/80">
              Every shipment includes QR codes linking to benchmarks, thermal profiles, and post-repair notes.
            </p>
            <p className="mt-5 font-semibold text-white">Atlas AI monitoring</p>
            <p className="mt-2 text-xs text-emerald-200/80">
              Enable proactive alerts for temperature spikes, fan degradation, or driver regressions.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default StorePage
