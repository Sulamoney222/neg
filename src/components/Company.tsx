"use client"
import React, { useEffect } from "react"
import { FaArrowUp } from "react-icons/fa"
import Image from "next/image"
import AOS from "aos"
import "aos/dist/aos.css"

const Company = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  const reviews = [
    {
      name: "John Wale",
      role: "Operations Manager, IAL Nigeria",
      review:
        "Working with this logistics team has been seamless. Their freight solutions have saved us time and money.",
      image: "/ial.jpg",
    },
    {
      name: "Jane Smith",
      role: "CEO, Lofas Investment",
      review:
        "Professional, reliable, and efficient. They handled our customs clearance with zero stress.",
      image: "/lofas.jpg",
    },
    {
      name: "Michael Johnson",
      role: "Supply Chain Director",
      review:
        "Their warehousing and distribution services helped us scale operations quickly.",
      image: "/ial.jpg",
    },
  ]

  return (
    <section className="py-16 bg-gray-50 dark:bg-black">
      <main className="max-w-6xl mx-auto px-6">
        {/* Companies Heading */}
        <article className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-[#001f3f] dark:text-white">
            Companies We Serve
          </h1>
          <h3 className="mt-4 text-gray-600 dark:text-zinc-400">
            Tailored logistics for a diverse range of industries
          </h3>
        </article>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Company 1 */}
          <figure
            className="bg-zinc-200 dark:bg-zinc-900 shadow-xl rounded-xl p-6 hover:shadow-lg transition"
            data-aos="fade-up"
          >
            <Image
              src="/ial.jpg"
              alt="IAL Nigeria Limited"
              width={400}
              height={250}
              className="rounded-md mb-4"
            />
            <figcaption>
              <h4 className="text-lg font-semibold mb-2">
                IAL Nigeria Limited
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                An indigenous Multimodal International Logistics and Supply
                Chain Management Company with services covering International
                Freight Forwarding, International Removal &amp; Relocation,
                Project Logistics in the Oil Industry, Power and Telecoms
                Sectors, Warehousing &amp; Storage, Dangerous Goods Handling
                including Radioactive Sources.
              </p>
              <a
                href="https://www.iela.org/members/find-an-iela-member/companies/ial-nigeria-ltd.html"
                className="text-blue-800 font-medium inline-flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More <FaArrowUp />
              </a>
            </figcaption>
          </figure>

          {/* Company 2 */}
          <figure
            className="bg-zinc-200 dark:bg-zinc-900 shadow-xl rounded-xl p-6 hover:shadow-lg transition"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Image
              src="/lofas.jpg"
              alt="Lofas Investment Limited"
              width={400}
              height={250}
              className="rounded-md mb-4"
            />
            <figcaption>
              <h4 className="text-lg font-semibold mb-2">
                Lofas Investment Limited
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                A Nigerian company specializing in international freight
                forwarding services, including sea and air freight, trucking,
                warehousing, distribution, and customs clearance.
              </p>
              <a
                href="https://freighthub.co/listings/lofas-investment-ltd/"
                className="text-blue-800 font-medium inline-flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More <FaArrowUp />
              </a>
            </figcaption>
          </figure>
        </div>

        {/* Client Reviews */}
        <article className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold ">
            What Our Clients Say
          </h2>
        </article>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((client, index) => (
            <div
              key={index}
              className="shadow-xl dark:bg-stone-800 bg-sky-100 rounded-xl p-6 hover:shadow-lg transition flex flex-col items-center text-center"
              data-aos="zoom-in"
              data-aos-delay={index * 200}
            >
              <Image
                src={client.image}
                alt={client.name}
                width={100}
                height={100}
                className="rounded-full mb-4 object-cover"
              />
              <p className="text-gray-600 dark:text-gray-100 text-sm mb-4 italic">
                "{client.review}"
              </p>
              <h4 className="font-semibold text-[#001f3f] dark:text-zinc-400">{client.name}</h4>
              <span className="text-xs text-gray-500">{client.role}</span>
            </div>
          ))}
        </div>
      </main>
    </section>
  )
}

export default Company
