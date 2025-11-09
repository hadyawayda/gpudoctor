'use client'

import Logos from './Socials.js'
import Link from 'next/link'
import Image from 'next/image'
import './Footer.css'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="footer-wrapper mt-20 lg:px-20 w-full flex flex-col justify-start items-center">
      <div
        id="top"
        className="flex justify-center md:hidden w-3/4 md:w-full animate m-20">
        <Logos />
      </div>
      <div className="lg:pt-10 lg:pb-20 font-medium text-sm flex justify-center py-10 md:py-20 w-full items-start grow flex-wrap flex-row md:flex-nowrap">
        <div className="flex items-center h-24 w-1/2 pl-10 lg:w-4/12 animate">
          <Image
            className="h-12 w-12"
            alt="gpu logo"
            src={require('../../public/Images/gpucore.jpg')}
          />
        </div>
        <div className="index-wrapper pl-12">
          <h4 className="headings mb-4 text-lg font-semibold text-slate-900 animate">
            Index
          </h4>
          <Link href="/" className="block animate mid hover:text-nvidia-600">Home</Link>
          <Link href="/services" className="block animate late hover:text-nvidia-600">Services</Link>
          <Link href="/mail-in" className="block animate vlate hover:text-nvidia-600">
            Mail-In Repair
          </Link>
          <Link href="/store" className="block animate vvlate hover:text-nvidia-600">Store</Link>
        </div>
        <div className="support-wrapper pl-12">
          <h4 className="headings mb-4 text-lg font-semibold text-slate-900 animate">
            Support
          </h4>
          <Link href="/shipping" className="block animate mid hover:text-nvidia-600">Shipping Policy</Link>
          <Link href="/terms" className="block animate late hover:text-nvidia-600">Return Policy</Link>
          <Link href="/privacy" className="block animate vlate hover:text-nvidia-600">Privacy Policy</Link>
        </div>
        <div className="help-wrapper pl-12">
          <h4
            className="headings mb-4 text-lg font-semibold text-slate-900 animate"
            id="need-help">
            Need Help?
          </h4>
          <div className="contact-us-wrapper animate mid">
            <p className="contact-us animate late" id="contact-us">
              Contact Us{' '}
            </p>
            <Link
              rel="noreferrer"
              className="ml-2"
              target="_blank"
              href="https://wa.me/96176941100">
              <Image
                className="contact-links-1"
                alt="WhatsApp"
                src={require('../../public/Images/WhatsApp.svg').default}
              />
            </Link>
            <Link
              rel="noreferrer"
              className=""
              target="_blank"
              href="mailto:hady_awayda@hotmail.com">
              <Image
                id="email-logo"
                alt="Email"
                src={require('../../public/Images/Email.svg').default}
              />
            </Link>
          </div>
          <Link href="/about" className="block animate late hover:text-nvidia-600">About Us</Link>
          <Link href="/faq" className="block animate vlate hover:text-nvidia-600">FAQ</Link>
        </div>
      </div>
      <div className="flex justify-center w-full px-12 h-96 items-center animate late">
        <div className="footer-lower-section-wrapper animate py-20 flex items-center lg:h-60 w-full justify-between grow">
          <div className="flex justify-between flex-col-reverse lg:ml-6">
            <p className="copyright-wrapper">2023 © GPU Doctor</p>
            <p className="terms-of-use-wrapper">
              <Link href="https://www.gpudoctor.com/terms">Terms of use</Link>
            </p>
          </div>
          <div className="hidden md:flex">
            <Logos />
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={scrollToTop}
              className="back-to-top text-xs px-6 py-3 leading-loose mr-6 rounded-full text-slate-800 border-2 border-slate-300">
              Back To Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
