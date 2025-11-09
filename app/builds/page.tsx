'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
    [selectedOptions],
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
    <main className="bg-[color:var(--surface-950)] text-[color:var(--text-base)]">
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-28 lg:px-10 xl:px-16">
        <header className="space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight text-[color:var(--text-strong)] sm:text-5xl">Build your PC</h1>
          <p className="text-lg text-[color:var(--text-muted)]">
            Assemble a powerhouse rig by mixing certified new and refurbished components. Compare presets, adjust parts, and
            generate a checklist that you can share with the GPU Doctor team for installation or maintenance planning.
          </p>
        </header>

        <div className="mt-12 grid gap-10 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8 rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/75 p-8 backdrop-blur">
            <div className="flex flex-wrap gap-3">
              {builderPresets.map((preset) => (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => loadPreset(preset.id)}
                  className="rounded-full border border-[color:var(--accent-secondary)]/60 px-4 py-2 text-xs font-semibold text-[color:var(--accent-secondary)] hover:border-[color:var(--accent-secondary)]"
                >
                  {preset.name}
                </button>
              ))}
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {categories.map(([category, options]) => (
                <div key={category} className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)]/85 p-5">
                  <label className="text-sm font-semibold text-[color:var(--text-strong)]" htmlFor={`builder-${category}`}>
                    {titleFromCategory(category)}
                  </label>
                  <select
                    id={`builder-${category}`}
                    value={selected[category]}
                    className="mt-3 w-full rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)] px-4 py-3 text-sm"
                    onChange={(event) => handleSelect(category, event.target.value)}
                  >
                    {options.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name} — ${option.price}
                      </option>
                    ))}
                  </select>
                  {selectedOptions[category]?.notes ? (
                    <p className="mt-3 text-xs text-[color:var(--text-muted)]">{selectedOptions[category]?.notes}</p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <aside className="flex flex-col gap-6 rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)]/85 p-8">
            <div>
              <h2 className="text-lg font-semibold text-[color:var(--text-strong)]">Case preview</h2>
              <div className="mt-4 overflow-hidden rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/70">
                {activeCase?.image ? (
                  <Image src={activeCase.image} alt={activeCase.name} width={640} height={480} className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-48 items-center justify-center text-sm text-[color:var(--text-muted)]">Select a case</div>
                )}
              </div>
              <p className="mt-3 text-xs text-[color:var(--text-muted)]">{activeCase?.notes}</p>
            </div>
            <div className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/70 p-6 text-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--text-muted)]">Estimated total</p>
              <p className="mt-2 text-2xl font-semibold text-[color:var(--accent-secondary)]">${totalPrice.toLocaleString()}</p>
              <p className="mt-3 text-xs text-[color:var(--text-base)]">
                Share this configuration with a technician to bundle installation, refurbishment, or maintenance coverage.
              </p>
            </div>
            <div className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/70 p-6 text-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--text-muted)]">Power budget</p>
              <ul className="mt-2 space-y-2 text-xs text-[color:var(--text-base)]">
                <li>GPU power draw: {powerBudget.gpuWattage} W</li>
                <li>CPU power draw: {powerBudget.cpuWattage} W</li>
                <li>PSU capacity: {powerBudget.psuCapacity} W</li>
              </ul>
              {powerBudget.psuCapacity > 0 ? (
                <p className="mt-3 text-xs text-[color:var(--accent-secondary)]">
                  {(powerBudget.psuCapacity - (powerBudget.gpuWattage + powerBudget.cpuWattage)).toFixed(0)} W of headroom remaining.
                </p>
              ) : null}
            </div>
            <Link
              href="/portal"
              className="inline-flex items-center justify-center rounded-full border border-[color:var(--accent-secondary)]/60 px-5 py-3 text-xs font-semibold text-[color:var(--accent-secondary)] hover:border-[color:var(--accent-secondary)]"
            >
              Save this build to the portal
            </Link>
          </aside>
        </div>
      </section>
    </main>
  )
}

function titleFromCategory(category: keyof typeof pcBuilderOptions) {
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
