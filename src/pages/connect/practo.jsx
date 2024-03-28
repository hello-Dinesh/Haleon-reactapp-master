import React, { useState } from 'react';
import axios from 'axios';

const PractoInputPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make the POST request to your backend API
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL_API}/practo`, { 'input_string': inputValue });

      // Assuming the response contains the doctor info, you can access it as response.data
      const doctorInfo = response.data;

      // Handle the doctorInfo data as needed (e.g., storing it or displaying it)
      // parse the objectid from the doctorInfo
      const doctorId = doctorInfo._id.$oid;
      //now create a redirect link to the doctor profile page
      const redirectLink = '/user/' + doctorId;
      setSubmittedValue(inputValue);
      // Redirect the react app to the url
      window.location.replace(redirectLink);

    } catch (error) {
      // Handle errors if the API call fails
      console.error('API call error:', error);
    }
  };

  return (
    <div>

            <h1 className="text-2xl font-semibold mb-4">Enter your Practo Profile URL</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter Practo profile URL..."
                className="px-10 py-2 border rounded-md"
                value={inputValue}
                onChange={handleInputChange}
              />
              <button
                type="submit"
                className="bg-white text-black hover:bg-green-400 hover:text-white border border-black hover:border-green-400 py-2 px-6 rounded-full text-lg font-semibold m-3"
              >
                Submit
              </button>
            </form>
            
            {submittedValue && <div className='border border-black'><p className="mt-4">Fetching Profile From: {submittedValue}</p></div>}
            
          </div>
  );
};

export default PractoInputPage;
