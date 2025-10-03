"use client"
import React, { useEffect } from "react"
import { 
  FaTruck,  
  FaFileInvoice, 
  FaWarehouse, 
  FaRoute 
} from "react-icons/fa"
import AOS from 'aos'
import 'aos/dist/aos.css'
import './global.css'

const CoreServices = () => {
   
   useEffect(()=>{
       AOS.init({ duration: 1000, once: true })
   }, [])
   
  const services = [
    {
      first: "Freight Forwarding",
      text: "Efficient and cost-effective freight solutions by air, land and sea",
      icon: <FaTruck className="w-10 h-10 text-[#001f3f] dark:text-white" />
    },
    {
      first: "Customs Clearance",
      text: "Expert handling of all customs procedures for smooth transit",
      icon: <FaFileInvoice className="w-10 h-10 text-[#001f3f]  dark:text-white" />
    },
    {
      first: "Warehousing",
      text: "Secure and scalable warehousing options for your inventory",
      icon: <FaWarehouse className="w-10 h-10 text-[#001f3f]  dark:text-white" />
    },
    {
      first: "Distribution",
      text: "Optimized distribution networks to reach your customers faster",
      icon: <FaRoute className="w-10 h-10 text-[#001f3f]  dark:text-white" />
    }
  ]
  return (
    <section className="flex justify-center items-center py-16 dark:bg-zinc-900 bg-sky-50 ">
      <main className="max-w-6xl w-full px-6">
        {/* Heading */}
        <article className="flex flex-col justify-center items-center text-center mb-12">
          <h1 className="text-3xl font-bold md:text-5xl text-[#001f3f] dark:text-white">Our Core Services</h1>
          <h3 className="mt-4">
            Comprehensive solutions for all your logistics needs
          </h3>
        </article>

        {/* Services Grid */}
        <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const { first, text, icon } = service
            return (
              <div
                key={index}
                data-aos='fade-down'
                className="dark:bg-black dark:
                shad rounded-xl p-6 text-center hover:shadow-lg shadow-xl transition"
              >
                <div className="flex justify-center mb-4 ">{icon}</div> {/* Replace with icons later */}
                <h3 className="font-semibold text-lg mb-2">{first}</h3>
                <p className="text-gray-600 text-sm">{text}</p>
              </div>
            )
          })}
        </article>
      </main>
    </section>
  )
}

export default CoreServices
