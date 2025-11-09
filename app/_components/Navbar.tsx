'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import CartButton from './CartButton'
import Menu from './HamMenu'
import { NAV_LINKS } from './navigation'

import gpuLogo from '@/public/Images/gpu.jpg'
import mobileCartIcon from '@/public/Images/Cart-black.svg'

import './Navbar.css'

const Navbar = () => {
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

  return (
    <header className="header animate">
      <nav className="navbar px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
        <Link className="ml-4" href="/">
          <Image className="image-container" src={gpuLogo} alt="GPU Doctor" priority />
        </Link>

        <div className="wrap-1" />

        <div className="menu-links">
          {NAV_LINKS.map(({ href, label, badge }) => (
            <div key={href} className="flex items-center mr-8 last:mr-0">
              <Link className="whitespace-nowrap" href={href}>
                {label}
              </Link>
              {badge ? (
                <span className="ml-2 rounded-full py-0.5 px-1.5 text-white text-xs leading-4">
                  {badge}
                </span>
              ) : null}
            </div>
          ))}
        </div>

        <div className="relative h-24 flex items-center justify-end">
          <button aria-label="search" className="search mr-6 md:mr-8 lg:mr-0" type="button">
            <svg className="search-logo" viewBox="0 0 24 24" role="img" aria-hidden="true">
              <path d="M20.47 21.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-9.97-4.28a6.75 6.75 0 0 1-6.75-6.75h-1.5a8.25 8.25 0 0 0 8.25 8.25v-1.5ZM3.75 10.5a6.75 6.75 0 0 1 6.75-6.75v-1.5a8.25 8.25 0 0 0-8.25 8.25h1.5Zm6.75-6.75a6.75 6.75 0 0 1 6.75 6.75h1.5a8.25 8.25 0 0 0-8.25-8.25v1.5Zm11.03 16.72-5.196-5.197-1.061 1.06 5.197 5.197 1.06-1.06Zm-4.28-9.97c0 1.864-.755 3.55-1.977 4.773l1.06 1.06A8.226 8.226 0 0 0 18.75 10.5h-1.5Zm-1.977 4.773A6.727 6.727 0 0 1 10.5 17.25v1.5a8.226 8.226 0 0 0 5.834-2.416l-1.061-1.061Z" />
            </svg>
          </button>

          <button className="w-10 h-10 mr-6 md:mr-8 lg:hidden flex justify-center items-center" type="button">
            <Image className="w-5 h-5" src={mobileCartIcon} alt="Cart" />
            <div className="w-0">
              <div className="relative flex justify-center items-center z-10 w-2 h-2 font-bold -top-3 -left-3 cart-counter-small">
                99
              </div>
            </div>
          </button>

          <div className="sign-in-wrapper xl:border-l border-slate-300 xl:ml-8">
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
    </header>
  )
}

export default Navbar
