import React from 'react';
import logoImage from "../assets/haleon-logo-white.svg"

function NavBar() {
  return (
    <nav className="bg-zinc-950 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Image */}
        <a href='/'>
          <div>
            <img src={logoImage} alt="logo" className="h-8" />
          </div>
        </a>

        {/* Navigation Links (Add your links here) */}
        <div className="hidden md:flex space-x-5">
          <a href="/" className="text-white hover:text-green-400">Home</a>
          <a href="/about" className="text-white hover:text-green-400">About</a>
          <a href="/contact" className="text-white hover:text-green-400">Contact</a>
          <a href="/loginsignup" className="text-white hover:text-green-400 border border-white rounded p-2 hover:border-green-400">Login/Signup</a>
        </div>

        {/* Responsive Navigation Button */}
        <div className="md:hidden">
          {/* Add your responsive navigation button here */}
          {/* For example, you can use a hamburger menu icon */}
          {/* Replace the following line with your actual responsive menu button */}
          <button className="text-white hover:text-green-400">&#9776;</button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
