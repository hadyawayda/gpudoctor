export type NavLink = {
  href: string
  label: string
  badge?: string
}

export const NAV_LINKS: NavLink[] = [
  { href: '/services', label: 'Services' },
  { href: '/products', label: 'Products' },
  { href: '/marketplace', label: 'Marketplace', badge: 'New' },
  { href: '/builds', label: 'PC Builder' },
  { href: '/repair-requests', label: 'Repair Requests' },
  { href: '/sell', label: 'Sell a GPU' },
  { href: '/community', label: 'Community' },
]
