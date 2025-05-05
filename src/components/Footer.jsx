import React from 'react'
import { motion } from 'framer-motion'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


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


const Footer = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative overflow-hidden lg:min-h-10 pt-2 flex lg:pt-2 bg-gradient-to-r from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 justify-between "
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


      <div className='flex items-center gap-10 my-6 font-semibold lg:text-xl text-sm  text-white w-full justify-around'>
        <div className='text-xl underline-offset-8 underline'>Himanshu's <span className='text-cyan-600'>Portfolio</span></div>
        <ul className='flex gap-5'>
          <li><a href=""><FaInstagram size={30} className='hover:shadow-[0_0_60px_#00FFFF] bg-transparent' /></a></li>
          <li><a href=""><FaGithub size={30} className='hover:shadow-[0_0_60px_#00FFFF] bg-transparent' /></a></li>
          <li><a href=""><FaWhatsapp size={30} className='hover:shadow-[0_0_60px_#00FFFF] bg-transparent' /></a></li>
        </ul>
      </div>
    </motion.section>
  )
}

export default Footer