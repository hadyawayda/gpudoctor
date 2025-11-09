import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'

import facebookIcon from '@/public/Images/Facebook.svg'
import instagramIcon from '@/public/Images/Instagram.svg'
import tiktokIcon from '@/public/Images/TikTok.svg'
import youtubeIcon from '@/public/Images/YouTube.svg'

import './Socials.css'

type SocialLink = {
  href: string
  label: string
  icon: StaticImageData
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://www.youtube.com/channel/UCoSiqKkT0i460xJA_JFFoFQ',
    label: 'YouTube',
    icon: youtubeIcon,
  },
  {
    href: 'https://www.instagram.com/gpu.doctor/',
    label: 'Instagram',
    icon: instagramIcon,
  },
  {
    href: 'https://www.tiktok.com/@gpudoctor',
    label: 'TikTok',
    icon: tiktokIcon,
  },
  {
    href: 'https://www.facebook.com/hady.laiho',
    label: 'Facebook',
    icon: facebookIcon,
  },
]

const SocialLinks = () => (
  <div className="social-links animate">
    {SOCIAL_LINKS.map(({ href, icon, label }) => (
      <Link key={href} className="link-wrapper" target="_blank" rel="noreferrer noopener" href={href}>
        <span className="sr-only">{label}</span>
        <Image className="social-logos" src={icon} alt="" aria-hidden="true" />
      </Link>
    ))}
  </div>
)

export default SocialLinks
