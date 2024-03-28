// LoginSignupPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/navbar';
import backgroundImage from "../assets/landing-background.jpeg";
import OTPInput from '../components/otpinput';

function LoginSignupPage({ onBackButtonClick }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);
  const [showOTPInput, setShowOTPInput] = useState(false);
  const [otpValidationStatus, setOTPValidationStatus] = useState('');
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (/^\d{10}$/.test(phoneNumber)) {
      console.log('Submitted phone number:', phoneNumber);
      setIsSubmitted(true);
      setShowOTPInput(true);
    } else {
      setIsPhoneNumberValid(false);
    }
  };

  const handleOTPSubmit = (otp) => {
    if (otp === '1234') {
      history('/connect');
    } else {
      setOTPValidationStatus('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="justify-center">
      <div className="w-full max-w-md p-8 rounded-md relative">
        <h2 className="text-2xl font-semibold mb-4 text-center">Login/Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-gray-700 font-semibold mb-2">
              Phone Number:
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
                setIsPhoneNumberValid(true);
              }}
              className={`border border-gray-300 rounded-md px-4 py-2 w-full ${
                !isPhoneNumberValid ? 'border-red-500' : ''
              }`}
              placeholder="Enter your phone number"
              required
            />
            {!isPhoneNumberValid && (
              <p className="text-red-500 text-sm mt-2">Please enter a valid 10-digit phone number.</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-black text-white hover:bg-green-400 py-2 px-6 rounded-full text-lg font-semibold mb-2">
          
            {isSubmitted ? 'Submitted' : 'Submit'}
          </button>
        </form>

        {showOTPInput && (
          <div className="mt-8">
            <OTPInput onSubmit={handleOTPSubmit} />
            {otpValidationStatus && (
              <p className="text-red-500 text-sm mt-2">{otpValidationStatus}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginSignupPage;
