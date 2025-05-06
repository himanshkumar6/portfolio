import React from 'react'
import { motion } from 'framer-motion'
import project3 from './src/assets/project3.png'

const Projects = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen lg:min-h-14 my-12 flex flex-col justify-center items-center px-6 py-2 bg-white dark:bg-gray-900"
    >
      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold text-cyan-500 relative inline-block mb-8">
        Projects
        <span className="block h-1 w-32 bg-cyan-500 mx-auto mt-6 rounded-full"></span>
      </h1>
      <div className='flex flex-wrap justify-center items-center gap-8'>
        {/* Card 1 */}
        <div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition-transform transform hover:scale-105 duration-300">
            <img className="w-full" src="https://portfolio-website-ruby-rho.vercel.app/project1.png" alt="Project 1" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">BlockChain Simulation</div>
              <p className="text-gray-700 dark:text-gray-300 text-base">
                Build a basic blockchain using any language with SHA-256 hashing, blocks containing index, timestamp, transactions, previous and current hashes. Include a blockchain class to add/validate blocks. Optionally, add proof-of-work. Print the full chain and show how tampering breaks it
              </p>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition-transform transform hover:scale-105 duration-300">
            <img className="w-full" src="https://portfolio-website-ruby-rho.vercel.app/project2.PNG" alt="Project 2" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Notes Summarizer by Gemini AI</div>
              <p className="text-gray-700 dark:text-gray-300 text-base">
                A modern Vite + React web app that allows users to log in securely via email and password, and instantly summarize long notes using Gemini AI. Users can input text, and the app returns concise summaries powered by the Gemini API—perfect for students, or anyone looking to save time
              </p>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition-transform transform hover:scale-105 duration-300">
            <img className="w-full" src={project3} alt="Project 1" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Portfolio [HTML,CSS,JS]</div>
              <p className="text-gray-700 dark:text-gray-300 text-base">
                A personal portfolio website built with React.js, Web3, and smart contracts to simulate blockchain operations like token transfers, SHA256 hashing, fraud detection, and ledger management. The project highlights skills in frontend development and blockchain integration, with code hosted on GitHub
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Projects
