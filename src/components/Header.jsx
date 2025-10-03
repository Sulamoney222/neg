"use client"
import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import Logo from "../../public/logo.jpg"
import ThemeToggle from "./ThemeToggle"
import './global.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <section className="sula text-white top-0 z-50 sticky shadow-md">
      <header className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        
        {/* Logo */}
        <div>
          <Image
            src={Logo}
            alt="Company Logo"
            width={40}
            height={40}
            className="rounded-2xl"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-bold text-sm">
          <a href="/" className="hover:text-gray-400 transition">Home</a>
          <a href="/service" className="hover:text-gray-400 transition">Services</a>
          <a href="/about" className="hover:text-gray-400 transition">About Us</a>
          <a href="/contact" className="hover:text-gray-400 transition">Contacts</a>
          <a href="/terms" className="hover:text-gray-400 transition">Terms</a>
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a href="/quote">
            <button className="bg-white active:scale-50 cursor-pointer text-black px-4 py-2 rounded hover:bg-gray-300 transition">
              Get Quote
            </button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="cursor-pointer">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </header>

      {/* Overlay + Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Transparent Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsMenuOpen(false)} // closes menu on tap
            />

            {/* Mobile Menu */}
            <motion.nav
              key="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-[64px] left-0 w-full bg-[#001f3f] px-6 pb-4 space-y-3 overflow-hidden z-50 md:hidden"
            >
              <motion.a whileHover={{ x: 5 }} href="/" className="block hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>Home</motion.a>
              <motion.a whileHover={{ x: 5 }} href="/service" className="block hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>Services</motion.a>
              <motion.a whileHover={{ x: 5 }} href="/about" className="block hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>About Us</motion.a>
              <motion.a whileHover={{ x: 5 }} href="/contact" className="block hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>Contacts</motion.a>
              <motion.a whileHover={{ x: 5 }} href="/terms" className="block hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>Terms</motion.a>
              
              <ThemeToggle />
              <a href="/quote">
              <motion.button 
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(false)}
                className="w-full cursor-pointer active:scale-50 bg-white text-black py-2 mt-2 rounded hover:bg-gray-300"
              >
                Get Quote
              </motion.button>
              </a>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Header
