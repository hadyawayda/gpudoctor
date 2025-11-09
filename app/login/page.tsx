import type { Metadata } from 'next'
import Link from 'next/link'

import PageHeader from '@/app/_components/PageHeader'

export const metadata: Metadata = {
  title: 'Sign In',
}

const LoginPage = () => {
  return (
    <main className="bg-slate-950 text-white">
      <PageHeader
        title="Sign in"
        description="Access your dashboard to follow repairs, manage shipping preferences, and review invoices."
      />
      <section className="mx-auto max-w-md px-6 pb-24 lg:px-8">
        <form className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-8 text-sm text-slate-200 backdrop-blur">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-semibold text-emerald-200">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-semibold text-emerald-200">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-500"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 hover:from-emerald-300 hover:via-cyan-300 hover:to-sky-400"
          >
            Continue
          </button>
          <p className="text-center text-xs text-slate-400">
            Need an account?{' '}
            <Link className="font-semibold text-emerald-200 hover:text-emerald-100" href="/account">
              Request access
            </Link>
          </p>
        </form>
      </section>
    </main>
  )
}

export default LoginPage
