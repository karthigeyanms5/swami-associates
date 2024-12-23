"use client"
import React from "react";
import { motion } from "framer-motion";

const projects = [
    {
        id: 1,
        title: "Saravanampatti, Coimbatore",
        image: "work/sr.jpg", // Replace with your image URL
    },
    {
        id: 2,
        title: "Marudur, Coimbatore",
        image: "work/trg.jpg", // Replace with your image URL
    },
    {
        id: 3,
        title: "Teachers Colony, Mettupalaiyam",
        image: "work/kar.png", // Replace with your image URL
    },
];

const Work = () => {
    return (
        <section className="bg-white py-12 px-4 md:px-16" id="work">
            <div className="max-w-7xl mx-auto">
                {/* Title Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Recent <span className="italic">Projects</span></h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        The art and science of designing buildings and other structures. Here are some of our featured projects.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid gap-8 md:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="overflow-hidden rounded-lg shadow-lg group"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-60 object-cover transition-transform group-hover:scale-105"
                            />
                            <div className="p-4 bg-gray-50">
                                <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
  <a
    href="https://www.instagram.com/swamiassociates_mtp"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
      View All
    </button>
  </a>
</div>

            </div>
        </section>
    );
};

export default Work;
