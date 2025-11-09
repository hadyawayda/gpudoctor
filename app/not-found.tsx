import Link from 'next/link'

import PageHeader from '@/app/shared/PageHeader'

const NotFoundPage = () => {
  return (
    <main>
      <PageHeader
        title="Page not found"
        description="The page you are looking for doesn’t exist. Double-check the URL or head back to the home page."
        actions={
          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-300 px-4 py-2 text-sm font-semibold text-[#07130e] shadow-lg shadow-emerald-500/30 hover:from-emerald-300 hover:to-teal-200"
          >
            Return home
          </Link>
        }
      />
    </main>
  )
}

export default NotFoundPage
