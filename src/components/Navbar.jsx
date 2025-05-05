import React, { useState } from 'react';

const Navbar = () => {
  const [Open, setOpen] = useState(false);

  return (
    <nav className="p-4 shadow-md bg-white dark:bg-gray-800 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/">
          <h1 className="text-2xl font-bold underline-offset-8 underline">
            Himanshu's <span className="text-cyan-600">Portfolio</span>
          </h1>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setOpen(!Open)} className="md:hidden focus:outline-none">
          {Open ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {Open && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-md shadow-md z-40">
          <ul className="flex flex-col items-center gap-6 py-6 text-xl font-semibold">
            <li><a href="#about" className="hover:text-blue-600" onClick={() => setOpen(false)}>About</a></li>
            <li><a href="#projects" className="hover:text-blue-600" onClick={() => setOpen(false)}>Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-600" onClick={() => setOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
