// Navigation types
export type NavLink = {
  href: string
  label: string
  badge?: string
}

// Service types
export type ServiceCategory =
  | 'Diagnostics'
  | 'Repairs'
  | 'Cooling'
  | 'Maintenance'
  | 'Refurbishment'
  | 'Certification'
  | 'Enhancements'

export type Service = {
  name: string
  description: string
  price: string
  turnaround: string
  category: ServiceCategory
  badge?: string
}

// Product types
export type ProductCategory =
  | 'GPU'
  | 'CPU'
  | 'Motherboard'
  | 'Memory'
  | 'Storage'
  | 'Cooling'
  | 'Case'
  | 'Power Supply'
  | 'Accessory'
  | 'Thermal Products'
  | 'Tools'

export type ProductCondition = 'New' | 'Used' | 'Refurbished' | 'GPU Doctor Certified'

export type ProductAvailability = 'In Stock' | 'Preorder' | 'Backorder' | 'Out of Stock'

export type CatalogProduct = {
  slug: string
  name: string
  brand: string
  model: string
  category: ProductCategory
  condition: ProductCondition
  price: number
  availability: ProductAvailability
  description: string
  specs: Array<{ label: string; value: string }>
  tags: string[]
  images: string[]
}

// Marketplace types
export type MarketplaceListing = {
  id: string
  title: string
  price: string
  description: string
  brand: string
  model: string
  category: string
  stats: string
  location: string
  refurbishedByDoctor?: boolean
  includesRefurbOption?: boolean
  condition?: ProductCondition
  fanCount?: number
  coolerType?: string
  memorySize?: string
  powerConnector?: string
  length?: string
  warrantyStatus?: string
}

// Repair milestone types
export type RepairMilestone = {
  title: string
  description: string
  tip?: string
}

// Landing page types
export type LandingMetric = {
  label: string
  value: string
  emphasis: string
}

export type LandingHighlight = {
  title: string
  description: string
}

export type LandingCta = {
  title: string
  description: string
  href: string
}

export type ForumHighlight = {
  name: string
  description: string
}
