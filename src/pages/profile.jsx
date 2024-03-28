import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import NavBar from '../components/navbar';
import ProfilesList from '../components/profileslist';
import bannerImage from "../assets/background.png";
import cv from "../assets/user-xxl.png";
import haleonMini from "../assets/haleon-mini.png";
import phone from "../assets/phone.png";
import Modal from '../components/modal';
import SocialModal from '../components/socialmodal';
import Reviews from '../components/reviews';
import ScrollMenu from '../components/scrolltab';
import Footer from '../components/footer';

const LinkedInUserProfile = () => {
  const userId = useParams();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const pageBackgroundColor = darkMode ? '#181818' : '#ffffff';
  const textPrimaryColor = darkMode ? '#ffffff' : '#000000';
  const textSecondaryColor = darkMode ? '#767676' : '#333333';

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL_API}/profile/` + userId.userId)
      .then((response) => {
        setUserData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
        setLoading(false);
      });
  }, [userId]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleScrollDown = () => {
    window.scrollBy({ top: 1000, behavior: 'smooth' });
  };

  const sectionIds = {
    home: 'navbar',
    reviews: 'reviews',
    experience: 'experience', // Adjust this based on your Experience section ID
    contact: 'footer', // Adjust this based on your Contact section ID
  };

  return (
    <div style={{ backgroundColor: pageBackgroundColor, color: textPrimaryColor }}>
      <NavBar />
      <div className={`bg-${pageBackgroundColor} h-[3500px] flex flex-row justify-center w-full`}>
        <div className={`bg-${pageBackgroundColor} w-[1450px] h-[2000px] relative`}>
          <div id={sectionIds.reviews} className={`flex flex-col gap-4 absolute w-[1350px] top-[807px] left-[54px]`}>
            <Reviews />

            <div className={`text-${textPrimaryColor} text-5xl font-bold`}>Experience</div>
            <div className={`grid grid-cols-3 gap-4`} >
              {userData?.experiences?.map((experience, index) => (
                <div key={index} className={`bg-${pageBackgroundColor} p-4 rounded-md border border-${textPrimaryColor}`}>
                  <img src={experience.logo_url} alt={experience.company} className="w-32 h-32 mx-auto rounded-full" />
                  <h5 className="font-bold text-lg text-center">{experience?.company}</h5>
                  <p className={`text-lg font-normal ${textSecondaryColor} text-[12px] text-center`}>{experience?.title}</p>
                  <p className={`text-lg font-normal ${textSecondaryColor} text-[12px] text-center`}>{experience?.location}</p>
                  <p className={`text-lg font-normal text-center ${textSecondaryColor} text-[12px]`}>
                    {experience.starts_at && (
                      <p className="text-lg">
                        {`${experience.starts_at.month}/${experience.starts_at.day}/${experience.starts_at.year}`}
                      </p>
                    )}
                    {experience.ends_at && (
                      <p className="text-lg">
                        {`${experience.ends_at.month}/${experience.ends_at.day}/${experience.ends_at.year}`}
                      </p>
                    )}
                    <button
                    type="submit"
                    onClick={() => setSelectedExperience(experience)}
                    className={`bg-black text-white hover:bg-green-400 py-2 px-6 rounded-full text-lg font-semibold mb-2`}
                  >
                    Show More
                  </button>
                  </p>
                  
                </div >
              ))}
              <div id={sectionIds.experience}></div>
            </div>
            <ProfilesList page={0} current={userId.userId} />
          </div>

          {selectedExperience && (
            <Modal experience={selectedExperience} onClose={() => setSelectedExperience(null)} />
          )}

          <div className={`absolute w-[974px] h-[467px] top-0 left-[335px]`}>
            <div className={`relative w-[980px] h-[807px]`}>
              <div className={`absolute w-[980px] h-[807px] top-0 left-0 bg-${pageBackgroundColor}`} />
              <img
                className="absolute w-[1350px] h-[807px] top-0 left-0 object-cover bg-gradient-to-br from-neutral-900 to-green-500 rounded-b-lg"
                alt="Your image"
                src={bannerImage}
                id={sectionIds.home}
              />
              <p className={`absolute w-[647px] top-[150px] left-[65px] text-white text-4xl font-bold tracking-[var(--h2-24px-letter-spacing)] leading-[var(--h2-24px-line-height)]`}>
                {userData?.localizedHeadline}
              </p>
              <ScrollMenu sectionIds={sectionIds} />
              <p className={`absolute w-[647px] top-[300px] left-[65px] font-h6-16px font-[number:var(--h6-16px-font-weight)] text-white text-[length:var(--h6-16px-font-size)] tracking-[var(--h6-16px-letter-spacing)] leading-[var(--h6-16px-line-height)]`}>
                {userData?.summary}
              </p>
              <div className={`absolute w-[424px] top-[229px] left-[65px] font-h6-16px font-[number:var(--h6-16px-font-weight)] ${textSecondaryColor} text-[length:var(--h6-16px-font-size)] tracking-[var(--h6-16px-letter-spacing)] leading-[var(--h6-16px-line-height)]`}>
                {""}
              </div>
            </div>
          </div>
          <div className={`absolute w-[303px] h-[737px] top-0 left-0 bg-${pageBackgroundColor} rounded-[6px]`}>
            <div className={`text-${textPrimaryColor} mt-10 text-center text-3xl font-black`}>{userData?.name}</div>
            <div className={`text-center text-md ${textSecondaryColor}`}>{userData?.qualification}</div>
            <div className={`flex w-[164px] h-[50px] absolute top-[505px] left-[69px] flex-col items-start`}>
              <div className={`inline-flex flex-col items-center justify-center gap-[10px] px-[32px] py-[16px] relative flex-[0_0_auto] bg-green-500 rounded-[5px]`} onClick={openModal}>
                <div className={`relative w-[110px] h-[18px] mr-[-2.00px]`}>
                  <div className={`absolute h-[18px] top-0 left-0 font-medium text-white text-[15px] text-center tracking-[0] leading-[normal] whitespace-nowrap`}>
                    Contact Me
                  </div>
                  <img className={`absolute w-[16px] h-[16px] top-px left-[84px]`} alt="Frame" src={phone} />
                </div>
              </div>
              {isModalOpen && (
                <SocialModal userData={userData} onClose={closeModal} />
              )}
              <div className={`mt-5 inline-flex flex-col items-center justify-center gap-[10px] px-[32px] py-[16px] relative flex-[0_0_auto] bg-green-500 rounded-[5px]`} onClick={handleScrollDown}>
                <div className={`relative w-[110px] h-[18px] mr-[-2.00px]`}>
                  <div className={`absolute h-[18px] top-0 left-0 font-medium text-white text-[15px] text-center tracking-[0] leading-[normal] whitespace-nowrap`}>
                    View Experience
                  </div>
                </div>
              </div>
            </div>
            <div className={`absolute w-[220px] h-[24px] top-[430px] left-[40px]`}>
              <div className={`relative w-[224px] h-[24px]`}></div>
            </div>
            <img className={`absolute w-[250px] h-[250px] top-[100px] left-[25px] rounded-full`} alt="Profile" src={userData?.picture} />
          </div>
          <div className={`inline-flex flex-col h-[468px] items-center gap-[10px] absolute top-0 left-[1340px]`}>
            <div className={`relative w-[100px] h-[468px] bg-[#111111] shadow-[4px_0px_10px_#2f7af91a] rounded-full bg-gray-600 mt-4`} />
            <div className={`absolute w-[25px] h-[25px] top-[400px] left-[41px] bg-[url(light-mode.svg)] bg-[100%_100%]`} onClick={toggleDarkMode}></div>
            <div className={`absolute w-[40px] h-[100px] top-[28px] left-[32px]`}>
              <div className={`absolute w-[40px] h-[40px] top-0 left-0`}>
                <div className={`relative h-[40px]`}>
                  <a href="/">
                    <img src={haleonMini} className={`!absolute !w-[18px] !h-[18px] !top-[11px] !left-[11px]`} color="#D4D4D4" />
                  </a>
                </div>
              </div>
              <div className={`absolute w-[40px] h-[40px] top-[60px] left-0 bg-[#181818] rounded-[20px]`}>
                <a href="/viewall">
                  <img src={cv} className={`!absolute !w-[18px] !h-[18px] !top-[11px] !left-[11px]`} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id={sectionIds.contact}></div>
      <Footer />
    </div>
  );
};

export default LinkedInUserProfile;
