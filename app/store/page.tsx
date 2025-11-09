'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import Navbar from '../../app/_components/Navbar'
import Footer from '../../app/_components/Footer'
import Image from 'next/image'
import Link from 'next/link'

type Product = {
  id: number
  name: string
  price: number
  imageUrl: string
  description: string
  brand?: string
  category?: string
  condition?: string
  memorySize?: number
  fans?: number
}

type FilterState = {
  category: string
  brand: string
  condition: string
  minPrice: number
  maxPrice: number
  memorySize: string
  fans: string
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Store() {
  const [products, setProducts] = useState<Product[] | null>(null)
  const [filteredProducts, setFilteredProducts] = useState<Product[] | null>(null)
  const [error, setError] = useState('')
  const [loading, setIsLoading] = useState(true)
  const [showFilters, setShowFilters] = useState(false)
  
  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    brand: 'all',
    condition: 'all',
    minPrice: 0,
    maxPrice: 5000,
    memorySize: 'all',
    fans: 'all'
  })

  useEffect(() => {
    const getData = async () => {
      try {
        const supabaseAdmin = createClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL || '',
          process.env.NEXT_PUBLIC_SUPABASE_KEY || ''
        )
        const { data } = await supabaseAdmin
          .from('Products')
          .select('*')
          .order('id')
        setError('')
        setProducts(data)
        setFilteredProducts(data)
      } catch (err: Error | unknown) {
        console.error(err)
        setError((err as Error).toString())
      } finally {
        setIsLoading(false)
      }
    }

    ;(async () => await getData())()
  }, [])

  // Apply filters whenever filter state changes
  useEffect(() => {
    if (!products) return

    let filtered = products.filter(product => {
      // Category filter
      if (filters.category !== 'all' && product.category !== filters.category) {
        return false
      }
      
      // Brand filter
      if (filters.brand !== 'all' && product.brand !== filters.brand) {
        return false
      }
      
      // Condition filter
      if (filters.condition !== 'all' && product.condition !== filters.condition) {
        return false
      }
      
      // Price range filter
      if (product.price < filters.minPrice || product.price > filters.maxPrice) {
        return false
      }
      
      // Memory size filter
      if (filters.memorySize !== 'all' && product.memorySize?.toString() !== filters.memorySize) {
        return false
      }
      
      // Number of fans filter
      if (filters.fans !== 'all' && product.fans?.toString() !== filters.fans) {
        return false
      }
      
      return true
    })
    
    setFilteredProducts(filtered)
  }, [filters, products])

  const handleFilterChange = (filterName: keyof FilterState, value: string | number) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }))
  }

  const resetFilters = () => {
    setFilters({
      category: 'all',
      brand: 'all',
      condition: 'all',
      minPrice: 0,
      maxPrice: 5000,
      memorySize: 'all',
      fans: 'all'
    })
  }

  return (
    <div>
      {loading ? (
        <div className="justify-center items-center flex h-full my-80">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-nvidia-600 border-r-transparent"></div>
            <p className="mt-4 text-gray-600">Loading products...</p>
          </div>
        </div>
      ) : (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
          <Navbar />
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">GPU Store</h1>
              <p className="text-gray-600">Browse our selection of high-quality graphics cards</p>
            </div>

            {/* Filter Toggle Button (Mobile) */}
            <div className="mb-6 lg:hidden">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="w-full bg-nvidia-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-nvidia-700 transition-colors"
              >
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </button>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters Sidebar */}
              <aside className={`lg:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-bold text-gray-900">Filters</h2>
                    <button
                      onClick={resetFilters}
                      className="text-sm text-nvidia-600 hover:text-nvidia-700 font-semibold"
                    >
                      Reset
                    </button>
                  </div>

                  {/* Category Filter */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                    <select
                      value={filters.category}
                      onChange={(e) => handleFilterChange('category', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-nvidia-600 focus:border-nvidia-600"
                    >
                      <option value="all">All Categories</option>
                      <option value="nvidia">NVIDIA</option>
                      <option value="amd">AMD</option>
                      <option value="intel">Intel</option>
                    </select>
                  </div>

                  {/* Brand Filter */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Brand</label>
                    <select
                      value={filters.brand}
                      onChange={(e) => handleFilterChange('brand', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-nvidia-600 focus:border-nvidia-600"
                    >
                      <option value="all">All Brands</option>
                      <option value="ASUS">ASUS</option>
                      <option value="MSI">MSI</option>
                      <option value="Gigabyte">Gigabyte</option>
                      <option value="EVGA">EVGA</option>
                      <option value="Zotac">Zotac</option>
                      <option value="Sapphire">Sapphire</option>
                      <option value="XFX">XFX</option>
                    </select>
                  </div>

                  {/* Condition Filter */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Condition</label>
                    <select
                      value={filters.condition}
                      onChange={(e) => handleFilterChange('condition', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-nvidia-600 focus:border-nvidia-600"
                    >
                      <option value="all">All Conditions</option>
                      <option value="new">New</option>
                      <option value="used">Used</option>
                      <option value="refurbished">Refurbished</option>
                    </select>
                  </div>

                  {/* Memory Size Filter */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Memory Size</label>
                    <select
                      value={filters.memorySize}
                      onChange={(e) => handleFilterChange('memorySize', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-nvidia-600 focus:border-nvidia-600"
                    >
                      <option value="all">All Sizes</option>
                      <option value="4">4 GB</option>
                      <option value="6">6 GB</option>
                      <option value="8">8 GB</option>
                      <option value="12">12 GB</option>
                      <option value="16">16 GB</option>
                      <option value="24">24 GB</option>
                    </select>
                  </div>

                  {/* Number of Fans Filter */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Fans</label>
                    <select
                      value={filters.fans}
                      onChange={(e) => handleFilterChange('fans', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-nvidia-600 focus:border-nvidia-600"
                    >
                      <option value="all">All</option>
                      <option value="1">1 Fan</option>
                      <option value="2">2 Fans</option>
                      <option value="3">3 Fans</option>
                    </select>
                  </div>

                  {/* Price Range Filter */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Price Range: ${filters.minPrice} - ${filters.maxPrice}
                    </label>
                    <div className="space-y-2">
                      <input
                        type="range"
                        min="0"
                        max="5000"
                        step="50"
                        value={filters.minPrice}
                        onChange={(e) => handleFilterChange('minPrice', parseInt(e.target.value))}
                        className="w-full"
                      />
                      <input
                        type="range"
                        min="0"
                        max="5000"
                        step="50"
                        value={filters.maxPrice}
                        onChange={(e) => handleFilterChange('maxPrice', parseInt(e.target.value))}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </aside>

              {/* Products Grid */}
              <div className="flex-1">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                    {error}
                  </div>
                )}

                {filteredProducts && filteredProducts.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-600 text-lg">No products match your filters</p>
                    <button
                      onClick={resetFilters}
                      className="mt-4 text-nvidia-600 hover:text-nvidia-700 font-semibold"
                    >
                      Reset Filters
                    </button>
                  </div>
                )}

                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                  {filteredProducts?.map((product: Product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </main>
      )}
    </div>
  )
}

function ProductCard({ product }: { product: Product }) {
  const [isLoading, setLoading] = useState(true)

  return (
    <Link href={`/products/${product.id}`} className="group">
      <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
        <Image
          alt={product.name}
          src={product.imageUrl}
          fill={true}
          className={cn(
            'group-hover:opacity-75 duration-700 ease-in-out object-cover',
            isLoading
              ? 'grayscale blur-2xl scale-110'
              : 'grayscale-0 blur-0 scale-100'
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <div className="mt-4 flex flex-col grow overflow-hidden justify-between">
        <div className="flex justify-between mb-2">
          <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
          <p className="mt-0.5 pt-px whitespace-nowrap text-nvidia-600 font-bold">
            ${product.price}
          </p>
        </div>
        {product.brand && (
          <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
        )}
        {product.condition && (
          <span className={cn(
            "inline-block px-2 py-1 text-xs font-semibold rounded-full w-fit mb-2",
            product.condition === 'new' ? 'bg-green-100 text-green-800' :
            product.condition === 'refurbished' ? 'bg-blue-100 text-blue-800' :
            'bg-gray-100 text-gray-800'
          )}>
            {product.condition.charAt(0).toUpperCase() + product.condition.slice(1)}
          </span>
        )}
        <p className="mt-1 leading-5 text-sm break-words font-light line-clamp-2 text-gray-600">
          {product.description}
        </p>
      </div>
    </Link>
  )
}
