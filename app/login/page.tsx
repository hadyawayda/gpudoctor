import type { Metadata } from 'next'
import Link from 'next/link'

import PageHeader from '@/app/_components/PageHeader'

export const metadata: Metadata = {
  title: 'Sign In',
}

const LoginPage = () => {
  return (
    <main className="bg-[color:var(--surface-950)] text-[color:var(--text-base)]">
      <PageHeader
        title="Sign in"
        description="Access your dashboard to follow repairs, manage shipping preferences, and review invoices."
      />
      <section className="mx-auto max-w-md px-6 pb-24 lg:px-8">
        <form className="space-y-5 rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-900)]/70 p-8 text-sm backdrop-blur">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-semibold text-[color:var(--text-strong)]">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)] px-4 py-3 text-sm"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-semibold text-[color:var(--text-strong)]">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-950)] px-4 py-3 text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-[color:var(--accent-primary)] px-6 py-3 text-sm font-semibold text-[color:var(--surface-950)] shadow-lg shadow-[rgba(61,214,140,0.25)] hover:bg-[color:var(--accent-secondary)] hover:text-[color:var(--surface-900)]"
          >
            Continue
          </button>
          <p className="text-center text-xs text-[color:var(--text-muted)]">
            Need an account?{' '}
            <Link className="font-semibold text-[color:var(--accent-secondary)] hover:text-[color:var(--accent-secondary)]/80" href="/portal">
              Request access
            </Link>
          </p>
        </form>
      </section>
    </main>
  )
}

export default LoginPage
