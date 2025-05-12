"use client";

import React, { useRef, useState, FormEvent, ChangeEvent } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { styles } from "../styles";
import GlobeCanvas from "@/models/Globe";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    console.log("Submitted form:", form);
    setLoading(false);
  };

  return (
    <div className="xl:mt-12 flex flex-col items-center min-h-screen bg-blue-800 px-6 sm:px-10 py-16 rounded-t-[7rem]">
      {/* Top Texts */}
      <p className={`${styles.sectionSubText} text-center`}>Get in touch</p>
      <h3 className={`${styles.sectionHeadText} text-center mb-10`}>Contact.</h3>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-10 w-full max-w-7xl justify-center items-start">
        {/* Contact Form */}
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          initial="hidden"
          animate="show"
          className="w-full lg:w-1/2 bg-black-100 p-8 rounded-2xl"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit bg-amber-200 hover:bg-amber-50 text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          initial="hidden"
          animate="show"
        >
          <GlobeCanvas />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
