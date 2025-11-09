import type { Metadata } from 'next'
import Link from 'next/link'

import PageHeader from '@/app/_components/PageHeader'

export const metadata: Metadata = {
  title: 'Sign In',
}

const LoginPage = () => {
  return (
    <main className="bg-[#07130e] text-emerald-50">
      <PageHeader
        title="Sign in"
        description="Access your dashboard to follow repairs, manage shipping preferences, and review invoices."
      />
      <section className="mx-auto max-w-md px-6 pb-24 lg:px-8">
        <form className="space-y-5 rounded-3xl border border-emerald-500/20 bg-[#0b1f17]/70 p-8 text-sm text-emerald-50/80">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-semibold text-emerald-200">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-2xl border border-emerald-500/20 bg-[#091810] px-4 py-3 text-sm text-emerald-50 placeholder:text-emerald-200/40"
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
              className="w-full rounded-2xl border border-emerald-500/20 bg-[#091810] px-4 py-3 text-sm text-emerald-50 placeholder:text-emerald-200/40"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 hover:from-emerald-300 hover:via-cyan-300 hover:to-sky-400"
          >
            Continue
          </button>
          <p className="text-center text-xs text-emerald-50/60">
            Need an account?{' '}
            <Link className="font-semibold text-emerald-100 hover:text-emerald-50" href="/account">
              Request access
            </Link>
          </p>
        </form>
      </section>
    </main>
  )
}

export default LoginPage
