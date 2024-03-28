// ConnectPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/navbar';
import backgroundVideo from "../assets/backgroundVideo.mp4";
import PractoInputPage from './connect/practo'; // Update the path accordingly

function ConnectPage() {
  const [practoPopupVisible, setPractoPopupVisible] = useState(false);

  const openPractoPopup = () => {
    setPractoPopupVisible(true);
  };

  const closePractoPopup = () => {
    setPractoPopupVisible(false);
  };

  return (
    <div>
      <NavBar />
      <div className="min-h-screen relative">
        {/* Image (Left Side) */}
        <div className="w-1/2 absolute inset-0">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            className="w-full h-screen object-cover brightness-85"
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        </div>

        {/* Content (Right Side) */}
        <div className="w-1/2 absolute right-0 top-1/3 p-8">
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Connect Accounts or Enter Data</h2>
            <div className="mb-8">
              {/* Connect LinkedIn */}
              <Link to="/connect/linkedin" className="bg-white text-black hover:bg-green-400 hover:text-white border border-black hover:border-green-400 py-2 px-6 rounded-full text-lg font-semibold m-3">
                Connect LinkedIn
              </Link>
              {/* Connect Practo */}
              <button
                onClick={openPractoPopup}
                className="bg-white text-black hover:bg-green-400 hover:text-white border border-black hover:border-green-400 py-2 px-6 rounded-full text-lg font-semibold m-3"
              >
                Connect Practo
              </button>
            </div>
            <p className="text-gray-700 font-semibold">OR</p>
            <div className="mt-4">
              {/* Input Data Manually */}
              <Link to="/connect/inputform" className="bg-gray-300 text-gray-700 hover:bg-gray-400 py-2 px-6 rounded-full text-lg font-semibold">
                Input Data Manually
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Island-style popup for Practo Input */}
      {practoPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <PractoInputPage />
            <button
              onClick={closePractoPopup}
              className="mt-4 bg-red-500 text-white hover:bg-red-300 py-2 px-6 rounded-full text-lg font-semibold"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ConnectPage;
