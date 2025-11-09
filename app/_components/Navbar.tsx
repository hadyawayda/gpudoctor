'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import CartButton from './CartButton'
import Menu from './HamMenu'
import { NAV_LINKS } from './navigation'

import logo from '@/public/Images/gpu-doctor-logo.svg'
import mobileCartIcon from '@/public/Images/Cart-black.svg'

import {
  catalogProducts,
  marketplaceListings,
  serviceCatalog,
} from '../_data/site'

import './Navbar.css'

type SearchItem = {
  id: string
  name: string
  href: string
  type: 'Service' | 'Store' | 'Marketplace'
  brand?: string
  priceLabel?: string
}

const SEARCH_INDEX: SearchItem[] = [
  ...serviceCatalog.map((service) => ({
    id: `service-${service.name}`,
    name: service.name,
    href: '/services',
    type: 'Service' as const,
    brand: service.turnaround,
    priceLabel: service.price,
  })),
  ...catalogProducts.map((product) => ({
    id: `store-${product.slug}`,
    name: product.name,
    href: `/products/${product.slug}`,
    type: 'Store' as const,
    brand: product.brand,
    priceLabel: `$${product.price.toLocaleString()}`,
  })),
  ...marketplaceListings.map((listing) => ({
    id: `marketplace-${listing.id}`,
    name: listing.title,
    href: `/marketplace?highlight=${listing.id}`,
    type: 'Marketplace' as const,
    brand: listing.brand,
    priceLabel: listing.price,
  })),
]

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.animate'))
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        }
      })
    })

    elements.forEach((element) => observer.observe(element))

    return () => {
      elements.forEach((element) => observer.unobserve(element))
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (isSearchOpen) {
      inputRef.current?.focus()
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isSearchOpen])

  useEffect(() => {
    if (!isSearchOpen) {
      return
    }

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsSearchOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeydown)

    return () => window.removeEventListener('keydown', handleKeydown)
  }, [isSearchOpen])

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    const filtered = normalized
      ? SEARCH_INDEX.filter((item) => {
          const haystack = `${item.name} ${item.brand ?? ''}`.toLowerCase()
          return haystack.includes(normalized)
        })
      : SEARCH_INDEX

    return filtered.slice(0, 8)
  }, [query])

  const closeSearch = () => {
    setIsSearchOpen(false)
    setQuery('')
  }

  return (
    <header className="header animate">
      <nav className="navbar px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
        <Link className="flex items-center" href="/">
          <Image className="image-container" src={logo} alt="GPU Doctor" priority />
        </Link>

        <div className="menu-links">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} className="menu-link-item" href={href}>
              {label}
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          <button
            aria-label="Search the site"
            className="search"
            type="button"
            onClick={() => setIsSearchOpen(true)}
          >
            <svg className="search-logo" viewBox="0 0 24 24" role="img" aria-hidden="true">
              <path d="M20.47 21.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-9.97-4.28a6.75 6.75 0 0 1-6.75-6.75h-1.5a8.25 8.25 0 0 0 8.25 8.25v-1.5ZM3.75 10.5a6.75 6.75 0 0 1 6.75-6.75v-1.5a8.25 8.25 0 0 0-8.25 8.25h1.5Zm6.75-6.75a6.75 6.75 0 0 1 6.75 6.75h1.5a8.25 8.25 0 0 0-8.25-8.25v1.5Zm11.03 16.72-5.196-5.197-1.061 1.06 5.197 5.197 1.06-1.06Zm-4.28-9.97c0 1.864-.755 3.55-1.977 4.773l1.06 1.06A8.226 8.226 0 0 0 18.75 10.5h-1.5Zm-1.977 4.773A6.727 6.727 0 0 1 10.5 17.25v1.5a8.226 8.226 0 0 0 5.834-2.416l-1.061-1.061Z" />
            </svg>
          </button>

          <button className="mobile-cart" type="button" aria-label="Open cart">
            <Image className="w-5 h-5" src={mobileCartIcon} alt="Cart" />
            <span className="cart-counter-small">3</span>
          </button>

          <div className="sign-in-wrapper">
            <Link className="sign-in-link" href="/login">
              Sign in
            </Link>
          </div>

          <div className="hidden lg:flex">
            <CartButton />
          </div>

          <div className="flex lg:hidden">
            <Menu />
          </div>
        </div>
      </nav>

      {isSearchOpen ? (
        <div className="search-modal">
          <button type="button" className="search-backdrop" onClick={closeSearch} aria-label="Close search" />
          <div className="search-panel">
            <div className="search-panel-inner">
              <div className="search-header">
                <h2>Search GPU Doctor</h2>
                <button type="button" onClick={closeSearch} aria-label="Close search panel">
                  ✕
                </button>
              </div>
              <div className="search-input">
                <label className="sr-only" htmlFor="site-search">
                  Search terms
                </label>
                <input
                  id="site-search"
                  ref={inputRef}
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search services, GPUs, or marketplace listings"
                  autoComplete="off"
                />
              </div>
              <div className="search-results" role="listbox">
                {results.length === 0 ? (
                  <p className="no-results">No results found. Try another term or browse the store.</p>
                ) : (
                  <ul>
                    {results.map((item) => (
                      <li key={item.id}>
                        <Link href={item.href} onClick={closeSearch}>
                          <div className="result-heading">
                            <span className="result-type">{item.type}</span>
                            <span className="result-name">{item.name}</span>
                          </div>
                          <div className="result-meta">
                            <span>{item.brand ?? 'GPU Doctor'}</span>
                            <span>{item.priceLabel ?? ''}</span>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
