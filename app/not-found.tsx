import Link from 'next/link'

import PageHeader from '@/app/_components/PageHeader'

const NotFoundPage = () => {
  return (
    <main>
      <PageHeader
        title="Page not found"
        description="The page you are looking for doesn’t exist. Double-check the URL or head back to the home page."
        actions={
          <Link
            href="/"
            className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
          >
            Return home
          </Link>
        }
      />
    </main>
  )
}

export default NotFoundPage
