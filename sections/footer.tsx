"use client";
import { services } from './service';
import React from 'react';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  return (
    <footer className="bg-black text-white py-20"> {/* Increased padding from py-10 to py-20 */}
      <div className="container mx-auto px-4 sm:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Section */}
          <div className="flex flex-col items-start space-y-14">
            {/* Logo */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1 }}
              className="flex items-center gap-4"
            >
              <motion.img
                src="/logo.svg"
                alt="swamiassociatesmtp"
                className="w-16 h-16"
                initial={{ x: -50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 1 }}
              />
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-xl sm:text-4xl break-words"
                style={{ fontFamily: "var(--font-minion)" }}
              >
                Swami Associates
              </motion.a>
            </motion.div>
            <div className="md:hidden flex flex-col ">
              <a href="mailto:swamiassociatesmtp@gmail.com" className="text-lg mb-2">
                swamiassociatesmtp@gmail.com
              </a>
              <a href="tel:+919865619755" className="text-lg">
                +91 98656 19755
              </a>
              <a href="tel:+919842219755" className="text-lg">
                +91 98422 19755
              </a>
            </div>
            {/* Our Sectors */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-wrap gap-2"
            >
              {services.map((data) => (
                <a
                  href="mailto:swamiassociatesmtp@gmail.com"
                  key={data.title}
                  className="border border-white text-white px-3 py-1 rounded-full hover:border-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  {data.title}
                </a>
              ))}
            </motion.div>

            {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex flex-wrap gap-8 w-full justify-center md:justify-start"            >
              <a
                href="https://www.instagram.com/swamiassociates_mtp?igsh=MWhwaGtucXJjYXpuOA=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </motion.div>
          </div>

          {/* Right Section */}
          <div className="hidden md:flex flex-col items-start md:items-end space-y-14">            {/* Phone Numbers */}
            <div className='flex flex-wrap flex-col '>
              <motion.a
                href="tel:+919865619755"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-xl hover:underline "
              >
                +91 98656 19755
              </motion.a>
              <motion.a
                href="tel:+919842219755"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-xl hover:underline"
              >
                +91 98422 19755
              </motion.a>
            </div>

            {/* Email */}
            <motion.a
              href="mailto:swamiassociatesmtp@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xl sm:text-4xl break-words "
            >
              swamiassociatesmtp@gmail.com
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
