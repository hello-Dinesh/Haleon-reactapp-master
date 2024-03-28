import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../../components/navbar';
import backgroundImage from '../../assets/landing-background.jpeg';

const LinkedInURL = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Make the automatic API call on component mount
    const fetchData = async () => {
      try {
        // Make the POST request to your backend API
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL_API}/authenticate`); // Replace with your input data
        
        const redirectLink = response.data.auth_url;

        // Redirect the react app to the URL received from the API
        window.location.replace(redirectLink);
      } catch (error) {
        // Handle errors if the API call fails
        console.error('API call error:', error);
      } finally {
        // Set loading to false after the API call is complete
        setLoading(false);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs only once on component mount

  return (
    <div>
      <NavBar />
      <div className="flex">
        <div className="w-1/2 h-screen bg-cover bg-blur" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
        <div className="w-1/2">
          <div className="text-center mt-16 p-8">
            {loading && <div className='border border-black'><p className="mt-4">Loading...</p></div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedInURL;
