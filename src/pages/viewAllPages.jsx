import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import NavBar from '../components/navbar';
import SearchBar from '../components/searchbar';

const DoctorList = () => {
  const [doctorIds, setDoctorIds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchCriteria, setSearchCriteria] = useState({ city: '', name: '' });
  const [page, setPage] = useState(0);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const lastElementRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL_API}/search`, {
          params: {
            city: searchCriteria.city,
            name: searchCriteria.name,
            specialization: searchCriteria.specialization,
            page,
          },
        });
        const data = response.data;

        if (data.error) {
          console.error(data.error);
        } else {
          if (page === 0) {
            setDoctorIds(data);
          } else {
            setDoctorIds((prevData) => [...prevData, ...data]);
          }
        }
      } catch (error) {
        console.error('API call error:', error);
      } finally {
        setLoading(false);
      }
    };

    if (searchPerformed || page > 0) {
      fetchData();
    }
  }, [page, searchCriteria, searchPerformed]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !searchPerformed) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { rootMargin: '0px 0px 300px 0px' }
    );

    if (lastElementRef.current) {
      observer.observe(lastElementRef.current);
    }

    return () => {
      if (lastElementRef.current) {
        observer.unobserve(lastElementRef.current);
      }
    };
  }, [searchPerformed]);

  const handleSearch = async (searchParams) => {
    setSearchPerformed(true);
    setPage(0);
    setSearchCriteria(searchParams);
    setLoading(true);
    setDoctorIds([]);
  };

  const handleResetSearch = () => {
    setSearchPerformed(false);
    setPage(0);
    setSearchCriteria({ city: '', name: '' });
    setLoading(true);
    setDoctorIds([]);
  };

  return (
    <div>
      <NavBar />
      <div className="text-center mt-16 p-8">
        <h1 className="text-3xl font-semibold mb-4">Doctor List</h1>
        <div className="flex justify-evenly items-center mb-4">
          <SearchBar onSearch={handleSearch} onReset={handleResetSearch} className="self-center" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctorIds.map((doctorId, index) => (
            <a href={`/user/${doctorId._id.$oid}`}>
            <div key={index} className="border border-black p-4 rounded-md flex items-start">
              
                <img
                  src={doctorId.imgUrl}
                  alt={doctorId.name}
                  className="w-200 h-200 object-cover rounded-full mr-4"
                />
              
              <div>
                <h2 className="text-xl font-semibold mb-2">{doctorId.name}</h2>
                <p className="text-sm text-gray-500 mb-2">{doctorId.qualification}</p>
                <p className="text-sm text-gray-500 mb-2">{`Experience: ${doctorId.experience} years`}</p>
                <div className="mt-2 ">
                  <strong>Specializations:</strong>
                  <ul className="list-disc ml-4 ">
                    {doctorId.specializations.map((specialization, specIndex) => (
                      <li key={specIndex}>{specialization}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <strong>Clinic Details:</strong>
                  <ul className="list-disc ml-4">
                    {doctorId.clinic_details.map((clinic, clinicIndex) => (
                      <li key={clinicIndex}>
                        <strong>{clinic.clinic_name}</strong>
                        <p className="text-sm text-gray-500">{`${clinic.locality}, ${clinic.clinic_address}`}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            </a>
          ))}
        </div>
        {loading && <div>Search to find doctors</div>}
      </div>
    </div>
  );
};

export default DoctorList;
