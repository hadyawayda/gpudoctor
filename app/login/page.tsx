import type { Metadata } from 'next'
import Link from 'next/link'

import PageHeader from '@/app/shared/PageHeader'

export const metadata: Metadata = {
  title: 'Sign In',
}

const LoginPage = () => {
  return (
    <main className="bg-background-base text-slate-100">
      <PageHeader
        title="Sign in"
        description="Access your dashboard to follow repairs, manage shipping preferences, and review invoices."
      />
      <section className="mx-auto max-w-md px-6 pb-24 lg:px-8">
        <form className="space-y-5 rounded-3xl border border-primary-500/20 bg-background-section/70 p-8 text-sm text-slate-300">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-semibold text-primary-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-2xl border border-primary-500/20 bg-background-card px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-semibold text-primary-300">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full rounded-2xl border border-primary-500/20 bg-background-card px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-primary-500 to-secondary-600 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-primary-500/30 hover:from-primary-400 hover:to-secondary-500"
          >
            Continue
          </button>
          <p className="text-center text-xs text-slate-500">
            Need an account?{' '}
            <Link className="font-semibold text-primary-200 hover:text-slate-100" href="/account">
              Request access
            </Link>
          </p>
        </form>
      </section>
    </main>
  )
}

export default LoginPage
