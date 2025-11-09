'use client'

import Navbar from '../_components/Navbar'
import Footer from '../_components/Footer'

export default function ShippingPolicy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Shipping Policy</h1>
          <p className="text-gray-600 mb-8">Last Updated: November 2024</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Overview</h2>
              <p className="text-gray-700">
                This shipping policy outlines the procedures and responsibilities for shipping graphics cards to and from 
                GPU Doctor for repair, maintenance, or refurbishment services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Shipping Your GPU to Us</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.1 Customer Responsibility</h3>
              <p className="text-gray-700 mb-4">
                Customers are responsible for shipping their GPU to our facility. We recommend:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Using a trackable shipping method</li>
                <li>Purchasing insurance for items valued over $500</li>
                <li>Obtaining proof of shipment and tracking number</li>
                <li>Shipping within 7 days of receiving our shipping address</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.2 Packaging Requirements</h3>
              <p className="text-gray-700 mb-4">
                Proper packaging is essential to prevent damage during transit:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Use original GPU packaging if available</li>
                <li>Wrap GPU in anti-static bag</li>
                <li>Use bubble wrap or foam padding (minimum 2 inches on all sides)</li>
                <li>Place in a sturdy corrugated box</li>
                <li>Fill empty spaces to prevent movement</li>
                <li>Seal box securely with strong packing tape</li>
                <li>Label box as &quot;FRAGILE - ELECTRONIC EQUIPMENT&quot;</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.3 What to Include</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Graphics card only (remove from computer)</li>
                <li>Any accessories specific to the repair (if applicable)</li>
                <li>Printed copy of repair request confirmation</li>
                <li>Contact information inside package</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.4 What NOT to Include</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Original retail packaging (unless using for shipping)</li>
                <li>Driver discs or software</li>
                <li>Power cables or adapters</li>
                <li>Other computer components</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Shipping Address</h2>
              <div className="bg-nvidia-50 border-l-4 border-nvidia-600 p-6 rounded-r-lg">
                <p className="text-gray-900 font-semibold mb-2">GPU Doctor Service Center</p>
                <p className="text-gray-700">Attention: Repair Department</p>
                <p className="text-gray-700">[Street Address]</p>
                <p className="text-gray-700">[City, State, ZIP Code]</p>
                <p className="text-gray-700">[Country]</p>
                <p className="text-gray-700 mt-4"><strong>Include your RMA number on the package</strong></p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Return Shipping (GPU Doctor to Customer)</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">4.1 Standard Return Shipping</h3>
              <p className="text-gray-700 mb-4">
                For completed repairs, GPU Doctor covers return shipping costs:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Free standard return shipping within domestic region</li>
                <li>Estimated 3-7 business days delivery</li>
                <li>Tracking number provided</li>
                <li>Signature required for deliveries over $500</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">4.2 Expedited Return Shipping</h3>
              <p className="text-gray-700 mb-4">
                Expedited shipping options available for additional fee:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>2-Day Shipping: $25</li>
                <li>Overnight Shipping: $50</li>
                <li>International Express: Varies by destination</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">4.3 International Shipping</h3>
              <p className="text-gray-700 mb-4">
                International return shipping terms:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Customer responsible for customs duties and taxes</li>
                <li>Shipping time varies by destination (7-21 business days)</li>
                <li>Additional fees may apply</li>
                <li>Customer must provide accurate customs information</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Declined Repairs</h2>
              <p className="text-gray-700 mb-4">
                If you decline repair after diagnostic evaluation:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>$25 diagnostic fee applies (non-refundable)</li>
                <li>Customer responsible for return shipping costs</li>
                <li>Device returned in original condition</li>
                <li>Return shipping fees must be paid before device shipment</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Insurance and Liability</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">6.1 Shipping to GPU Doctor</h3>
              <p className="text-gray-700">
                Customer assumes all risk during shipment to our facility. We strongly recommend purchasing shipping 
                insurance for items valued over $500. GPU Doctor is not responsible for devices lost or damaged in transit 
                to our facility.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">6.2 Return Shipping</h3>
              <p className="text-gray-700">
                All return shipments are insured up to the repair value. In the rare event of loss or damage during return 
                shipping, GPU Doctor will file a claim with the carrier and provide a replacement or refund.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Tracking and Notifications</h2>
              <p className="text-gray-700 mb-4">
                We provide comprehensive tracking:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Email notification when your GPU is received</li>
                <li>Status updates throughout repair process</li>
                <li>Email notification when repair is complete</li>
                <li>Tracking number provided when device ships back</li>
                <li>Delivery confirmation</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Delivery Issues</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">8.1 Failed Delivery Attempts</h3>
              <p className="text-gray-700 mb-4">
                If delivery attempts fail:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Carrier will make up to 3 delivery attempts</li>
                <li>Package held at local facility for pickup</li>
                <li>Customer notified via email and tracking updates</li>
                <li>Package returned to GPU Doctor if not claimed within 7 days</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">8.2 Address Changes</h3>
              <p className="text-gray-700">
                Address changes must be requested before device shipment. Once shipped, address changes may incur additional 
                carrier fees and delays.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">8.3 Lost or Stolen Packages</h3>
              <p className="text-gray-700">
                Report lost or stolen packages within 48 hours of expected delivery. We will investigate with the carrier 
                and file an insurance claim if necessary.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Prohibited Items</h2>
              <p className="text-gray-700 mb-4">
                Do not ship the following items:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Hazardous materials</li>
                <li>Batteries or power supplies</li>
                <li>Liquids or coolants</li>
                <li>Counterfeit products</li>
                <li>Stolen property</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Holidays and Delays</h2>
              <p className="text-gray-700">
                Shipping times may be extended during:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Major holidays</li>
                <li>Peak shipping seasons (Black Friday, Christmas)</li>
                <li>Severe weather events</li>
                <li>Carrier delays or disruptions</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact for Shipping Questions</h2>
              <p className="text-gray-700 mb-4">
                For shipping-related questions or issues, contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700"><strong>Email:</strong> shipping@gpudoctor.com</p>
                <p className="text-gray-700"><strong>Phone:</strong> +961 76 941 100</p>
                <p className="text-gray-700"><strong>Hours:</strong> Monday-Friday, 9:00 AM - 5:00 PM</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
