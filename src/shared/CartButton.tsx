"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import TrashIcon from "./TrashIcon";

import cartIcon from "@public/Images/Cart.svg";

type CartItem = {
  id: string;
  name: string;
  href: string;
  description: string;
  price: number;
  quantity: number;
};

const DEFAULT_ITEMS: CartItem[] = [
  {
    id: "1",
    name: "Founders Edition GPU Repair",
    href: "#",
    description: "Comprehensive diagnostics and repair for flagship GPUs.",
    price: 1048.99,
    quantity: 2,
  },
  {
    id: "2",
    name: "Thermal Pad Replacement",
    href: "#",
    description: "Premium thermal materials and installation service.",
    price: 231,
    quantity: 3,
  },
  {
    id: "3",
    name: "Performance Benchmark",
    href: "#",
    description: "Full synthetic and in-game benchmarking report.",
    price: 17.4,
    quantity: 1,
  },
];

const CartButton = () => {
  const [items, setItems] = useState<CartItem[]>(DEFAULT_ITEMS);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const subtotal = useMemo(
    () =>
      Number(
        items
          .reduce((total, item) => total + item.price * item.quantity, 0)
          .toFixed(2)
      ),
    [items]
  );

  const removeItem = (id: string) => {
    setItems((previous) => previous.filter((item) => item.id !== id));
  };

  const closeOnOutsideClick = useCallback((event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  }, []);

  const closeOnEscape = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [closeOnEscape, closeOnOutsideClick, open]);

  return (
    <div className="relative flex justify-end" ref={containerRef}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-600 px-4 py-2 font-semibold text-white shadow-lg shadow-primary-500/30 transition hover:shadow-primary-500/50 hover:scale-105"
      >
        <span className="text-sm tracking-tight">Cart</span>
        <Image className="w-4 h-4" alt="cart" src={cartIcon} />
      </button>
      <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent-400 text-xs font-bold text-white border-2 border-background-base shadow-md">
        {items.length >= 9 ? "9+" : items.length}
      </span>

      {open ? (
        <div className="absolute right-0 top-14 w-[22rem] overflow-hidden rounded-3xl border border-primary-500/20 bg-background-section/95 text-slate-100 shadow-2xl backdrop-blur">
          {items.length === 0 ? (
            <div className="flex h-48 items-center justify-center text-sm text-slate-400">
              Your cart is empty.
            </div>
          ) : (
            <div className="max-h-72 space-y-4 overflow-y-auto px-4 py-4">
              {items.map((item, index) => {
                const isLast = index === items.length - 1;
                return (
                  <div key={item.id} className="flex flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <Link
                        href={item.href}
                        className="flex flex-1 gap-4 rounded-2xl bg-background-card/70 p-3 transition hover:bg-primary-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
                      >
                        <div className="h-16 w-16 rounded-xl bg-background-base/60" />
                        <div className="flex-1 overflow-hidden">
                          <p className="truncate text-sm font-semibold text-primary-200">
                            {item.name}
                          </p>
                          <p className="mt-1 truncate text-xs text-slate-400">
                            {item.description}
                          </p>
                          <p className="mt-2 text-xs font-medium text-accent-300">
                            Qty: {item.quantity}
                          </p>
                        </div>
                      </Link>
                      <div className="flex h-full flex-col items-end justify-between py-1">
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="text-slate-400 hover:text-accent-300 transition-colors"
                        >
                          <TrashIcon />
                        </button>
                        <div className="text-sm font-semibold text-accent-300">
                          ${Number((item.price * item.quantity).toFixed(2))}
                        </div>
                      </div>
                    </div>
                    {!isLast ? (
                      <div className="mx-auto mt-3 h-px w-3/4 bg-primary-500/20" />
                    ) : null}
                  </div>
                );
              })}
            </div>
          )}
          <div className="flex items-center justify-between border-t border-primary-500/20 bg-background-card/80 px-4 py-3 text-sm">
            <span className="text-slate-400">Subtotal</span>
            <span className="font-semibold text-accent-300">${subtotal}</span>
          </div>
          <div className="border-t border-primary-500/20 bg-background-card/80 px-4 pb-4">
            <Link
              href="/checkout"
              className="inline-flex w-full justify-center rounded-full bg-gradient-to-r from-primary-500 to-secondary-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 transition-all"
            >
              Checkout
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CartButton;
