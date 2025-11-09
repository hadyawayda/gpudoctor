'use client'

import Navbar from '../_components/Navbar'
import Footer from '../_components/Footer'

export default function TermsOfUse() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Use</h1>
          <p className="text-gray-600 mb-8">Last Updated: November 2024</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700">
                By accessing or using GPU Doctor services, you agree to be bound by these Terms of Use and all applicable 
                laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Description</h2>
              <p className="text-gray-700 mb-4">
                GPU Doctor provides professional graphics card repair services including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Thermal paste and thermal pad replacement</li>
                <li>GPU maintenance and cleaning services</li>
                <li>Complete refurbishment services</li>
                <li>Diagnostic testing and evaluation</li>
                <li>GPU Doctor Certified refurbishment program</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Repair Services Terms</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3.1 Service Options</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Standard Service:</strong> 6-week turnaround time</li>
                <li><strong>Expedited Service:</strong> 1-week turnaround time (additional $50 fee)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3.2 Diagnostic Fee</h3>
              <p className="text-gray-700">
                A $25 diagnostic fee is required for all repair evaluations. This fee is credited toward the final repair 
                cost if you proceed with the recommended repairs.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3.3 Warranty Coverage</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Standard Warranty:</strong> 1-week warranty included with all repairs</li>
                <li><strong>Extended Warranty:</strong> 6-week extended warranty available for $30 additional fee</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Customer Responsibilities</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Provide accurate information about GPU model and issues</li>
                <li>Backup all data before sending device for repair</li>
                <li>Remove any custom modifications or non-standard components</li>
                <li>Ensure proper packaging for shipping to prevent damage in transit</li>
                <li>Respond to communications regarding repair status and decisions</li>
                <li>Pay all applicable fees in a timely manner</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Payment Terms</h2>
              <p className="text-gray-700 mb-4">
                Payment is required before device return. We accept the following payment methods:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Credit/Debit Cards (Visa, MasterCard, American Express)</li>
                <li>Bank Transfer</li>
                <li>PayPal</li>
              </ul>
              <p className="text-gray-700 mt-4">
                All prices are in USD and may be subject to applicable taxes.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Warranty Terms</h2>
              <p className="text-gray-700 mb-4">
                Our warranty covers defects in workmanship and parts used during repair. The warranty does NOT cover:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Damage caused by misuse, abuse, or accidents</li>
                <li>Physical damage after device return</li>
                <li>Liquid damage</li>
                <li>Modifications performed by third parties</li>
                <li>Normal wear and tear</li>
                <li>Issues unrelated to the original repair</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Turnaround Times</h2>
              <p className="text-gray-700">
                Turnaround times are estimates and may vary based on parts availability, repair complexity, and workload. 
                We will notify you of any significant delays. Turnaround time begins when we receive your device and complete 
                the diagnostic evaluation.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Refund and Return Policy</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">8.1 Diagnostic Fee Refund</h3>
              <p className="text-gray-700">
                If you decline repair after diagnostics, the $25 diagnostic fee is non-refundable. The fee is credited 
                toward repair if you proceed with service.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">8.2 Repair Refund</h3>
              <p className="text-gray-700">
                If repair cannot be completed successfully, you may choose a full refund (excluding diagnostic fee) or 
                partial repair at a reduced cost.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">8.3 Unclaimed Devices</h3>
              <p className="text-gray-700">
                Devices not claimed within 90 days of repair completion will be considered abandoned. GPU Doctor reserves 
                the right to dispose of abandoned devices to recover storage costs.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Shipping Policy</h2>
              <p className="text-gray-700 mb-4">
                Detailed shipping information is available on our <a href="/shipping" className="text-nvidia-600 hover:text-nvidia-700">Shipping Policy</a> page. 
                Key points include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Customer responsible for shipping device to our facility</li>
                <li>We cover return shipping costs for completed repairs</li>
                <li>Insurance recommended for shipments over $500</li>
                <li>Proper packaging required to prevent damage</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Limitation of Liability</h2>
              <p className="text-gray-700">
                GPU Doctor shall not be liable for any indirect, incidental, special, or consequential damages, including 
                but not limited to loss of data, loss of profits, or business interruption. Our total liability shall not 
                exceed the amount paid for the repair service.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Technician Rights Protection</h2>
              <p className="text-gray-700">
                Our technicians have the right to refuse service if:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Device contains illegal content or modifications</li>
                <li>Repair poses safety risks to technicians</li>
                <li>Customer is abusive or threatening</li>
                <li>Device is stolen (law enforcement will be notified)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Intellectual Property</h2>
              <p className="text-gray-700">
                All content on the GPU Doctor website, including text, graphics, logos, and software, is the property of 
                GPU Doctor and protected by copyright and intellectual property laws.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Privacy Policy</h2>
              <p className="text-gray-700">
                Our collection and use of personal information is governed by our <a href="/privacy" className="text-nvidia-600 hover:text-nvidia-700">Privacy Policy</a>.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Changes to Terms</h2>
              <p className="text-gray-700">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. 
                Your continued use of our services constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Governing Law</h2>
              <p className="text-gray-700">
                These terms shall be governed by and construed in accordance with applicable laws. Any disputes shall be 
                resolved through binding arbitration.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about these Terms of Use, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700"><strong>Email:</strong> legal@gpudoctor.com</p>
                <p className="text-gray-700"><strong>Phone:</strong> +961 76 941 100</p>
                <p className="text-gray-700"><strong>Address:</strong> GPU Doctor Service Center</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
