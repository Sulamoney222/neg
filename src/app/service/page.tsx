"use client";
import React, { useEffect, useState } from "react";
import { 
  FaTruck, FaWarehouse, FaRoute, FaGlobe, FaShieldAlt, 
  FaFileAlt, FaBalanceScale, FaClipboardCheck, 
  FaPlane, FaWater, FaTrain, FaCar 
} from "react-icons/fa";
import AOS from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "aos/dist/aos.css";

interface Service {
  icon: React.ReactNode;
  title: string;
  text: string;
  more: string;
}

const Services = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const logistics: Service[] = [
    { icon: <FaTruck size={30} className="text-blue-600" />, title: "Transportation", text: "Efficient and reliable transportation solutions for all types of cargo.", more: "We provide modern fleet management, GPS tracking, and door-to-door delivery services." },
    { icon: <FaWarehouse size={30} className="text-blue-600" />, title: "Warehousing", text: "Secure and scalable warehousing options to manage your inventory.", more: "Our facilities are equipped with 24/7 monitoring, climate control, and scalable space." },
    { icon: <FaRoute size={30} className="text-blue-600" />, title: "Distribution", text: "Streamlined distribution services to ensure timely delivery.", more: "With optimized routing and scheduling, we guarantee efficiency." },
    { icon: <FaGlobe size={30} className="text-blue-600" />, title: "Global Logistics", text: "Comprehensive logistics solutions for international shipments.", more: "We handle customs clearance, documentation, and multi-modal transport worldwide." },
  ];

  const clearing: Service[] = [
    { icon: <FaShieldAlt size={30} className="text-blue-600" />, title: "Customs Clearance", text: "Expert handling of customs procedures.", more: "Our experts simplify customs documentation and compliance." },
    { icon: <FaClipboardCheck size={30} className="text-blue-600" />, title: "Bonded Warehousing", text: "Secure storage of goods under customs control.", more: "We offer bonded facilities ensuring compliance and flexibility." },
    { icon: <FaFileAlt size={30} className="text-blue-600" />, title: "Permits & Licenses", text: "Assistance with necessary permits and licenses.", more: "We streamline the process of obtaining trade permits." },
    { icon: <FaBalanceScale size={30} className="text-blue-600" />, title: "Compliance Management", text: "Ensuring adherence to regulatory requirements.", more: "We help avoid costly delays and penalties." },
  ];

  
  const forwarding: Service[] = [
    { icon: <FaPlane size={30} className="text-blue-600" />, title: "Air Freight", text: "Fast and reliable air freight services.", more: "We offer global air cargo with priority handling." },
    { icon: <FaWater size={30} className="text-blue-600" />, title: "Ocean Freight", text: "Cost-effective ocean freight for large volumes.", more: "We manage FCL, LCL, and bulk cargo shipments worldwide." },
    { icon: <FaTrain size={30} className="text-blue-600" />, title: "Rail Freight", text: "Efficient rail services for transport.", more: "Eco-friendly and cost-efficient options available." },
    { icon: <FaCar size={30} className="text-blue-600" />, title: "Road Freight", text: "Flexible road freight options.", more: "We cover last-mile deliveries and long-haul trucking." },
  ];

  // Card Component
  const ServiceCard = ({ service, index }: { service: Service; index: number }) => (
    <div
      role="button"
      tabIndex={0}
      className="relative bg-white dark:bg-zinc-900 p-6 shadow-xl rounded-xl overflow-hidden group cursor-pointer transition flex flex-col items-center text-center"
      data-aos="zoom-in"
      data-aos-delay={index * 150}
      onClick={() => setActiveCard(activeCard === index ? null : index)}
      onKeyPress={() => setActiveCard(activeCard === index ? null : index)}
    >
      {service.icon}
      <h4 className="font-semibold mt-4 text-lg">{service.title}</h4>
      <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">{service.text}</p>

      {/* Stripe Effect */}
      <div
        className={`absolute bottom-0 left-0 w-full bg-blue-600 text-white p-4 transition-transform duration-500 ease-in-out ${
          activeCard === index ? "translate-y-0" : "translate-y-full"
        } group-hover:translate-y-0`}
      >
        <p className="text-sm">{service.more}</p>
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-gray-50 dark:bg-black">
      <main className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <article className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-3xl md:text-5xl font-bold text-[#001f3f] dark:text-white">
            Our Services
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We offer a comprehensive suite of logistics, clearing, and forwarding services tailored to meet your specific needs. 
            Our experienced team ensures seamless handling of your shipments, from origin to destination.
          </p>
        </article>

        {/* Carousel */}
        <article className="mb-16" data-aos="fade-up">
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            effect="fade"
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <SwiperSlide>
              <video autoPlay loop muted playsInline className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover">
                <source src="/new.mp4" type="video/mp4" />
              </video>
            </SwiperSlide>
            <SwiperSlide>
              <video autoPlay loop muted playsInline className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover">
                <source src="/secVid.mp4" type="video/mp4" />
              </video>
            </SwiperSlide>
            <SwiperSlide>
              <video autoPlay loop muted playsInline className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover">
                <source src="/vid.mp4" type="video/mp4" />
              </video>
            </SwiperSlide>
          </Swiper>
        </article>

        {/* Services Sections */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#001f3f] dark:text-white">Logistics Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {logistics.map((service, index) => <ServiceCard key={index} service={service} index={index} />)}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#001f3f] dark:text-white">Clearing Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clearing.map((service, index) => <ServiceCard key={index} service={service} index={index + 10} />)}
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-8 text-center text-[#001f3f] dark:text-white">Forwarding Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {forwarding.map((service, index) => <ServiceCard key={index} service={service} index={index + 20} />)}
          </div>
        </div>
      </main>
    </section>
  );
};

export default Services;
