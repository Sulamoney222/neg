"use client"
import React from 'react';
import Image from 'next/image';
import Pic from '../../public/download.jpg';
import Logo from '../../public/logo.jpg';
import './global.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';


const Hero = () => {
 
useGSAP(() => {
  gsap.to(".upDown", { translateY: 0 }, {transition:2} , {duration:5000}, );
}, []);


  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <Image
        src={Pic}
        alt="Logistics Background"
        fill
        className="object-cover object-center z-10 opacity-10"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* Content */}
      <main className="relative upDown -translate-y-100 z-20 flex flex-col items-center justify-center text-center text-white h-full px-4">
        <article className="max-w-2xl">
            
            <div className="flex items-center justify-center gap-2 mb-4">
  <Image
    src={Logo}
    alt="Neglobal Logo"
    width={40}
    height={40}
    className="rounded-full"
  />
  <h1 className="text-3xl md:text-5xl font-bold text-sky-400">Neglobal</h1>
</div>

          <h1 className="text-3xl md:text-3xl font-bold mb-4">
            Your Global Logistics Partner 
          </h1>
          <h2 className="text-lg md:text-xl mb-6">
            Streamlining your supply chain with innovative solutions and reliable service.
          </h2>
        </article>

        <div className="space-x-4">
          <a href="/quote">
          <button className="bg-yellow-500 cursor-pointer active:scale-50 text-black px-6 py-2 rounded hover:bg-yellow-400 transition">
            Get a Quote
          </button></a>
          <a href="/about">
          <button className="border active:scale-50 cursor-pointer border-white px-6 py-2 rounded hover:bg-white hover:text-black transition">
            Learn More
          </button></a>
        </div>
      </main>
    </section>
  );
};

export default Hero;
