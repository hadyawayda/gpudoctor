import Link from 'next/link'
import { Instagram, Twitter, Youtube, Facebook } from 'lucide-react'

import './Socials.css'

type SocialLink = {
  href: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://www.youtube.com/channel/UCoSiqKkT0i460xJA_JFFoFQ',
    label: 'YouTube',
    icon: Youtube,
  },
  {
    href: 'https://www.instagram.com/gpu.doctor/',
    label: 'Instagram',
    icon: Instagram,
  },
  {
    href: 'https://twitter.com/gpudoctor',
    label: 'Twitter',
    icon: Twitter,
  },
  {
    href: 'https://www.facebook.com/hady.laiho',
    label: 'Facebook',
    icon: Facebook,
  },
]

const SocialLinks = () => (
  <div className="social-links animate">
    {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
      <Link key={href} className="link-wrapper" target="_blank" rel="noreferrer noopener" href={href}>
        <span className="sr-only">{label}</span>
        <Icon className="social-icon" aria-hidden="true" />
      </Link>
    ))}
  </div>
)

export default SocialLinks
