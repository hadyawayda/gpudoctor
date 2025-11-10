import type { ReactNode } from 'react'

const PageHeader = ({
  title,
  description,
  actions,
}: {
  title: string
  description?: string
  actions?: ReactNode
}) => {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
      <header className="space-y-5 text-balance">
        <h1 className="text-4xl font-semibold tracking-tight text-primary-200 sm:text-5xl">{title}</h1>
        {description ? <p className="text-lg text-slate-100/80">{description}</p> : null}
        {actions ? <div className="pt-6">{actions}</div> : null}
      </header>
    </section>
  )
}

export default PageHeader
