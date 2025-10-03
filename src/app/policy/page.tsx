"use client"
import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const PrivacyPolicy = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  const currentYear = new Date().getFullYear()

  return (
    <section className="py-16 ">
      <main className="max-w-5xl mx-auto px-6">
        
        {/* Title */}
        <article className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-3xl md:text-5xl font-bold ">
            Privacy Policy
          </h1>
          <p className="mt-4  text-lg">
            Effective Date: {currentYear}
          </p>
        </article>

        {/* Content */}
        <div className="space-y-10 leading-relaxed text-lg">
          <section data-aos="fade-up">
            <p>
              At <span className="font-semibold text-sky-600">Neglobal Logistics Limited</span>, 
              we respect your privacy and are committed to protecting your personal information. 
              This Privacy Policy explains how we collect, use, and safeguard your data when you 
              interact with our website and services.
            </p>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-2xl font-bold  mb-3">1. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Information:</strong> Your name, phone number, email address, and other details you provide through our forms (e.g., Contact, Login, or Quote requests).</li>
              <li><strong>Business Information:</strong> Company name, registration details, and shipping requirements.</li>
              <li><strong>Usage Data:</strong> IP address, browser type, device details, and pages visited.</li>
              <li><strong>Cookies:</strong> Small files stored on your device to improve your browsing experience.</li>
            </ul>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-2xl font-bold  mb-3">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide logistics, clearing, and forwarding services.</li>
              <li>Respond to inquiries, process requests, and provide customer support.</li>
              <li>Improve our website’s functionality and user experience.</li>
              <li>Send updates, notifications, or promotional offers (if you consent).</li>
              <li>Comply with legal obligations and prevent fraud or misuse.</li>
            </ul>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-2xl font-bold  mb-3">3. Sharing of Information</h2>
            <p>
              We do not sell, rent, or trade your personal information. However, we may share data with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Providers:</strong> Trusted partners assisting with logistics, IT support, or payments.</li>
              <li><strong>Legal Authorities:</strong> When required by law, regulation, or legal process.</li>
            </ul>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-2xl font-bold  mb-3">4. Data Security</h2>
            <p>
              We implement strong security measures to protect your information from unauthorized 
              access, loss, or misuse. However, please note that no method of transmission over the 
              internet is 100% secure.
            </p>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-2xl font-bold  mb-3">5. Your Rights</h2>
            <p>
              You may have the right to access, correct, or delete your personal information, 
              opt out of marketing communications, or withdraw consent. To exercise these rights, 
              please contact us.
            </p>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-2xl font-bold  mb-3">6. Third-Party Links</h2>
            <p>
              Our website may contain links to external platforms (such as social media sites). 
              We are not responsible for their privacy practices.
            </p>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-2xl font-bold  mb-3">7. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-3">
              📧 <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:negloballog@gmail.com" className="text-sky-600 hover:underline">
                negloballog@gmail.com
              </a>
              <br />
              📞 <span className="font-semibold">Phone:</span> 08037973150
            </p>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-2xl font-bold  mb-3">8. Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted here 
              with the updated effective date.
            </p>
          </section>
        </div>
      </main>
    </section>
  )
}

export default PrivacyPolicy
