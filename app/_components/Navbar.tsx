'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import CartButton from './CartButton'
import Menu from './HamMenu'
import { NAV_LINKS } from './navigation'

import gpuDoctorLogo from '@/public/Images/gpu-doctor-logo.svg'
import mobileCartIcon from '@/public/Images/Cart-black.svg'

import { catalogProducts, marketplaceListings } from '../_data/site'

import './Navbar.css'

type SearchResult = {
  id: string
  name: string
  href: string
  brand: string
  price: string
}

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement | null>(null)
  const modalRef = useRef<HTMLDivElement | null>(null)

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
    if (!isSearchOpen) {
      setQuery('')
      return
    }

    const { body } = document
    if (body) {
      body.style.overflow = 'hidden'
    }

    const timer = window.setTimeout(() => {
      inputRef.current?.focus()
    }, 120)

    return () => {
      window.clearTimeout(timer)
      if (body) {
        body.style.overflow = ''
      }
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

    const handlePointer = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeydown)
    window.addEventListener('mousedown', handlePointer)

    return () => {
      window.removeEventListener('keydown', handleKeydown)
      window.removeEventListener('mousedown', handlePointer)
    }
  }, [isSearchOpen])

  const searchResults = useMemo<SearchResult[]>(() => {
    const trimmed = query.trim().toLowerCase()
    if (trimmed.length < 2) {
      return []
    }

    const productMatches = catalogProducts
      .filter((product) => {
        const haystack = `${product.name} ${product.brand} ${product.model} ${product.category}`.toLowerCase()
        return haystack.includes(trimmed)
      })
      .map<SearchResult>((product) => ({
        id: product.slug,
        name: product.name,
        href: `/products/${product.slug}`,
        brand: product.brand,
        price: `$${product.price.toLocaleString()}`,
      }))

    const marketplaceMatches = marketplaceListings
      .filter((listing) => {
        const haystack = `${listing.title} ${listing.brand} ${listing.model}`.toLowerCase()
        return haystack.includes(trimmed)
      })
      .map<SearchResult>((listing) => ({
        id: listing.id,
        name: listing.title,
        href: `/marketplace#${listing.id}`,
        brand: listing.brand,
        price: listing.price,
      }))

    return [...productMatches, ...marketplaceMatches].slice(0, 12)
  }, [query])

  return (
    <header className="header animate">
      <nav className="navbar px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
        <Link className="flex items-center" href="/">
          <Image className="image-container" src={gpuDoctorLogo} alt="GPU Doctor" priority />
          <span className="ml-3 hidden text-lg font-semibold tracking-tight text-[color:var(--text-strong)] sm:inline">
            GPU Doctor
          </span>
        </Link>

        <div className="wrap-1" />

        <div className="menu-links">
          {NAV_LINKS.map(({ href, label }) => (
            <div key={href} className="flex items-center mr-6 last:mr-0">
              <Link className="nav-link whitespace-nowrap" href={href}>
                {label}
              </Link>
            </div>
          ))}
        </div>

        <div className="relative h-24 flex items-center justify-end">
          <button
            aria-label="Search site"
            className="search mr-5 md:mr-7 lg:mr-0"
            type="button"
            onClick={() => setIsSearchOpen(true)}
          >
            <svg className="search-logo" viewBox="0 0 24 24" role="img" aria-hidden="true">
              <path
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5Zm0-1.5a8.25 8.25 0 1 1 0 16.5 8.25 8.25 0 0 1 0-16.5Zm11.03 16.72-5.2-5.2-1.06 1.06 5.2 5.2 1.06-1.06Z"
              />
            </svg>
          </button>

          <button className="w-10 h-10 mr-5 md:mr-7 lg:hidden flex justify-center items-center" type="button">
            <Image className="w-5 h-5" src={mobileCartIcon} alt="Cart" />
            <div className="w-0">
              <div className="relative flex justify-center items-center z-10 w-2 h-2 font-bold -top-3 -left-3 cart-counter-small">
                99
              </div>
            </div>
          </button>

          <div className="sign-in-wrapper xl:border-l border-[color:var(--border-subtle)] xl:ml-8">
            <Link className="sign-in-link lg:pl-5 xl:pl-10" href="/login">
              Sign in
            </Link>
          </div>

          <div className="flex lg:hidden">
            <Menu />
          </div>

          <div className="hidden lg:flex justify-start lg:ml-6 xl:ml-10">
            <CartButton />
          </div>
        </div>
      </nav>

      {isSearchOpen ? (
        <div className="search-modal">
          <div className="search-backdrop" />
          <div className="search-content" ref={modalRef}>
            <div className="search-header">
              <h2>Search GPU Doctor</h2>
              <button type="button" onClick={() => setIsSearchOpen(false)} aria-label="Close search">
                ×
              </button>
            </div>
            <div className="search-field">
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search GPUs, services, accessories..."
                aria-label="Search"
              />
            </div>
            <div className="search-results" role="list">
              {query.trim().length < 2 ? (
                <p className="search-placeholder">Start typing to see results.</p>
              ) : searchResults.length === 0 ? (
                <p className="search-placeholder">No results found. Try another term.</p>
              ) : (
                searchResults.map((result) => (
                  <Link
                    key={result.id}
                    href={result.href}
                    className="search-result"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    <span className="search-result__name">{result.name}</span>
                    <span className="search-result__meta">
                      <span>{result.brand}</span>
                      <span>{result.price}</span>
                    </span>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
