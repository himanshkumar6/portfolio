import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="min-h-20 lg:min-h-14 my-12 flex flex-col justify-center items-center px-6 py-2 bg-white dark:bg-gray-900"
    >
      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold text-cyan-500 relative inline-block mb-8">
        About
        <span className="block h-1 w-16 bg-cyan-500 mx-auto mt-2 rounded-full"></span>
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl max-w-3xl text-gray-700 dark:text-gray-300 text-center leading-relaxed">
        I'm Himanshu, a passionate Frontend Developer with expertise in React.js and Tailwind CSS.
        I enjoy building modern, responsive web interfaces that are both beautiful and functional.
        With a love for clean code and attention to detail, I aim to create user-friendly experiences.
        Let's build something amazing together!
      </p>
    </motion.section>
  );
};

export default About;
