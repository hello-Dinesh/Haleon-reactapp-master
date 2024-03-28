// ContactPage.js
import React from 'react';
import NavBar from '../components/navbar'; // Import the NavBar component

function ContactPage() {
  return (
    <div>
      <NavBar /> {/* Include the NavBar component */}
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto py-16">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name:</label>
            <input type="text" id="name" name="name" className="border border-gray-300 rounded-md px-4 py-2 w-full" />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email:</label>
            <input type="email" id="email" name="email" className="border border-gray-300 rounded-md px-4 py-2 w-full" />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message:</label>
            <textarea id="message" name="message" rows="4" className="border border-gray-300 rounded-md px-4 py-2 w-full"></textarea>
          </div>

          <button className="bg-black text-white hover:bg-green-400 py-2 px-6 rounded-full text-lg font-semibold mb-2">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
