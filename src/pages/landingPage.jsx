// LandingPage.js
import React, { useState } from 'react';
import NavBar from '../components/navbar';
import LoginSignupPage from './loginsignup';
import backgroundVideo from '../assets/backgroundVideo.mp4';

function LandingPage() {
  const [showLoginSignup, setShowLoginSignup] = useState(false);

  const toggleLoginSignup = () => {
    setShowLoginSignup(!showLoginSignup);
  };

  const handleBackButtonClick = () => {
    setShowLoginSignup(false);
  };

  return (
    <div>
      <NavBar />
      <div className="relative">
        {/* Background Image */}
        <div className="w-full h-screen relative">
          {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="w-full h-screen object-cover blur-md brightness-70"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>

          {/* Floating Island with Buttons */}
          
          <div
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-95 p-4 shadow-md rounded-lg transition-all ${
              showLoginSignup ? 'w-1/3' : 'w-1/4'
            }`}  // Set the fixed height here (e.g., 300px)
          >
            
            {showLoginSignup ? (
              <div>
                <button onClick={handleBackButtonClick} className="bg-white text-black hover:bg-green-400 hover:text-white border border-black hover:border-green-400 py-2 px-6 rounded-full text-lg font-semibold m-3">
                &#8592; Back
                </button>
                <LoginSignupPage />
                {/* Back Button */}
                
              </div>
            ) : (
              <div>
                <h1 className="text-4xl font-bold mb-4 text-center text-black">Welcome</h1>
                <p className="text-lg text-gray-700 mb-6 text-center">Login/Create your Haleon Account</p>
                <button onClick={toggleLoginSignup} className="bg-black text-white hover:bg-green-400 py-2 px-6 rounded-full text-lg font-semibold mb-2 m-10">
                  Sign Up
                </button>
                <button onClick={toggleLoginSignup} className="bg-white text-black hover:bg-green-400 hover:text-white border border-black hover:border-green-400 py-2 px-6 rounded-full text-lg font-semibold">
                  Log In
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
