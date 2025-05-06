import React from 'react';
import { motion } from 'framer-motion';

const projectData = [
  {
    title: 'Blockchain Simulation',
    image: 'https://portfolio-website-ruby-rho.vercel.app/project1.png',
    description:
      'Build a basic blockchain using SHA-256 hashing with features like block index, timestamp, transactions, and hash validation. Demonstrates how tampering breaks the chain integrity.',
  },
  {
    title: 'Notes Summarizer by Gemini AI',
    image: 'https://portfolio-website-ruby-rho.vercel.app/project2.PNG',
    description:
      'A Vite + React web app that lets users log in and summarize long notes using Gemini AI. Ideal for students or professionals seeking quick summaries.',
  },
  {
    title: 'Portfolio [HTML, CSS, JS]',
    image:
      'https://raw.githubusercontent.com/himanshkumar6/portfolio/refs/heads/main/src/assets/project3.png',
    description:
      'A personal portfolio using React, Web3, and smart contracts to simulate blockchain tasks like token transfers, SHA256 hashing, and fraud detection.',
  },
  {
    title: 'Autopay Finance',
    image:
      'https://raw.githubusercontent.com/himanshkumar6/autopay-finance/refs/heads/main/src/assets/Screenshot%202025-05-06%20221617.png',
    description:
      'Refining automated payments in Web3 One stop solution for subscriptions, salaries, SIPs and more automated payments in web3.',
  }
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      className="min-h-screen py-12 px-6 bg-white dark:bg-gray-900 flex flex-col items-center"
    >
      {/* Section Title */}
      <h1 className="text-4xl md:text-6xl font-bold text-cyan-500 mb-10 text-center relative">
        Projects
        <span className="block h-1 w-24 bg-cyan-500 mx-auto mt-4 rounded-full"></span>
      </h1>

      {/* Project Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 transform transition duration-300 hover:scale-105"
          >
            <img src={project.image} alt={project.title} className="w-full object-cover" />
            <div className="px-6 py-4">
              <h2 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">{project.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
