'use client'

import Navbar from '../_components/Navbar'
import Footer from '../_components/Footer'

const servicesData = [
  {
    id: 1,
    name: 'Thermal Paste Replacement',
    description: 'Professional thermal paste replacement using high-quality thermal compound to restore optimal cooling performance.',
    price: 'Starting at $49',
    turnaround: '1-6 weeks',
    icon: '🌡️'
  },
  {
    id: 2,
    name: 'Thermal Pad Replacement',
    description: 'Replace worn or damaged thermal pads with premium quality pads to ensure proper heat dissipation.',
    price: 'Starting at $59',
    turnaround: '1-6 weeks',
    icon: '📐'
  },
  {
    id: 3,
    name: 'Thermal Paste & Pads Replacement',
    description: 'Complete thermal solution replacement including both thermal paste and pads for maximum cooling efficiency.',
    price: 'Starting at $89',
    turnaround: '1-6 weeks',
    icon: '❄️'
  },
  {
    id: 4,
    name: 'Maintenance Service',
    description: 'Comprehensive cleaning, inspection, and maintenance to keep your GPU running at peak performance.',
    price: 'Starting at $79',
    turnaround: '1-6 weeks',
    icon: '🔧'
  },
  {
    id: 5,
    name: 'Scheduled Maintenance',
    description: 'Regular preventive maintenance service to extend the lifespan of your graphics card.',
    price: 'Starting at $69',
    turnaround: 'Flexible scheduling',
    icon: '📅'
  },
  {
    id: 6,
    name: 'Refurbishment Service',
    description: 'Complete GPU refurbishment including cleaning, repairs, and testing to restore like-new performance.',
    price: 'Starting at $149',
    turnaround: '2-6 weeks',
    icon: '✨'
  },
  {
    id: 7,
    name: 'Diagnostic Service',
    description: 'Professional diagnostic testing to identify issues and provide detailed repair recommendations.',
    price: '$25 (credited toward repair)',
    turnaround: '3-5 days',
    icon: '🔍'
  },
  {
    id: 8,
    name: 'GPU Doctor Certified Refurbishment',
    description: 'Premium refurbishment service with GPU Doctor Certified badge, ensuring highest quality standards.',
    price: 'Starting at $199',
    turnaround: '2-6 weeks',
    icon: '✅'
  }
]

const serviceOptions = [
  {
    name: 'Expedited Service',
    description: '1-week turnaround for urgent repairs',
    price: '+$50'
  },
  {
    name: 'Standard Service',
    description: '6-week turnaround at regular pricing',
    price: 'Included'
  },
  {
    name: 'Extended Warranty',
    description: '6-week extended warranty coverage',
    price: '+$30'
  },
  {
    name: 'Standard Warranty',
    description: '1-week warranty included with all services',
    price: 'Included'
  }
]

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
              Professional GPU Repair Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert graphics card repair and maintenance services with industry-leading turnaround times and warranty coverage.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4 min-h-[4rem]">
                  {service.description}
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="text-nvidia-600 font-bold">{service.price}</span>
                  <span className="text-sm text-gray-500">{service.turnaround}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Service Options */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto bg-gray-50 rounded-2xl my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Service Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {option.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{option.description}</p>
                <p className="text-nvidia-600 font-bold">{option.price}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose GPU Doctor?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Fast Turnaround</h3>
              <p className="text-gray-600">
                Expedited service available with 1-week turnaround for urgent repairs.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-3">Warranty Coverage</h3>
              <p className="text-gray-600">
                All repairs include a 1-week warranty, with extended 6-week warranty available.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">👨‍🔧</div>
              <h3 className="text-xl font-semibold mb-3">Expert Technicians</h3>
              <p className="text-gray-600">
                Specialized GPU repair experts with years of experience in graphics card repair.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto text-center">
          <div className="bg-nvidia-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Submit a repair request today and get your GPU back to peak performance.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="/mail-in"
                className="bg-white text-nvidia-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Request Repair
              </a>
              <a
                href="/contact"
                className="bg-nvidia-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-nvidia-800 transition-colors border-2 border-white"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
