// OTPInput.js
import React, { useState } from 'react';

function OTPInput({ onSubmit }) {
  const [otp, setOTP] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(otp);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="otp" className="block text-gray-700 font-semibold mb-2">
          Enter OTP (4 digits):
        </label>
        <input
          type="text" // Change the input type to "text"
          id="otp"
          name="otp"
          value={otp}
          onChange={(e) => setOTP(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 w-full"
          placeholder="Enter OTP"
          minLength="4"
          maxLength="4"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-black text-white hover:bg-green-400 py-2 px-6 rounded-full text-lg font-semibold mb-2"
      >
        Submit OTP
      </button>
    </form>
  );
}

export default OTPInput;