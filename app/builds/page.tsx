'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'

import { pcBuilderOptions, builderPresets, type PcComponentOption } from '../_data/site'

const categories = Object.entries(pcBuilderOptions) as Array<[
  keyof typeof pcBuilderOptions,
  PcComponentOption[],
]>

const BuildsPage = () => {
  const [selected, setSelected] = useState(() => {
    const initialEntries = categories.map(([category, options]) => [category, options[0]?.id ?? ''])
    return Object.fromEntries(initialEntries) as Record<keyof typeof pcBuilderOptions, string>
  })

  const selectedOptions = useMemo(() => {
    return categories.reduce((acc, [category, options]) => {
      acc[category] = options.find((option) => option.id === selected[category]) ?? options[0]
      return acc
    }, {} as Record<keyof typeof pcBuilderOptions, PcComponentOption | undefined>)
  }, [selected])

  const totalPrice = useMemo(
    () =>
      Object.values(selectedOptions).reduce((sum, option) => {
        if (!option) {
          return sum
        }
        return sum + option.price
      }, 0),
    [selectedOptions]
  )

  const powerBudget = useMemo(() => {
    const gpuWattage = selectedOptions.gpu?.wattage ?? 0
    const cpuWattage = selectedOptions.cpu?.wattage ?? 0
    const psuCapacity = selectedOptions.psu?.wattage ?? 0
    return { gpuWattage, cpuWattage, psuCapacity }
  }, [selectedOptions])

  const activeCase = selectedOptions.case

  const loadPreset = (presetId: string) => {
    const preset = builderPresets.find((entry) => entry.id === presetId)
    if (!preset) {
      return
    }

    const presetState = { ...selected }
    preset.parts.forEach(({ category, optionId }) => {
      presetState[category] = optionId
    })
    setSelected(presetState)
  }

  const handleSelect = (category: keyof typeof pcBuilderOptions, optionId: string) => {
    setSelected((state) => ({
      ...state,
      [category]: optionId,
    }))
  }

  return (
    <main className="bg-[#07130e] text-emerald-50">
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-28 lg:px-10 xl:px-16">
        <header className="space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight text-emerald-200 sm:text-5xl">Design your GPU build</h1>
          <p className="text-lg text-emerald-50/80">
            Assemble a powerhouse rig by mixing certified new and refurbished components. Compare presets, tweak each part, and
            preview how everything fits inside curated showcase cases.
          </p>
        </header>

        <div className="mt-12 grid gap-10 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8 rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-8">
            <div className="flex flex-wrap gap-3">
              {builderPresets.map((preset) => (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => loadPreset(preset.id)}
                  className="rounded-full border border-emerald-400/60 px-4 py-2 text-xs font-semibold text-emerald-200 hover:border-emerald-300 hover:text-emerald-100"
                >
                  {preset.name}
                </button>
              ))}
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {categories.map(([category, options]) => (
                <div key={category} className="rounded-2xl border border-emerald-500/20 bg-[#091810]/80 p-5">
                  <label className="text-sm font-semibold text-emerald-200" htmlFor={`builder-${category}`}>
                    {titleFromCategory(category)}
                  </label>
                  <select
                    id={`builder-${category}`}
                    value={selected[category]}
                    className="mt-3 w-full rounded-2xl border border-emerald-500/20 bg-[#07130e] px-4 py-3 text-sm text-emerald-50"
                    onChange={(event) => handleSelect(category, event.target.value)}
                  >
                    {options.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name} — ${option.price}
                      </option>
                    ))}
                  </select>
                  {selectedOptions[category]?.notes ? (
                    <p className="mt-3 text-xs text-emerald-50/70">{selectedOptions[category]?.notes}</p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <aside className="flex flex-col gap-6 rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-8">
            <div>
              <h2 className="text-lg font-semibold text-emerald-200">Case preview</h2>
              <div className="mt-4 overflow-hidden rounded-2xl border border-emerald-500/20 bg-[#091810]/80">
                {activeCase?.image ? (
                  <Image
                    src={activeCase.image}
                    alt={activeCase.name}
                    width={720}
                    height={480}
                    className="h-60 w-full object-cover"
                  />
                ) : (
                  <div className="flex h-60 items-center justify-center text-sm text-emerald-50/60">Select a case to preview</div>
                )}
              </div>
              <p className="mt-3 text-sm text-emerald-50/80">
                Visualise your build inside modern airflow-focused chassis. Swap GPUs or radiators to ensure clearance before you
                buy.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-500/20 bg-[#091810]/80 p-5 text-sm text-emerald-50/80">
              <h2 className="text-lg font-semibold text-emerald-200">Build summary</h2>
              <ul className="mt-4 space-y-3">
                {categories.map(([category]) => {
                  const option = selectedOptions[category]
                  return (
                    <li key={category} className="flex items-start justify-between gap-3 text-xs">
                      <span className="font-semibold text-emerald-100">{titleFromCategory(category)}</span>
                      <span className="text-right text-emerald-50/70">{option ? `${option.name} • $${option.price}` : 'Select an option'}</span>
                    </li>
                  )
                })}
              </ul>
              <div className="mt-5 flex items-center justify-between text-sm font-semibold text-emerald-200">
                <span>Total</span>
                <span>${totalPrice.toLocaleString()}</span>
              </div>
            </div>
            <div className="rounded-2xl border border-emerald-500/20 bg-[#0b1f17]/70 p-5 text-xs text-emerald-50/80">
              <p>GPU draw: {powerBudget.gpuWattage}W</p>
              <p className="mt-1">CPU draw: {powerBudget.cpuWattage}W</p>
              <p className="mt-1">PSU capacity: {powerBudget.psuCapacity}W</p>
              <p className="mt-3 text-emerald-100">
                Headroom: {Math.max(powerBudget.psuCapacity - (powerBudget.cpuWattage + powerBudget.gpuWattage + 250), 0)}W
              </p>
              <p className="mt-2 text-emerald-50/70">
                Portal dashboards monitor thermals and recommend upgrades once your build is synced to your account.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                className="rounded-full border border-emerald-400/60 px-5 py-3 text-xs font-semibold text-emerald-100 hover:border-emerald-300 hover:text-emerald-50"
              >
                Export to marketplace cart
              </button>
              <button
                type="button"
                className="rounded-full bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-300 px-5 py-3 text-xs font-semibold text-[#07130e] shadow-lg shadow-emerald-500/30 hover:from-emerald-300 hover:to-teal-200"
              >
                Save build to account
              </button>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}

function titleFromCategory(category: keyof typeof pcBuilderOptions): string {
  switch (category) {
    case 'gpu':
      return 'Graphics card'
    case 'cpu':
      return 'Processor'
    case 'motherboard':
      return 'Motherboard'
    case 'memory':
      return 'Memory'
    case 'storage':
      return 'Storage'
    case 'psu':
      return 'Power supply'
    case 'cooling':
      return 'Cooling'
    case 'case':
      return 'Case'
    default:
      return category
  }
}

export default BuildsPage
