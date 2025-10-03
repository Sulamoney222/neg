"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";   // ✅ Import Next.js Image
import log1 from "./../../../public/log1.jpeg";
import log2 from "./../../../public/log2.jpeg";
import log3 from "./../../../public/log3.jpeg";
import mission from "./../../../public/mission.jpeg";
import vision from "./../../../public/vision.jpeg";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <main className="max-w-7xl mx-auto px-6">
        {/* About Section */}
        <article className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-3xl md:text-5xl font-bold text-[#001f3f]">
            About Us
          </h1>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
            Since our establishment in 2010,{" "}
            <span className="font-semibold text-sky-600">
              NEGLOBAL LOGISTICS LTD
            </span>{" "}
            has been driven by one mission: transforming the logistics
            industry through <span className="font-bold">innovation, trust,</span>{" "}
            and an unwavering commitment to customer satisfaction. We are your
            reliable partner in logistics, clearing, and forwarding — ensuring
            your goods move seamlessly, across borders and industries.
          </p>
        </article>

        {/* Company Info Table */}
        <div className="overflow-x-auto mb-16" data-aos="zoom-in">
          <table className="w-full md:w-2/3 mx-auto border border-gray-200 shadow-lg rounded-lg overflow-hidden">
            <thead className="bg-[#001f3f] text-white">
              <tr>
                <th className="py-3 px-6 text-left text-lg">Company Info</th>
                <th className="py-3 px-6 text-left text-lg">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-100 transition">
                <td className="py-3 px-6 font-semibold text-gray-700">
                  Registration Number
                </td>
                <td className="py-3 px-6 text-sky-600 font-bold text-lg">
                  RC 8749717
                </td>
              </tr>
              <tr className="hover:bg-gray-100 transition">
                <td className="py-3 px-6 font-semibold text-gray-700">CEO</td>
                <td className="py-3 px-6 text-[#ff9800] font-bold text-lg">
                  NASIRU NURUDEEN
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {/* Mission */}
          <div
            className="bg-white shadow-md p-8 rounded-xl hover:shadow-lg transition"
            data-aos="fade-right"
          >
            <Image
              src={mission}
              alt="Mission"
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <h2 className="text-2xl font-bold text-[#001f3f] mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To provide seamless, efficient, and reliable logistics, clearing,
              and forwarding solutions that empower businesses and individuals
              to move goods across borders with confidence and ease.
            </p>
          </div>

          {/* Vision */}
          <div
            className="bg-white shadow-md p-8 rounded-xl hover:shadow-lg transition"
            data-aos="fade-left"
          >
            <Image
              src={vision}
              alt="Vision"
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <h2 className="text-2xl font-bold text-[#001f3f] mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To be the global leader in logistics and supply chain solutions,
              recognized for innovation, reliability, and an exceptional
              commitment to customer success.
            </p>
          </div>
        </div>

        {/* Team/Logistics Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up">
          <Image
            src={log1}
            alt="Logistics 1"
            className="rounded-lg shadow-md hover:scale-105 transition-transform"
          />
          <Image
            src={log2}
            alt="Logistics 2"
            className="rounded-lg shadow-md hover:scale-105 transition-transform"
          />
          <Image
            src={log3}
            alt="Logistics 3"
            className="rounded-lg shadow-md hover:scale-105 transition-transform"
          />
        </div>
      </main>
    </section>
  );
};

export default AboutUs;
