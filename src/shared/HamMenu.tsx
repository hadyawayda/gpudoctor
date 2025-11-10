'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

import { NAV_LINKS } from './navigation'
import './HamburgerMenuLogo.css'

const HamMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const { body } = document
    if (!body) {
      return
    }

    body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    function handleResize() {
      setIsOpen(false)
    }

    function handleKeydown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('keydown', handleKeydown)
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('keydown', handleKeydown)
    }
  }, [])

  return (
    <>
      <button
        type="button"
        aria-label="Open navigation menu"
        className={`menu-btn flex justify-center${isOpen ? ' open' : ''}`}
        onClick={() => setIsOpen(true)}
      >
        <span className="menu-btn__burger" />
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close navigation menu"
            className="absolute inset-0 h-full w-full bg-background-base/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute inset-0 flex items-start justify-end">
            <div className="min-h-full w-[min(20rem,calc(100vw-2.5rem))] bg-background-base text-slate-100 shadow-2xl ring-1 ring-primary-500/20">
              <div className="flex items-center justify-between border-b border-primary-500/20 px-6 py-5">
                <span className="text-base font-semibold">Menu</span>
                <button
                  type="button"
                  className="menu-btn open"
                  aria-label="Close navigation menu"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="menu-btn__burger" />
                </button>
              </div>

              <nav className="px-6 py-6 text-base leading-7 text-slate-100/80">
                <ul className="space-y-4">
                  {NAV_LINKS.map(({ href, label, badge }) => (
                    <li key={href}>
                      <Link
                        className="flex items-center justify-between font-semibold"
                        href={href}
                        onClick={() => setIsOpen(false)}
                      >
                        <span>{label}</span>
                        {badge ? (
                          <span className="ml-3 rounded-full bg-secondary-500/20 px-2 py-0.5 text-xs text-primary-200">
                            {badge}
                          </span>
                        ) : null}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 space-y-4 border-t border-primary-500/20 pt-6">
                  <Link className="block font-semibold" href="/login" onClick={() => setIsOpen(false)}>
                    Sign in
                  </Link>
                  <Link
                    className="inline-flex w-full justify-center rounded-full bg-gradient-to-r from-primary-500 to-secondary-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-primary-500/30 hover:from-primary-400 hover:to-secondary-500"
                    href="/sell"
                    onClick={() => setIsOpen(false)}
                  >
                    Sell your GPU
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default HamMenu
