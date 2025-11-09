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
    <main className="bg-[color:var(--surface-950)] text-[color:var(--text-base)]">
      <section className="mx-auto max-w-5xl px-6 pb-24 pt-28 lg:px-10 xl:px-16">
        <header className="space-y-6 text-balance">
          <h1 className="text-4xl font-semibold tracking-tight text-[color:var(--text-strong)] sm:text-5xl">Sell your GPU</h1>
          <p className="text-lg text-[color:var(--text-muted)]">
            Provide details about your graphics card, select optional refurbishment, and receive an estimated trade-in value.
            We manage insured shipping, testing, and listing on the GPU Doctor marketplace once the card passes certification.
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="mt-12 grid gap-8 rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/75 p-8 backdrop-blur lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div className="space-y-6">
            <div>
              <label className="text-sm font-semibold text-[color:var(--text-strong)]" htmlFor="brand">
                GPU brand
              </label>
              <select
                id="brand"
                name="brand"
                className="mt-2 w-full rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)] px-4 py-3 text-sm"
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
              <label className="text-sm font-semibold text-[color:var(--text-strong)]" htmlFor="model">
                Model
              </label>
              <select
                id="model"
                name="model"
                className="mt-2 w-full rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)] px-4 py-3 text-sm"
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
                <label className="text-sm font-semibold text-[color:var(--text-strong)]" htmlFor="condition">
                  Condition
                </label>
                <select
                  id="condition"
                  name="condition"
                  className="mt-2 w-full rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)] px-4 py-3 text-sm"
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
                <label className="text-sm font-semibold text-[color:var(--text-strong)]" htmlFor="issue">
                  Issue type
                </label>
                <select
                  id="issue"
                  name="issue"
                  className="mt-2 w-full rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)] px-4 py-3 text-sm"
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
                <label className="text-sm font-semibold text-[color:var(--text-strong)]" htmlFor="hours">
                  Approximate usage hours
                </label>
                <select
                  id="hours"
                  name="hours"
                  className="mt-2 w-full rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)] px-4 py-3 text-sm"
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
                <label className="text-sm font-semibold text-[color:var(--text-strong)]" htmlFor="accessories">
                  Accessories
                </label>
                <select
                  id="accessories"
                  name="accessories"
                  className="mt-2 w-full rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)] px-4 py-3 text-sm"
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
              <label className="text-sm font-semibold text-[color:var(--text-strong)]" htmlFor="refurbish">
                Refurbish before listing?
              </label>
              <select
                id="refurbish"
                name="refurbish"
                className="mt-2 w-full rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)] px-4 py-3 text-sm"
                value={formState.refurbish}
                onChange={handleChange}
              >
                <option value="yes">Yes, add refurbishment</option>
                <option value="no">No, list as-is</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-[color:var(--text-strong)]" htmlFor="notes">
                Additional notes
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                placeholder="Tell us about repairs, overclocks, or cosmetic issues."
                className="mt-2 w-full rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)] px-4 py-3 text-sm"
                value={formState.notes}
                onChange={handleChange}
              />
            </div>
          </div>

          <aside className="space-y-6 rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)]/85 p-6 text-sm">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--text-muted)]">Estimated value</p>
              <p className="mt-3 text-3xl font-semibold text-[color:var(--accent-secondary)]">${estimatedValue}</p>
              <p className="mt-2 text-xs text-[color:var(--text-muted)]">
                Final payout is confirmed after diagnostics and refurbishment (if selected).
              </p>
            </div>
            <div className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/70 p-5">
              <h2 className="text-base font-semibold text-[color:var(--text-strong)]">What happens next?</h2>
              <ul className="mt-3 space-y-3 text-xs text-[color:var(--text-base)]">
                <li>• We send prepaid, insured shipping labels.</li>
                <li>• Diagnostics verify condition within 48 hours of arrival.</li>
                <li>• Choose immediate payout or marketplace consignment.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/70 p-5">
              <h2 className="text-base font-semibold text-[color:var(--text-strong)]">Marketplace benefits</h2>
              <ul className="mt-3 space-y-3 text-xs text-[color:var(--text-base)]">
                <li>• GPU Doctor Certified badge boosts buyer confidence.</li>
                <li>• Refurbish add-on includes pads, paste, and fan service.</li>
                <li>• Warranty options available for buyers at checkout.</li>
              </ul>
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-[color:var(--accent-primary)] px-5 py-3 text-sm font-semibold text-[color:var(--surface-950)] shadow-lg shadow-[rgba(61,214,140,0.25)] transition hover:bg-[color:var(--accent-secondary)] hover:text-[color:var(--surface-900)]"
            >
              Request trade-in offer
            </button>
            {submitted ? (
              <p className="text-xs text-[color:var(--accent-secondary)]">
                Thank you! A technician will review your submission and reach out within one business hour.
              </p>
            ) : null}
          </aside>
        </form>
      </section>
    </main>
  )
}

export default SellPage
