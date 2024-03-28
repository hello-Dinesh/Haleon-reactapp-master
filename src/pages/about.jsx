// AboutPage.js
import React from 'react';
import NavBar from '../components/navbar';
import backgroundImage from "../assets/landing-background.jpeg";

function AboutPage() {
  return (
    <div>
      <NavBar /> {/* Include the NavBar component */}
      <div className="min-h-screen relative">
        {/* Image (Left Side) */}
        <div className="w-1/2 absolute inset-0">
          <img src={backgroundImage} alt="Your Image" className="w-full h-full object-cover blur-[2px]" />
        </div>
         {/* Content (Right Side) */}
         <div className="w-1/2 absolute right-0 top-0 bottom-0 bg-white bg-opacity-80 flex flex-col justify-center items-center p-8">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>

          <p className="text-lg text-gray-700 mb-4">
            Sample Text
          </p>

          <p className="text-lg text-gray-700 mb-4">
            Sample Text
          </p>

          {/* Add more content as needed */}
        </div>
    </div>
    </div>
  );
}

export default AboutPage;