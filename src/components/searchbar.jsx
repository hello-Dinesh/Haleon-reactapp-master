import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchBar = ({ onSearch, onReset }) => {
  const [searchParams, setSearchParams] = useState({ city: '', name: '', specialization: '' });
  const [cityOptions, setCityOptions] = useState([]); // State for city options
  const [specializationOptions, setSpecializationOptions] = useState([]); // State for specialization options
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // State for dropdown visibility

  useEffect(() => {
    // Fetch city options from your API endpoint
    const fetchCityOptions = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL_API}/cities`);
        setCityOptions(response.data);
      } catch (error) {
        console.error('Error fetching city options:', error);
      }
    };

    // Fetch specialization options from your specializations endpoint
    const fetchSpecializationOptions = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL_API}/specializations`);
        setSpecializationOptions(response.data);
      } catch (error) {
        console.error('Error fetching specialization options:', error);
      }
    };

    fetchCityOptions();
    fetchSpecializationOptions();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prevParams) => ({
      ...prevParams,
      [name]: value,
    }));
  };

  const handleSearchClick = () => {
    onSearch(searchParams);
  };

  const handleResetClick = () => {
    setSearchParams({ city: '', name: '', specialization: '' });
    onReset();
  };

  const handleDropdownToggle = () => {
    setIsDropdownVisible((prevValue) => !prevValue);
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <div className="mb-4 relative">
        <input
          className="w-full py-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Name"
          name="name"
          value={searchParams.name}
          onChange={handleInputChange}
        />
        <div
          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={handleDropdownToggle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={`h-6 w-6 transition-transform transform ${isDropdownVisible ? 'rotate-180' : ''}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        {isDropdownVisible && (
          <div className="mt-2">
            <label className="block text-gray-700">City:</label>
            <select
              className="w-full py-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="city"
              value={searchParams.city}
              onChange={handleInputChange}
            >
              <option value="">Select a city</option>
              {cityOptions.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        )}
        {isDropdownVisible && (
          <div className="mt-2">
            <label className="block text-gray-700">Specialization:</label>
            <select
              className="w-full py-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="specialization"
              value={searchParams.specialization}
              onChange={handleInputChange}
            >
              <option value="">Select a specialization</option>
              {specializationOptions.map((specialization, index) => (
                <option key={index} value={specialization}>
                  {specialization}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
      <div className="flex justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={handleSearchClick}
        >
          Search
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
          onClick={handleResetClick}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
