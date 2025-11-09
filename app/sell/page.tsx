'use client'

import { useMemo, useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'

import { catalogProducts } from '../_data/site'

const gpuOptions = catalogProducts.filter((product) => product.category === 'GPU')
const uniqueBrands = Array.from(new Set(gpuOptions.map((product) => product.brand))).sort()
const conditionOptions = ['Mint', 'Lightly used', 'Needs repair', 'Not working'] as const
const issueTypes = ['Thermal throttling', 'Artifacts', 'Power failure', 'No display', 'Driver instability', 'Other'] as const
const usageRanges = ['0-500', '500-1000', '1000-2000', '2000+'] as const
const accessoryOptions = ['original-box', 'card-only', 'extras'] as const
const refurbishChoices = ['yes', 'no'] as const

type ConditionOption = (typeof conditionOptions)[number]
type IssueType = (typeof issueTypes)[number]
type UsageRange = (typeof usageRanges)[number]
type AccessoryOption = (typeof accessoryOptions)[number]
type RefurbishChoice = (typeof refurbishChoices)[number]

type SellFormState = {
  brand: string
  model: string
  condition: ConditionOption
  issue: IssueType
  hours: UsageRange
  accessories: AccessoryOption
  refurbish: RefurbishChoice
  notes: string
}

const SellPage = () => {
  const [formState, setFormState] = useState<SellFormState>({
    brand: uniqueBrands[0] ?? 'NVIDIA',
    model: gpuOptions[0]?.model ?? 'Unknown',
    condition: conditionOptions[0],
    issue: issueTypes[0],
    hours: usageRanges[0],
    accessories: accessoryOptions[0],
    refurbish: refurbishChoices[0],
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

    setFormState((state) => {
      const key = name as keyof SellFormState
      const nextState = {
        ...state,
        [key]: value,
      } as SellFormState

      if (key === 'brand') {
        nextState.model = gpuOptions.find((product) => product.brand === value)?.model ?? state.model
      }

      return nextState
    })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="bg-slate-950 text-white">
      <section className="mx-auto max-w-5xl px-6 pb-24 pt-28 lg:px-10 xl:px-16">
        <header className="space-y-6 text-balance">
          <h1 className="text-4xl font-semibold tracking-tight text-emerald-300 sm:text-5xl">Sell or consign your GPU</h1>
          <p className="text-lg text-slate-200">
            Tell us about your graphics card and choose whether you want a refurbish package. We&apos;ll generate an instant trade-in
            estimate, schedule a pickup, and list it on the GPU Doctor marketplace once it passes validation.
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="mt-12 grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div className="space-y-6">
            <div>
              <label className="text-sm font-semibold text-emerald-200" htmlFor="brand">
                GPU brand
              </label>
              <select
                id="brand"
                name="brand"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white"
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
              <label className="text-sm font-semibold text-emerald-200" htmlFor="model">
                Model
              </label>
              <select
                id="model"
                name="model"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white"
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
                <label className="text-sm font-semibold text-emerald-200" htmlFor="condition">
                  Condition
                </label>
                <select
                  id="condition"
                  name="condition"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white"
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
                <label className="text-sm font-semibold text-emerald-200" htmlFor="issue">
                  Issue type
                </label>
                <select
                  id="issue"
                  name="issue"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white"
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
                <label className="text-sm font-semibold text-emerald-200" htmlFor="hours">
                  Approximate usage hours
                </label>
                <select
                  id="hours"
                  name="hours"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white"
                  value={formState.hours}
                  onChange={handleChange}
                >
                  {usageRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold text-emerald-200" htmlFor="accessories">
                  Accessories
                </label>
                <select
                  id="accessories"
                  name="accessories"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white"
                  value={formState.accessories}
                  onChange={handleChange}
                >
                  {accessoryOptions.map((option) => (
                    <option key={option} value={option}>
                      {option === 'original-box'
                        ? 'Original box & cables'
                        : option === 'card-only'
                          ? 'GPU only'
                          : 'Includes water block / extras'}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold text-emerald-200" htmlFor="refurbish">
                Refurbish before listing?
              </label>
              <select
                id="refurbish"
                name="refurbish"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white"
                value={formState.refurbish}
                onChange={handleChange}
              >
                {refurbishChoices.map((choice) => (
                  <option key={choice} value={choice}>
                    {choice === 'yes' ? 'Yes – add GPU Doctor refurbish package' : 'No – list as-is'}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-emerald-200" htmlFor="notes">
                Additional details
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                placeholder="List any modifications, cooling swaps, or previous repairs."
                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-500"
                value={formState.notes}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:from-emerald-300 hover:via-cyan-300 hover:to-sky-400"
            >
              Get my trade-in estimate
            </button>
          </div>
          <aside className="flex flex-col justify-between rounded-3xl border border-emerald-500/10 bg-slate-950/60 p-6 text-sm text-slate-200">
            <div>
              <h2 className="text-lg font-semibold text-emerald-200">Estimated payout</h2>
              <p className="mt-3 text-3xl font-semibold text-white">${estimatedValue}</p>
              <p className="mt-2 text-xs text-slate-300">
                Final payout confirmed after diagnostics. Refurbish packages can increase value up to 15%.
              </p>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-slate-200">
                <p>• Free insured pickup within 24 hours in supported cities.</p>
                <p className="mt-2">• Instant marketplace listing once refurbished or validated.</p>
                <p className="mt-2">• Track status and offers directly from your GPU Doctor dashboard.</p>
              </div>
              {submitted ? (
                <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-xs text-emerald-200">
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
