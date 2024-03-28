// Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <div className="bg-zinc-950 text-white p-4 text-center">
      <p className="text-2xl font-bold">Contact Me:</p>
      <p className="text-lg">Email: example@example.com</p>
      <p className="text-lg">Phone: +123 456 7890</p>
      <div className="mt-4 flex justify-center items-center space-x-4">
      <a href="/map" className="text-white hover:text-green-400 border border-white rounded p-2 hover:border-green-400">View Map</a>
      <a href="/viewall" className="text-white hover:text-green-400 p-2 border border-white rounded hover:border-green-400">Browse Doctors</a>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
};

export default Footer;
