"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export const services = [
  { id: 1, title: "Design and Planning", image: "https://via.placeholder.com/200x100/FFFF00/000000" },
  { id: 2, title: "Construction", image: "https://via.placeholder.com/200x100/FFFF00/000000" },
  { id: 3, title: "Structural Design", image: "https://via.placeholder.com/200x100/0000FF/FFFFFF" },
  { id: 4, title: "3D Elevations", image: "https://via.placeholder.com/200x100/00FF00/FFFFFF" },
  { id: 5, title: "Interior Design", image: "https://via.placeholder.com/200x100/FFFF00/000000" },
  { id: 6, title: "Approval Drawings", image: "https://via.placeholder.com/200x100/FF6600/FFFFFF" },
  { id: 7, title: "Estimation", image: "https://via.placeholder.com/200x100/FFFF00/000000" },
  // { id: 8, title: "Valuations"asdf, image: "https://via.placeholder.com/200x100/FF0000/FFFFFF" },
];

export default function Service() {
  const [hoveredService, setHoveredService] = useState<any>(null); // Track which service is hovered

  return (
    <div className="bg-gray-200 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Service's</h2>

        {services.slice(0, 7).map((service) => (
          <Link
            href="mailto:swamiassociatesmtp@gmail.com"
            className="block w-full h-full"
            key={service.id}
          >
            <motion.div
              key={service.id}
              className={`relative flex items-center justify-between px-6 py-7 cursor-pointer border-b-2 ${hoveredService === service.id
                ? "bg-slate-50 text-red-500 border-red-500"
                : "bg-transparent text-gray-600 border-gray-300"
                }`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >

              {/* Service Title */}
              <h3 className="text-xl font-semibold">{service.title}</h3>

              {/* Arrow Icon */}
              <motion.div
                animate={{
                  rotate: hoveredService === service.id ? 180 : 0,
                }}
              >
                <span
                  className={`text-2xl ${hoveredService === service.id ? "text-red-600" : "text-red-400"
                    }`}
                >
                  →
                </span>
              </motion.div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
