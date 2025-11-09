'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import TrashIcon from './TrashIcon'

import cartIcon from '@/public/Images/Cart.svg'

type CartItem = {
  id: string
  name: string
  href: string
  description: string
  price: number
  quantity: number
}

const DEFAULT_ITEMS: CartItem[] = [
  {
    id: '1',
    name: 'Founders Edition GPU Repair',
    href: '#',
    description: 'Comprehensive diagnostics and repair for flagship GPUs.',
    price: 1048.99,
    quantity: 2,
  },
  {
    id: '2',
    name: 'Thermal Pad Replacement',
    href: '#',
    description: 'Premium thermal materials and installation service.',
    price: 231,
    quantity: 3,
  },
  {
    id: '3',
    name: 'Performance Benchmark',
    href: '#',
    description: 'Full synthetic and in-game benchmarking report.',
    price: 17.4,
    quantity: 1,
  },
]

const CartButton = () => {
  const [items, setItems] = useState<CartItem[]>(DEFAULT_ITEMS)
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const subtotal = useMemo(
    () => Number(items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)),
    [items]
  )

  const removeItem = (id: string) => {
    setItems((previous) => previous.filter((item) => item.id !== id))
  }

  const closeOnOutsideClick = useCallback((event: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      setOpen(false)
    }
  }, [])

  const closeOnEscape = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setOpen(false)
    }
  }, [])

  useEffect(() => {
    if (!open) {
      return
    }

    document.addEventListener('mousedown', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)

    return () => {
      document.removeEventListener('mousedown', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [closeOnEscape, closeOnOutsideClick, open])

  return (
    <div className="relative flex justify-end" ref={containerRef}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="group flex items-center rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-500 px-4 py-2 font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:from-emerald-300 hover:via-cyan-300 hover:to-sky-400"
      >
        <span className="tracking-tight">Cart</span>
        <span className="ml-3 block">
          <Image className="cart-logo" alt="cart" src={cartIcon} />
        </span>
      </button>
      <span className="w-0">
        <span className="relative -left-3.5 z-0 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-300 text-xs font-semibold text-slate-900">
          {items.length >= 99 ? 99 : items.length}
        </span>
      </span>

      {open ? (
        <div className="absolute right-0 top-14 w-[22rem] overflow-hidden rounded-3xl border border-white/10 bg-slate-900/95 text-white shadow-2xl backdrop-blur">
          {items.length === 0 ? (
            <div className="flex h-48 items-center justify-center text-sm text-slate-300">Your cart is empty.</div>
          ) : (
            <div className="max-h-72 space-y-4 overflow-y-auto px-4 py-4">
              {items.map((item, index) => {
                const isLast = index === items.length - 1
                return (
                  <div key={item.id} className="flex flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <Link
                        href={item.href}
                        className="flex flex-1 gap-4 rounded-2xl bg-white/5 p-3 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                      >
                        <div className="h-16 w-16 rounded-xl bg-slate-800/60" />
                        <div className="flex-1 overflow-hidden">
                          <p className="truncate text-sm font-semibold text-white">{item.name}</p>
                          <p className="mt-1 truncate text-xs text-slate-300">{item.description}</p>
                          <p className="mt-2 text-xs font-medium text-emerald-200">Qty: {item.quantity}</p>
                        </div>
                      </Link>
                      <div className="flex h-full flex-col items-end justify-between py-1">
                        <button type="button" onClick={() => removeItem(item.id)} className="text-slate-400 hover:text-emerald-200">
                          <TrashIcon />
                        </button>
                        <div className="text-sm font-semibold text-emerald-300">
                          ${Number((item.price * item.quantity).toFixed(2))}
                        </div>
                      </div>
                    </div>
                    {!isLast ? <div className="mx-auto mt-3 h-px w-3/4 bg-white/10" /> : null}
                  </div>
                )
              })}
            </div>
          )}
          <div className="flex items-center justify-between border-t border-white/10 bg-slate-900/80 px-4 py-3 text-sm">
            <span className="text-slate-300">Subtotal</span>
            <span className="font-semibold text-emerald-300">${subtotal}</span>
          </div>
          <div className="border-t border-white/10 bg-slate-900/80 px-4 pb-4">
            <Link
              href="/checkout"
              className="inline-flex w-full justify-center rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 hover:from-emerald-300 hover:via-cyan-300 hover:to-sky-400"
            >
              Checkout
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default CartButton
