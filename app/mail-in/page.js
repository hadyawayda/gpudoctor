'use client'

import Navbar from '../_components/Navbar'
import Footer from '../_components/Footer'
import Link from 'next/link'

export default function MailIn() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Mail-In Repair Service
            </h1>
            <p className="text-xl text-gray-600">
              Professional GPU repair service with fast turnaround and comprehensive warranty coverage
            </p>
          </div>

          {/* How It Works */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-nvidia-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Submit Request</h3>
                <p className="text-gray-600 text-sm">
                  Fill out the repair request form with your GPU details and issue description
                </p>
              </div>
              <div className="text-center">
                <div className="bg-nvidia-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Ship Your GPU</h3>
                <p className="text-gray-600 text-sm">
                  Securely package and ship your GPU to our service center with provided instructions
                </p>
              </div>
              <div className="text-center">
                <div className="bg-nvidia-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Diagnosis & Repair</h3>
                <p className="text-gray-600 text-sm">
                  We diagnose the issue and perform professional repairs with quality parts
                </p>
              </div>
              <div className="text-center">
                <div className="bg-nvidia-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Receive Your GPU</h3>
                <p className="text-gray-600 text-sm">
                  We ship your repaired GPU back with warranty coverage included
                </p>
              </div>
            </div>
          </section>

          {/* Service Options */}
          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Options</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Standard Service</h3>
                  <p className="text-gray-600 text-sm">6-week turnaround time</p>
                </div>
                <span className="text-nvidia-600 font-bold">Included</span>
              </div>
              <div className="flex justify-between items-center border-b pb-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Expedited Service</h3>
                  <p className="text-gray-600 text-sm">1-week turnaround time</p>
                </div>
                <span className="text-nvidia-600 font-bold">+$50</span>
              </div>
              <div className="flex justify-between items-center border-b pb-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Diagnostic Fee</h3>
                  <p className="text-gray-600 text-sm">Credited toward repair cost</p>
                </div>
                <span className="text-nvidia-600 font-bold">$25</span>
              </div>
              <div className="flex justify-between items-center border-b pb-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Standard Warranty</h3>
                  <p className="text-gray-600 text-sm">1-week warranty coverage</p>
                </div>
                <span className="text-nvidia-600 font-bold">Included</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-gray-900">Extended Warranty</h3>
                  <p className="text-gray-600 text-sm">6-week warranty coverage</p>
                </div>
                <span className="text-nvidia-600 font-bold">+$30</span>
              </div>
            </div>
          </section>

          {/* What We Repair */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Repair</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <span className="text-nvidia-600 mr-3 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Thermal Issues</h3>
                  <p className="text-gray-600 text-sm">Overheating, thermal paste/pad replacement</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-nvidia-600 mr-3 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Display Problems</h3>
                  <p className="text-gray-600 text-sm">No display, artifacts, screen corruption</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-nvidia-600 mr-3 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Performance Issues</h3>
                  <p className="text-gray-600 text-sm">Low FPS, throttling, instability</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-nvidia-600 mr-3 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Physical Damage</h3>
                  <p className="text-gray-600 text-sm">Broken fans, damaged PCB components</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-nvidia-600 mr-3 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Power Issues</h3>
                  <p className="text-gray-600 text-sm">Won&apos;t power on, power cycling</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-nvidia-600 mr-3 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Maintenance</h3>
                  <p className="text-gray-600 text-sm">Cleaning, preventive maintenance</p>
                </div>
              </div>
            </div>
          </section>

          {/* Important Information */}
          <section className="mb-12 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Important Information</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Backup all data before shipping your GPU</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Use proper anti-static packaging and include tracking</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>$25 diagnostic fee is credited toward repair if you proceed</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>We cover return shipping for completed repairs</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>All repairs include testing and quality assurance</span>
              </li>
            </ul>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-nvidia-600 rounded-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="mb-6 text-lg opacity-90">
                Submit your repair request today and get your GPU back to peak performance
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <button className="bg-white text-nvidia-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Submit Repair Request
                </button>
                <Link
                  href="/services"
                  className="bg-nvidia-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-nvidia-800 transition-colors border-2 border-white"
                >
                  View Services
                </Link>
              </div>
            </div>
          </section>

          {/* Additional Resources */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/shipping" className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">📦</div>
                <h3 className="font-semibold text-gray-900 mb-2">Shipping Policy</h3>
                <p className="text-gray-600 text-sm">Learn about packaging and shipping requirements</p>
              </Link>
              <Link href="/terms" className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">📄</div>
                <h3 className="font-semibold text-gray-900 mb-2">Terms of Use</h3>
                <p className="text-gray-600 text-sm">Read our service terms and warranty information</p>
              </Link>
              <Link href="/faq" className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">❓</div>
                <h3 className="font-semibold text-gray-900 mb-2">FAQ</h3>
                <p className="text-gray-600 text-sm">Find answers to common questions</p>
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
