'use client'

import { useMemo, useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'

import { catalogProducts } from '../_data/site'

const gpuOptions = catalogProducts.filter((product) => product.category === 'GPU')
const uniqueBrands = Array.from(new Set(gpuOptions.map((product) => product.brand))).sort()
const conditionOptions = ['Mint', 'Lightly used', 'Needs repair', 'Not working'] as const
const issueTypes = ['Thermal throttling', 'Artifacts', 'Power failure', 'No display', 'Driver instability', 'Other'] as const

type FormState = {
  brand: string
  model: string
  condition: (typeof conditionOptions)[number]
  issue: (typeof issueTypes)[number]
  hours: string
  accessories: string
  refurbish: string
  notes: string
}

const SellPage = () => {
  const [formState, setFormState] = useState<FormState>({
    brand: uniqueBrands[0] ?? 'NVIDIA',
    model: gpuOptions[0]?.model ?? 'Unknown',
    condition: conditionOptions[0],
    issue: issueTypes[0],
    hours: '0-500',
    accessories: 'original-box',
    refurbish: 'yes',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const modelsForBrand = useMemo(() => gpuOptions.filter((product) => product.brand === formState.brand), [formState.brand])

  const estimatedValue = useMemo(() => {
    const basePrice = modelsForBrand.find((product) => product.model === formState.model)?.price ?? 500
    const conditionModifier =
      formState.condition === 'Mint'
        ? 0.85
        : formState.condition === 'Lightly used'
          ? 0.75
          : formState.condition === 'Needs repair'
            ? 0.5
            : 0.35
    const issueModifier = formState.issue === 'Other' ? 0.9 : 1
    const refurbishModifier = formState.refurbish === 'yes' ? 1.05 : 1

    return Math.round(basePrice * conditionModifier * issueModifier * refurbishModifier)
  }, [formState.condition, formState.issue, formState.model, formState.refurbish, modelsForBrand])

  const handleChange = (event: ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target

    setFormState((state) => ({
      ...state,
      [name]: value,
      ...(name === 'brand' ? { model: gpuOptions.find((product) => product.brand === value)?.model ?? state.model } : null),
    }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="bg-background-base text-slate-100">
      <section className="mx-auto max-w-5xl px-6 pb-24 pt-28 lg:px-10 xl:px-16">
        <header className="space-y-6 text-balance">
          <h1 className="text-4xl font-semibold tracking-tight text-secondary-300 sm:text-5xl">Sell or consign your GPU</h1>
          <p className="text-lg text-slate-300">
            Tell us about your graphics card and choose whether you want a refurbish package. We&apos;ll generate an instant trade-in
            estimate, schedule a pickup, and list it on the GPU Doctor marketplace once it passes validation.
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="mt-12 grid gap-8 rounded-3xl border border-primary-500/20 bg-background-section/70 p-8 backdrop-blur lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div className="space-y-6">
            <div>
              <label className="text-sm font-semibold text-primary-300" htmlFor="brand">
                GPU brand
              </label>
              <select
                id="brand"
                name="brand"
                className="mt-2 w-full rounded-2xl border border-primary-500/20 bg-background-card px-4 py-3 text-sm text-slate-100"
                value={formState.brand}
                onChange={handleChange}
              >
                {uniqueBrands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-primary-300" htmlFor="model">
                Model
              </label>
              <select
                id="model"
                name="model"
                className="mt-2 w-full rounded-2xl border border-primary-500/20 bg-background-card px-4 py-3 text-sm text-slate-100"
                value={formState.model}
                onChange={handleChange}
              >
                {modelsForBrand.map(({ model }) => (
                  <option key={model} value={model}>
                    {model}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="text-sm font-semibold text-primary-300" htmlFor="condition">
                  Condition
                </label>
                <select
                  id="condition"
                  name="condition"
                  className="mt-2 w-full rounded-2xl border border-primary-500/20 bg-background-card px-4 py-3 text-sm text-slate-100"
                  value={formState.condition}
                  onChange={handleChange}
                >
                  {conditionOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold text-primary-300" htmlFor="issue">
                  Issue type
                </label>
                <select
                  id="issue"
                  name="issue"
                  className="mt-2 w-full rounded-2xl border border-primary-500/20 bg-background-card px-4 py-3 text-sm text-slate-100"
                  value={formState.issue}
                  onChange={handleChange}
                >
                  {issueTypes.map((issue) => (
                    <option key={issue} value={issue}>
                      {issue}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="text-sm font-semibold text-primary-300" htmlFor="hours">
                  Approximate usage hours
                </label>
                <select
                  id="hours"
                  name="hours"
                  className="mt-2 w-full rounded-2xl border border-primary-500/20 bg-background-card px-4 py-3 text-sm text-slate-100"
                  value={formState.hours}
                  onChange={handleChange}
                >
                  {['0-500', '500-1000', '1000-2000', '2000+'].map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold text-primary-300" htmlFor="accessories">
                  Accessories
                </label>
                <select
                  id="accessories"
                  name="accessories"
                  className="mt-2 w-full rounded-2xl border border-primary-500/20 bg-background-card px-4 py-3 text-sm text-slate-100"
                  value={formState.accessories}
                  onChange={handleChange}
                >
                  <option value="original-box">Original box &amp; cables</option>
                  <option value="card-only">GPU only</option>
                  <option value="extras">Includes water block / extras</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold text-primary-300" htmlFor="refurbish">
                Refurbish before listing?
              </label>
              <select
                id="refurbish"
                name="refurbish"
                className="mt-2 w-full rounded-2xl border border-primary-500/20 bg-background-card px-4 py-3 text-sm text-slate-100"
                value={formState.refurbish}
                onChange={handleChange}
              >
                <option value="yes">Yes – add GPU Doctor refurbish package</option>
                <option value="no">No – list as-is</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-primary-300" htmlFor="notes">
                Additional details
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                placeholder="List any modifications, cooling swaps, or previous repairs."
                className="mt-2 w-full rounded-2xl border border-primary-500/20 bg-background-card px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400"
                value={formState.notes}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-primary-500 to-secondary-600 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-primary-500/30 transition hover:from-primary-400 hover:to-secondary-500"
            >
              Get my trade-in estimate
            </button>
          </div>
          <aside className="flex flex-col justify-between rounded-3xl border border-primary-500/20 bg-background-card p-6 text-sm text-slate-300">
            <div>
              <h2 className="text-lg font-semibold text-primary-300">Estimated payout</h2>
              <p className="mt-3 text-3xl font-semibold text-slate-100">${estimatedValue}</p>
              <p className="mt-2 text-xs text-slate-400">
                Final payout confirmed after diagnostics. Refurbish packages can increase value up to 15%.
              </p>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border border-primary-500/20 bg-background-section/70 p-4 text-xs text-slate-300">
                <p>• Free insured pickup within 24 hours in supported cities.</p>
                <p className="mt-2">• Instant marketplace listing once refurbished or validated.</p>
                <p className="mt-2">• Track status and offers directly from your GPU Doctor dashboard.</p>
              </div>
              {submitted ? (
                <div className="rounded-2xl border border-primary-500/30 bg-primary-500/10 p-4 text-xs text-primary-300">
                  Thank you! A specialist will confirm shipping details via email shortly.
                </div>
              ) : null}
            </div>
          </aside>
        </form>
      </section>
    </main>
  )
}

export default SellPage
