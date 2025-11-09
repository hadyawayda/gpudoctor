'use client'

import Image from 'next/image'
import Link from 'next/link'
import './Body.css'

const Body = () => {
  return (
    <div className="body-outer-wrapper px-8 sm:px-10 md:px-12 lg:px-14 xl:px-16 2xl:px-24">
      <Image
        src={require('../../public/Images/background.jpg')}
        alt="background"
        className="background-image"
      />
      <div className="body-wrapper">
        <section className="pt-36">
          <h1 className="animate mid col-start-1 w-1/2 row-start-2 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-7xl xl:max-w-[43.5rem]">
            Professional Graphics Cards Repair Service.
          </h1>
          <div className="animate late mover w-1/2 col-start-1 row-start-1 h-7 text-xl font-semibold mt-8 leading-7 text-nvidia-600">
            We fix GPUs only. It&apos;s our specialty.
          </div>
          <p className="animate vlate text-gray-600 mt-6 max-w-lg text-lg leading-relaxed">
            Expert GPU repair services with fast turnaround times, comprehensive warranties, 
            and specialized technicians dedicated to restoring your graphics card to peak performance.
          </p>
        </section>

        <section className="flex flex-col items-end mt-32">
          <div className="flex flex-col w-5/12">
            <h1 className="animate col-start-1 row-start-2 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-7xl xl:max-w-[36rem]">
              High quality repairs that extend your device&apos;s lifespan.
            </h1>
            <div className="animate mid mover col-start-1 row-start-1 h-7 text-xl font-semibold mt-8 leading-7 text-nvidia-600">
              No problem goes unrectified.
            </div>
            <p className="animate vlate text-gray-600 mt-6 text-lg leading-relaxed">
              From thermal paste replacement to complete refurbishment, we offer comprehensive 
              repair solutions with industry-leading quality standards and diagnostic services.
            </p>
          </div>
        </section>

        <section className="w-5/12 mt-32">
          <h1 className="animate col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-7xl xl:max-w-[43.5rem]">
            Quick, reliable and hassle-free service.
          </h1>
          <div className="animate mid mover col-start-1 row-start-1 h-7 text-xl font-semibold mt-8 leading-7 text-nvidia-600">
            Expedited service available in as little as 1 week.
          </div>
          <p className="animate vlate text-gray-600 mt-6 text-lg leading-relaxed">
            Choose between our standard 6-week service or expedited 1-week turnaround. 
            All repairs include professional diagnostics, thorough testing, and warranty coverage.
          </p>
        </section>

        <section className="flex flex-col items-end mt-32">
          <div className="flex flex-col w-5/12">
            <h1 className="animate col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-7xl xl:max-w-[36rem]">
              Never end your gaming sessions early anymore.
            </h1>
            <div className="animate mid mover col-start-1 row-start-1 h-7 text-xl font-semibold mt-8 leading-7 text-nvidia-600">
              Say Goodbye to frequent crashes and low framerates.
            </div>
            <p className="animate vlate text-gray-600 mt-6 text-lg leading-relaxed">
              Our expert repairs restore your GPU to optimal performance, eliminating thermal 
              throttling, artifacts, and instability issues that plague damaged graphics cards.
            </p>
          </div>
        </section>

        <section className="w-5/12 mt-32">
          <h1 className="animate col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-7xl xl:max-w-[43.5rem]">
            Attention to detail and proficiency is our motto.
          </h1>
          <div className="animate mid mover col-start-1 row-start-1 h-7 text-xl font-semibold mt-8 leading-7 text-nvidia-600">
            Meticulous and clean repairs on every level.
          </div>
          <p className="animate vlate text-gray-600 mt-6 text-lg leading-relaxed">
            GPU Doctor Certified refurbishment program ensures the highest quality standards, 
            with comprehensive maintenance services and professional-grade thermal solutions.
          </p>
        </section>

        <section className="flex flex-col items-end mt-32">
          <div className="flex flex-col w-5/12">
            <h1 className="animate col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-7xl xl:max-w-[36rem]">
              Upgrade your GPU to unlock its full potential.
            </h1>
            <div className="animate mid mover col-start-1 row-start-1 h-7 text-xl font-semibold mt-8 leading-7 text-nvidia-600">
              Multiple upgrading options are available on our{' '}
              <Link className="underline hover:text-nvidia-700" href={'/services'}>
                Services
              </Link>{' '}
              page.
            </div>
            <p className="animate vlate text-gray-600 mt-6 text-lg leading-relaxed">
              Explore thermal paste replacement, thermal pad upgrades, scheduled maintenance, 
              and complete refurbishment services designed to maximize your GPU&apos;s performance.
            </p>
          </div>
        </section>

        {/* New Service Highlights Section */}
        <section className="mt-40 mb-20 w-full">
          <h2 className="animate text-center text-3xl md:text-4xl font-bold text-slate-900 mb-16">
            Our Comprehensive Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="animate mid bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🌡️</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Thermal Solutions</h3>
              <p className="text-gray-600">
                Premium thermal paste and pad replacement services to restore optimal cooling performance.
              </p>
              <Link href="/services" className="text-nvidia-600 font-semibold mt-4 inline-block hover:text-nvidia-700">
                Learn more →
              </Link>
            </div>

            <div className="animate late bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Maintenance Services</h3>
              <p className="text-gray-600">
                Regular and scheduled maintenance to keep your GPU running at peak performance.
              </p>
              <Link href="/services" className="text-nvidia-600 font-semibold mt-4 inline-block hover:text-nvidia-700">
                Learn more →
              </Link>
            </div>

            <div className="animate vlate bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Refurbishment</h3>
              <p className="text-gray-600">
                Complete GPU refurbishment with our GPU Doctor Certified badge program.
              </p>
              <Link href="/services" className="text-nvidia-600 font-semibold mt-4 inline-block hover:text-nvidia-700">
                Learn more →
              </Link>
            </div>

            <div className="animate vvlate bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Diagnostics</h3>
              <p className="text-gray-600">
                Professional diagnostic testing to identify and resolve GPU issues quickly.
              </p>
              <Link href="/services" className="text-nvidia-600 font-semibold mt-4 inline-block hover:text-nvidia-700">
                Learn more →
              </Link>
            </div>

            <div className="animate vvlate bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Fast Turnaround</h3>
              <p className="text-gray-600">
                Expedited 1-week service available for urgent repairs without compromising quality.
              </p>
              <Link href="/services" className="text-nvidia-600 font-semibold mt-4 inline-block hover:text-nvidia-700">
                Learn more →
              </Link>
            </div>

            <div className="animate vvlate bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Warranty Coverage</h3>
              <p className="text-gray-600">
                Standard 1-week warranty on all repairs, with 6-week extended warranty available.
              </p>
              <Link href="/services" className="text-nvidia-600 font-semibold mt-4 inline-block hover:text-nvidia-700">
                Learn more →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Body
