"use client"
import { services } from './service';

export function Test() {

  return (
    <footer>
      <h1>
        Social Media
      </h1>
      <h3>
        <a href="https://www.instagram.com/swamiassociates_mtp?igsh=MWhwaGtucXJjYXpuOA==">Instagram</a>
      </h3>

      <h1>Address:</h1>
      <h3>
        2B CRK BUILDING,ANNAJI RAO ROAD, METTUPALAYAM, COIMBATORE.641104
      </h3>
      <h1>Contact us</h1>
      <h3>
        <a href="mailto:swamiassociatesmtp@gmail.com">Email</a>
        <a href="tel:+919865619755">Office Number</a>
        <a href="tel:+919842219755">Mobile Number</a>
      </h3>

    </footer>
  )
}


import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-4"
          >
            <img src="/logo.svg" alt="swamiassociatesmtp" className="w-16 h-16" />
          </motion.div>
          <motion.a
            href="mailto:swamiassociatesmtp@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl mb-4"
          >
            swamiassociatesmtp@gmail.com
          </motion.a>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex space-x-4 mb-4"
          >
            <a href="https://www.instagram.com/swamiassociates_mtp?igsh=MWhwaGtucXJjYXpuOA==https://www.instagram.com/swamiassociates_mtp?igsh=MWhwaGtucXJjYXpuOA==" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">X</a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap justify-center space-x-2 mb-4"
          >
            <a href="/contact" className="hover:underline">Contact</a>
            <a href="/faqs" className="hover:underline">FAQs</a>
            <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
          </motion.div>
          <span className="text-white font-semibold">Our sectors:</span>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap justify-center space-x-2 mb-4"
          >
            {services.map((data) => (
              < a
                href="/agencies"
                className="border border-white text-white px-4 py-2 rounded-full hover:border-white hover:bg-white hover:text-black transition-all duration-300"
              >
                {data.title}
              </a>
            ))}
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="px-4 py-2 bg-white text-black rounded-full hover:bg-gray-300"
          >
            Contact Us
          </motion.button>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-4"
          >
            <span>© Swami  2024</span>
          </motion.div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
