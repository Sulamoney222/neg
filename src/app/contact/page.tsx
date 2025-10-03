"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_9gmgckd", "template_c90iuxw", form.current, {
        publicKey: "fMWx8MVFvLENDUc0i",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-8">
            We&apos;re here to help. Reach out to us with any questions or
            inquiries, and our team will respond promptly.
          </p>

          <form className="space-y-5" ref={form} onSubmit={sendEmail}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Enter the subject"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <textarea
              rows={5}
              placeholder="Enter your message"
              name="message"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-300 active:scale-95 hover:text-blue-700 cursor-pointer transition"
            >
              Submit
            </button>
          </form>
        </motion.div>

        {/* Other Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h3 className="text-2xl font-semibold capitalize">
            Other Ways to Connect
          </h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Phone className="text-blue-600 w-6 h-6" />
              <p>+234 803 797 3150</p>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-blue-600 w-6 h-6" />
              <p>negloballog@gmail.com</p>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="text-blue-600 w-6 h-6" />
              <p>
                44, Suite 23, Old Railway Line Off Creek Road, Apapa Lagos
                State, Nigeria.
              </p>
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="w-full h-64 rounded-lg overflow-hidden shadow">
            <iframe
              src="https://maps.google.com/maps?hl=en&q=Apapa%2C%20Lagos%20State&t=&z=13&ie=UTF8&iwloc=B&output=embed"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
