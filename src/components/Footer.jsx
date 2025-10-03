"use client"
import React from "react"
import Image from "next/image"
import Logo from "../../public/logo.jpg"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#001f3f] text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & tagline */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <Image
              src={Logo}
              alt="Company Logo"
              width={40}
              height={40}
              className="rounded-2xl"
            />
            <h2 className="text-white text-2xl font-bold">Neglobal</h2>
          </div>
          <p className="text-sm">Your reliable logistics partner.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-blue-400">Home</a></li>
            <li><a href="/service" className="hover:text-blue-400">Services</a></li>
            <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
            <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-white font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/policy" className="hover:text-blue-400">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-blue-400">Terms of Service</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white font-semibold mb-3">Connect With Us</h3>
          <div className="flex space-x-4 items-center">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaFacebookF size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaTwitter size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="https://wa.me/2348037973150"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 flex items-center gap-2"
            >
              <FaWhatsapp size={18} />
              <span className="text-sm">08037973150</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center text-sm text-gray-400 mt-10 border-t border-gray-700 pt-6">
        © {currentYear} Neglobal Logistics Limited. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
