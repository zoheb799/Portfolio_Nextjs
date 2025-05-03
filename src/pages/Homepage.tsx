"use client"
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HoverImageFragments from "@/components/HoverImageFragments";

const roles = ["Full Stack Developer", "DevOps Engineer", "UI/UX Designer"];

const Homepage = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen text-white flex flex-col-reverse lg:flex-row items-center justify-center px-8 overflow-hidden">
      {/* Left Section */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="lg:w-1/3 flex flex-col justify-center items-center lg:items-start text-center lg:text-left"
      >
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          Hey there! <br /> I'm Khaja Zoheb Uddin
        </h1>
        <motion.h2
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-2xl lg:text-3xl font-medium text-gray-400 mb-4"
        >
          {roles[index]}
        </motion.h2>
        <div className="flex w-10 gap-4 justify-start">
          <a
            href="mailto:your-email@example.com"
            className="text-white hover:text-gray-400 transition duration-300 text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="pi pi-envelope"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/your-profile"
            className="text-white hover:text-gray-400 transition duration-300 text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="pi pi-linkedin"></i>
          </a>
          <a
            href="https://github.com/your-profile"
            className="text-white hover:text-gray-400 transition duration-300 text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="pi pi-github"></i>
          </a>
        </div>
      </motion.div>

      {/* Right Section - Image Fragments */}
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex justify-center items-center lg:w-1/3"
      >
        <HoverImageFragments />
      </motion.div>
    </div>
  );
};

export default Homepage;
