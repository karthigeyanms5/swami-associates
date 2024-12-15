"use client";
import { services } from './service';
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 sm:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Section */}
          <div className="flex flex-col items-start space-y-4">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <img src="/logo.svg" alt="swamiassociatesmtp" className="w-16 h-16" />
            </motion.div>

            {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex flex-wrap gap-2"
            >
              <a
                href="https://www.instagram.com/swamiassociates_mtp?igsh=MWhwaGtucXJjYXpuOA=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Facebook
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                X
              </a>
            </motion.div>

            {/* Our Sectors */}
            <span className="text-white font-semibold">Our Service:</span>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-wrap gap-2"
            >
              {services.map((data) => (
                <a
                  href="#"
                  key={data.title}
                  className="border border-white text-white px-3 py-1 rounded-full hover:border-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  {data.title}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-start md:items-end space-y-4">
            {/* Email */}
            <motion.a
              href="mailto:swamiassociatesmtp@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xl sm:text-4xl break-words"
            >
              swamiassociatesmtp@gmail.com
            </motion.a>

            {/* Phone Numbers */}
            <div>
              <motion.a
                href="tel:+919865619755"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-xl hover:underline"
              >
                +91 98656 19755
              </motion.a>
              <br />
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

            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="mt-4"
            >
              <span>© Swami 2024</span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
