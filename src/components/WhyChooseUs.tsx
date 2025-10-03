"use client"
import React, { useEffect } from "react"
import { FaClock, FaShieldAlt, FaUsers, FaGlobe } from "react-icons/fa"
import AOS from "aos"
import "aos/dist/aos.css"

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  const features = [
    {
      icon: <FaClock className="text-blue-600 text-4xl mb-4" />,
      title: "On-Time Delivery",
      text: "We prioritize timely delivery to keep your business running smoothly.",
      delay: 0,
    },
    {
      icon: <FaShieldAlt className="text-blue-600 text-4xl mb-4" />,
      title: "Reliable Service",
      text: "Count on us for consistent and dependable logistics solutions.",
      delay: 200,
    },
    {
      icon: <FaUsers className="text-blue-600 text-4xl mb-4" />,
      title: "Customer-Focused",
      text: "Our team is dedicated to meeting your specific needs and exceeding expectations.",
      delay: 400,
    },
    {
      icon: <FaGlobe className="text-blue-600 text-4xl mb-4" />,
      title: "Global Network",
      text: "Leverage our extensive global network for seamless international shipping.",
      delay: 600,
    },
  ]

  return (
    <section className="py-16 bg-blue-100 dark:bg-zinc-900">
      <main className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <article className="mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-[#001f3f] dark:text-white">
            Why Choose Us?
          </h2>
          <p className="mt-4 text-gray-600">
            Experience the advantages of partnering with a leading logistics provider.
          </p>
        </article>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-black shadow-md rounded-xl p-6 hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-delay={item.delay}
            >
              {item.icon}
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </main>
    </section>
  )
}

export default WhyChooseUs
