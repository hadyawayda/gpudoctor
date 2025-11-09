export type NavLink = {
  href: string
  label: string
}

export const NAV_LINKS: NavLink[] = [
  { href: '/services', label: 'Services' },
  { href: '/store', label: 'Store' },
  { href: '/marketplace', label: 'Marketplace' },
  { href: '/builds', label: 'Build your PC' },
  { href: '/repair-requests', label: 'Repair intake' },
  { href: '/sell', label: 'Sell your GPU' },
  { href: '/portal', label: 'User portal' },
  { href: '/resources', label: 'Resources' },
]
