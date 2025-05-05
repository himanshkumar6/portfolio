import React from 'react';
import { motion } from 'framer-motion';

const bubbleVariants = {
  animate: {
    y: [0, -30, 0, 30, 0],
    x: [0, 10, 0, -10, 0],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative overflow-hidden lg:min-h-screen pt-20 flex flex-col justify-center items-center text-center lg:pt-20 bg-gradient-to-r from-blue-50 to-white dark:from-gray-800 dark:to-gray-900"
    >
      {/* Animated background bubbles */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-cyan-300 rounded-full opacity-50 blur-2xl"
        variants={bubbleVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-20 right-16 w-24 h-24 bg-blue-400 rounded-full opacity-50 blur-2xl"
        variants={bubbleVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-16 h-16 bg-purple-400 rounded-full opacity-50 blur-2xl"
        variants={bubbleVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-10 left-1/4 w-20 h-20 bg-pink-400 rounded-full opacity-40 blur-2xl"
        variants={bubbleVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-10 right-1/4 w-28 h-28 bg-indigo-400 rounded-full opacity-40 blur-2xl"
        variants={bubbleVariants}
        animate="animate"
      />

      {/* Hero Image with Glow */}
      <div className="relative lg:min-h-96 min-h-80 lg:w-96 w-80 rounded-full hover:shadow-[0_0_60px_#00FFFF] transition-all duration-500 hover:scale-105 mt-10 mb-6">
        <img
          src="https://portfolio-website-ruby-rho.vercel.app/image.jpg"
          alt="Logo"
          className="rounded-full w-full h-full object-cover ring-4 ring-white"
        />
      </div>

      {/* Hero Text */}
      <h2 className="text-4xl md:text-6xl font-bold my-6">Hi, I'm <span className='text-cyan-400'>Himanshu</span></h2>
      <p className="text-xl md:text-2xl max-w-xl">
        Frontend Developer | React.js | Tailwind CSS
      </p>
      <a
        href="#projects"
        className="my-10 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700"
      >
        See My Work
      </a>
    </motion.section>
  );
};

export default Hero;
