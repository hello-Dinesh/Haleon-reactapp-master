import React from 'react';
import NavBar from '../../components/navbar';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom to navigate back

const DoctorForm = () => {
  return (
    <div>
      <NavBar />
      <div className="text-center mt-16">
        <h1 className="text-2xl font-semibold mb-4">Form in Progress</h1>
        <Link to="/connect" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default DoctorForm;
