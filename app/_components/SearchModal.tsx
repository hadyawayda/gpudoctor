'use client'

import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'

interface Product {
  id: number
  name: string
  brand: string
  price: number
  imageUrl: string
}

interface SearchModalProps {
  isOpen: boolean
  closeModal: () => void
}

export default function SearchModal({ isOpen, closeModal }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<Product[]>([])
  const [isSearching, setIsSearching] = useState(false)

  // Auto-focus when modal opens
  useEffect(() => {
    if (isOpen) {
      setSearchQuery('')
      setSearchResults([])
    }
  }, [isOpen])

  // Search products (mock implementation - replace with actual API call)
  useEffect(() => {
    const searchProducts = async () => {
      if (searchQuery.trim().length < 2) {
        setSearchResults([])
        return
      }

      setIsSearching(true)
      
      // Simulate API call delay
      setTimeout(() => {
        // Mock data - replace with actual Supabase query
        const mockResults: Product[] = [
          {
            id: 1,
            name: 'NVIDIA GeForce RTX 4090',
            brand: 'NVIDIA',
            price: 1599,
            imageUrl: '/Images/gpu.jpg'
          },
          {
            id: 2,
            name: 'AMD Radeon RX 7900 XTX',
            brand: 'AMD',
            price: 999,
            imageUrl: '/Images/gpu.jpg'
          },
        ].filter(p => 
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.brand.toLowerCase().includes(searchQuery.toLowerCase())
        )
        
        setSearchResults(mockResults)
        setIsSearching(false)
      }, 300)
    }

    searchProducts()
  }, [searchQuery])

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40 backdrop-blur-md" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-start justify-center p-4 pt-20">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 shadow-2xl transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
                  <input
                    type="text"
                    className="flex-1 text-lg outline-none"
                    placeholder="Search for products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                  />
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <XMarkIcon className="h-6 w-6 text-gray-500" />
                  </button>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  {isSearching && (
                    <div className="text-center py-8 text-gray-500">
                      Searching...
                    </div>
                  )}

                  {!isSearching && searchQuery && searchResults.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      No products found
                    </div>
                  )}

                  {!isSearching && searchResults.length > 0 && (
                    <div className="space-y-2 max-h-96 overflow-y-auto">
                      {searchResults.map((product) => (
                        <Link
                          key={product.id}
                          href={`/products/${product.id}`}
                          onClick={closeModal}
                          className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <div className="w-16 h-16 relative bg-gray-200 rounded-md flex-shrink-0">
                            <Image
                              src={product.imageUrl}
                              alt={product.name}
                              fill
                              className="object-cover rounded-md"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-gray-900 truncate">
                              {product.name}
                            </h3>
                            <div className="flex items-center justify-between mt-1">
                              <p className="text-sm text-gray-500">{product.brand}</p>
                              <p className="text-sm font-semibold text-nvidia-600">
                                ${product.price}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}

                  {!searchQuery && (
                    <div className="text-center py-8 text-gray-400">
                      Start typing to search products...
                    </div>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
