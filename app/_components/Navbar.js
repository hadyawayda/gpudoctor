'use client'

import CartButton from '../_components/CartButton'
import Link from 'next/link'
import Image from 'next/image'
import './Navbar.css'
import { useEffect, useState } from 'react'
import Menu from './HamMenu'
import SearchModal from './SearchModal'

// Add Dark Mode Toggle Button
// Add Sell Your GPU section
// Add Shopping Bag on Mobile Phone screen
// Center Menu Container
// Add User Panel with List of Devices for repair, and ability to track status of each one seperately,
// with information about the repair upon user request, and notifications when status updates happen.

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        }
      })
    })
    document.querySelectorAll('.animate').forEach((el) => observer.observe(el))
  }, [])

  return (
    <header className="header animate">
      <nav className="navbar px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
        <Link className="ml-4" href="/" alt="main">
          <Image
            className="image-container"
            alt="gpu logo"
            src={require('../../public/Images/gpu.jpg')}
          />
        </Link>
        <div className="wrap-1"></div>
        <div className="menu-links">
          <Link className="mr-8" href="/pricing">
            Pricing
          </Link>
          <Link className="mr-8" href="/services">
            Services
          </Link>
          {/**add menu on hover*/}
          <Link href="/store" className="mr-8">
            Store
          </Link>
          <Link className="whitespace-nowrap mr-8" href="/mail-in">
            Mail-In Repair
          </Link>
          <Link className="whitespace-nowrap" href="/sell">
            Sell Your GPU
          </Link>
        </div>
        <div className="relative h-24 flex items-center justify-end">
          <button
            aria-label="search"
            className="search mr-6 md:mr-8 lg:mr-0"
            type="button"
            onClick={() => setIsSearchOpen(true)}>
            {/**add search pop-up with blurred background and full functionality*/}
            <svg className="search-logo">
              <path d="M20.47 21.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-9.97-4.28a6.75 6.75 0 0 1-6.75-6.75h-1.5a8.25 8.25 0 0 0 8.25 8.25v-1.5ZM3.75 10.5a6.75 6.75 0 0 1 6.75-6.75v-1.5a8.25 8.25 0 0 0-8.25 8.25h1.5Zm6.75-6.75a6.75 6.75 0 0 1 6.75 6.75h1.5a8.25 8.25 0 0 0-8.25-8.25v1.5Zm11.03 16.72-5.196-5.197-1.061 1.06 5.197 5.197 1.06-1.06Zm-4.28-9.97c0 1.864-.755 3.55-1.977 4.773l1.06 1.06A8.226 8.226 0 0 0 18.75 10.5h-1.5Zm-1.977 4.773A6.727 6.727 0 0 1 10.5 17.25v1.5a8.226 8.226 0 0 0 5.834-2.416l-1.061-1.061Z"></path>
            </svg>
          </button>
          <button className="w-10 h-10 mr-6 md:mr-8 lg:hidden flex justify-center items-center">
            <Image
              className="w-5 h-5"
              alt="cart logo"
              src={require('../../public/Images/Cart-black.svg').default}
            />
            <div className="w-0">
              <div className="relative flex justify-center items-center z-1 w-2 h-2 font-bold -top-3 -left-3 cart-counter-small">
                99
              </div>
            </div>
          </button>
          <div className="sign-in-wrapper xl:border-l border-slate-300 xl:ml-8">
            <Link className="sign-in-link lg:pl-5 xl:pl-10" href="/login">
              Sign in
            </Link>
            {/**make sign in wrapper scalable for longer usernames, add welcome username, and also make sign functionality (popup?)*/}
          </div>
          <div className="flex lg:hidden">
            <Menu />
          </div>
          {/**Add Cart sub-menu with items count, total price, background blur, scrolling, deleting and increasing quantity functionality also with empty cart button and checkout button, also add total price, and stock count notification in case stock is low */}
          <div className="hidden lg:flex justify-start lg:ml-6 xl:ml-10">
            <CartButton />
          </div>
        </div>
      </nav>
      
      <SearchModal isOpen={isSearchOpen} closeModal={() => setIsSearchOpen(false)} />
    </header>
  )
}

export default Navbar
