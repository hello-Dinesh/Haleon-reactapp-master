import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import NavBar from '../components/navbar';
import bannerImage from "../assets/background.png";
import cv from "../assets/user-xxl.png";
import haleonMini from "../assets/haleon-mini.png";
import phone from "../assets/phone.png";

const UserProfile = () => {
  const userId = useParams();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);


  const handleScrollDown = () => {
    // Adjust the Y value (second parameter) to the desired scroll distance
    window.scrollBy({ top: 1000, behavior: 'smooth' });
  };
  const specializationData = [
    {
      "specialization": "Aesthetic Dermatologist",
      "description": "Enhancing your skin's natural beauty through advanced dermatological treatments.",
      "imageUrl": ""
    },
    {
      "specialization": "Conservative Dentist",
      "description": "Preserving and restoring your natural smile with minimally invasive dental procedures.",
      "imageUrl": "https://icons-for-free.com/iconfiles/png/256/dentist+enamel+enamel+teeth+medical+protection+tooth+icon-1320165693085583705.png"
    },
    {
      "specialization": "Cosmetic/Aesthetic Dentist",
      "description": "Crafting beautiful smiles through cosmetic dentistry for enhanced aesthetics.",
      "imageUrl": "https://icons-for-free.com/iconfiles/png/256/tooth+dental+dentist+dentistry+oral+hygiene+teeth+cleaning-1320165686671132716.png"
    },
    {
      "specialization": "Cosmetologist",
      "description": "Expert in skincare and beauty treatments for a radiant and youthful appearance.",
      "imageUrl": "https://icons-for-free.com/iconfiles/png/256/dentist+dentistry+lip+mouth+smile+tooth+icon-1320165692107135346.png"
    },
    {
      "specialization": "Craniofacial Surgeon",
      "description": "Specializing in surgical procedures for the head, face, and neck.",
      "imageUrl": "https://icons-for-free.com/iconfiles/png/256/dentist+dentistry+halitosis+human+mouth+tooth+icon-1320165691872279661.png"
    },
    {
      "specialization": "Dental Surgeon",
      "description": "Providing comprehensive surgical solutions for various dental conditions.",
      "imageUrl": "https://icons-for-free.com/iconfiles/png/256/dental+anesthesia+dental+treatment+dentist+dentistry-1320165683778515700.png"
    },
    {
      "specialization": "Dentist",
      "description": "Dedicated to oral health, preventive care, and maintaining your confident smile.",
      "imageUrl": "https://icons-for-free.com/iconfiles/png/256/dental+dental+care+dentist+dentistry+tooth+white+tooth+icon-1320165684792387620.png"
    },
    {
      "specialization": "Dentofacial Orthopedist",
      "description": "Aligning facial structures and enhancing oral function through orthopedic techniques.",
      "imageUrl": "https://icons-for-free.com/iconfiles/png/256/dental+treatment+dentist+dentistry+tooth+toothache+wisdom-1320165691179220355.png"
    },
    {
      "specialization": "Dermatologist",
      "description": "Promoting skin health and treating dermatological conditions for a glowing complexion.",
      "imageUrl": "https://icons-for-free.com/iconfiles/png/256/teeth+dental+dentist+oral+oral+hygiene+tongue+uvula+icon-1320165685966866011.png"
    },
    {
      "specialization": "Endodontist",
      "description": "Specialized in root canal treatments to save and restore natural teeth.",
      "imageUrl": "https://icons-for-free.com/iconfiles/png/256/dentist+dentistry+oral+hygiene+teeth+tooth+tooth+setting-1320165692904663887.png"
    },
    {
      "specialization": "General Physician",
      "description": "Offering holistic healthcare services for overall well-being.",
      "imageUrl": "https://icons-for-free.com/iconfiles/png/256/dental+treatment+dentist+dentistry+service+stomatologist-1320165690952770282.png"
    },
    {
      "specialization": "Implantologist",
      "description": "Restoring missing teeth and improving oral function with dental implants.",
      "imageUrl": "https://icons-for-free.com/iconfiles/png/256/dental+implant+dental+treatment+dentist+dentistry+root+canal-1320165688362753861.png"
    },
    {
      "specialization": "Oral And MaxilloFacial Surgeon",
      "description": "Performing surgical procedures for the mouth, jaw, and face.",
      "imageUrl": "https://icons-for-free.com/iconfiles/png/256/dental+treatment+dental+veneers+dentist+dentistry+medical-1320165690388296152.png"
    },
    {
      "specialization": "Oral Medicine and Radiology",
      "description": "Diagnosing and managing oral diseases through advanced imaging techniques.",
      "imageUrl": "https://icons-for-free.com/iconfiles/png/256/dental+records+dentist+dentistry+detail+tooth+toothx+rays-1320165689341102230.png"
    },
    {
      "specialization": "Oral Pathologist",
      "description": "Studying oral diseases and providing diagnostic insights for effective treatment.",
      "imageUrl": "https://icons-for-free.com/iconfiles/png/256/dental+dentist+dentistry+oral+bacteria+oral+hygiene+tooth-1320165684333283440.png"
    },
    {
      "specialization": "Orthodontist",
      "description": "Straightening teeth and creating balanced smiles through orthodontic treatments.",
      "imageUrl": "https://icons-for-free.com/iconfiles/png/256/dental+orthodontic+treatment+dentist+dentistry+medical+oral+hygiene+tooth+icon-1320165688979962905.png"
    },
    {
      "specialization": "Pediatric Dentist",
      "description": "Specializing in dental care for children, promoting a lifetime of healthy smiles.",
      "imageUrl": "https://icons-for-free.com/iconfiles/png/256/teeth+dental+dentist+dentistry+medical+oral+hygiene+tooth+icon-1320165684055699441.png"
    },
    {
      "specialization": "Pediatrician",
      "description": "Caring for the health and well-being of children through preventive and curative measures.",
      "imageUrl": "https://icons-for-free.com/iconfiles/png/256/dentist+dentistry+oral+hygiene+sleeping+snore+tooth+icon-1320165692695124987.png"
    },
    {
      "specialization": "Periodontist",
      "description": "Focusing on the health of gums and supporting structures for optimal oral health.",
      "imageUrl": "https://icons-for-free.com/iconfiles/png/256/dentist+dentistry+denture+gums+medical+tooth+icon-1320165691629518787.png"
    },
    {
      "specialization": "Preventive Dentistry",
      "description": "Emphasizing proactive measures to maintain oral health and prevent dental issues.",
      "imageUrl": "https://icons-for-free.com/iconfiles/png/256/dental+protection+dental+treatment+dentist+dentistry+oral-1320165689206112693.png"
    },
    {
      "specialization": "Prosthodontist",
      "description": "Restoring and enhancing oral function through prosthetic solutions like dentures and bridges.",
      "imageUrl": "https://icons-for-free.com/iconfiles/png/256/dental+orthodontic+treatment+dentist+dentistry+medical+oral-1320165688805347103.png"
    },
    {
      "specialization": "Public Health Dentist",
      "description": "Promoting community oral health and preventive dental care.",
      "imageUrl": "https://icons-for-free.com/iconfiles/png/256/dental+care+dental+health+care+dentist+dentistry+hands+tooth-1320165687157054786.png"
    },
    {
      "specialization": "Restorative Dentist",
      "description": "Repairing and restoring damaged teeth to their natural form and function.",
      "imageUrl": "https://icons-for-free.com/iconfiles/png/256/broken+tooth+dental+dental+treatment+dentist+dentistry+tooth-1320165684968504342.png"
    }
  ]
  
  useEffect(() => {
    // Make an API request to fetch user data based on userId
    axios
      .get(`${process.env.REACT_APP_BASE_URL_API}/user/` + userId.userId)
      .then((response) => {
        setUserData(response.data); // Assuming the API returns user data as JSON
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
        setLoading(false);
      });
  }, [userId]);


return (
  <div>
    <NavBar />
    <div className="bg-[#181818] h-screen flex flex-row justify-center w-full">
    <div className="bg-[#181818] w-[1450px] h-[1555px] relative">
    <div className="flex flex-col gap-4 absolute w-[1350px] top-[807px] left-[54px]">
    {userData?.clinic_details?.map((clinic, index) => (
      <div key={index} className="bg-[#242424] p-4 rounded-md">
        <h5 className=" [font-family:'Inter-Regular',Helvetica] font-bold text-white text-lg text-center">{clinic.clinic_name}</h5>
        <p className="text-lg [font-family:'Inter-Regular',Helvetica] font-normal text-[#767676] text-[12px] text-center">{clinic.locality}</p>
        <p className="text-lg [font-family:'Inter-Regular',Helvetica] font-normal text-[#767676] text-[12px]">Clinic Address: {clinic.clinic_address}</p>
        <p className=" [font-family:'Inter-Regular',Helvetica] font-bold text-white text-lg">Clinic Schedule: {clinic.clinic_schedule}</p>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={clinic.clinic_location_gmaps}
          />
        </div>
      </div>
    ))}
  </div> 


      <div className="absolute w-[1055px] h-[245px] top-[492px] left-[335px]">

      <ul className="list-disc list-inside" style={{ display: 'flex', gap: '20px' }}>
  {userData?.specializations?.map((specialization, index) => (
    <li key={index} className="text-lg">
      <div className="relative w-[341px] h-[245px] bg-[#0c0c0c] rounded-[6px]">
        <div className="absolute w-[122px] top-[113px] left-[113px] font-h4-18px font-[number:var(--h4-18px-font-weight)] text-neutral-300 text-[length:var(--h4-18px-font-size)] tracking-[var(--h4-18px-letter-spacing)] leading-[var(--h4-18px-line-height)] whitespace-nowrap [font-style:var(--h4-18px-font-style)] text-center">
          {specialization}
        </div>
        <p className="absolute w-[146px] top-[153px] left-[96px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#767676] text-[12px] text-center tracking-[0] leading-[15px]">
          {specializationData.find((data) => data.specialization === specialization)?.description}
        </p>
        <img
          className="w-[100px] h-[100px] top-[13px] left-[119px] absolute object-cover"
          alt="Image"
          src={specializationData.find((data) => data.specialization === specialization)?.imageUrl}
        />
      </div>
    </li>
  ))}
</ul>


        
        
      </div>
      <div className="absolute w-[974px] h-[467px] top-0 left-[335px]">
        <div className="relative w-[980px] h-[472px] left-[-5px]">
          <div className="absolute w-[970px] h-[467px] top-0 left-[5px] bg-[#0c0c0c]" />
          <img
            className="absolute w-[980px] h-[472px] top-0 left-0 object-cover"
            alt="Your image"
            src={bannerImage}
          />
          <p className="absolute w-[647px] top-[133px] left-[65px] font-h6-16px font-[number:var(--h6-16px-font-weight)] text-white text-[length:var(--h6-16px-font-size)] tracking-[var(--h6-16px-letter-spacing)] leading-[var(--h6-16px-line-height)] [font-style:var(--h6-16px-font-style)]">
            {userData?.summary}
          </p>
          <div className="absolute w-[424px] top-[229px] left-[65px] font-h6-16px font-[number:var(--h6-16px-font-weight)] text-[#767676] text-[length:var(--h6-16px-font-size)] tracking-[var(--h6-16px-letter-spacing)] leading-[var(--h6-16px-line-height)] [font-style:var(--h6-16px-font-style)]">
            {""}
          </div>
        </div>
      </div>
      <div className="absolute w-[303px] h-[737px] top-0 left-0 bg-[#0c0c0c] rounded-[6px]">
        
                <div className='text-white text-center text-2xl font-bold'>{userData?.name}</div>
                <div className=' text-center text-md text-[#767676]'>{userData?.qualification}</div>

        
        <div className="flex w-[164px] h-[50px] absolute top-[505px] left-[69px] flex-col items-start">
          
          <div className="inline-flex flex-col items-center justify-center gap-[10px] px-[32px] py-[16px] relative flex-[0_0_auto] bg-[#ffba19] rounded-[5px]" onClick={handleScrollDown}>
            
            <div className="relative w-[102px] h-[18px] mr-[-2.00px]">
              <div className="absolute h-[18px] top-0 left-0 [font-family:'Inter-Medium',Helvetica] font-medium text-white text-[15px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                Contact Me
              </div>
              <img className="absolute w-[16px] h-[16px] top-px left-[84px]" alt="Frame" src={phone} />
              
            </div>
            
          </div>
        </div>
        
        <div className="absolute w-[220px] h-[24px] top-[430px] left-[40px]">
          <div className="relative w-[224px] h-[24px]">
            <div className="absolute w-[93px] h-[24px] top-0 left-0 bg-[#ffba19] rounded-[6px]">
              <div className="absolute top-0 left-[5px] font-paragraph-progress-15 font-[number:var(--paragraph-progress-15-font-weight)] text-white text-[length:var(--paragraph-progress-15-font-size)] tracking-[var(--paragraph-progress-15-letter-spacing)] leading-[var(--paragraph-progress-15-line-height)] whitespace-nowrap [font-style:var(--paragraph-progress-15-font-style)]">
                Experience:
              </div>
            </div>
            <div className="absolute top-0 left-[159px] font-paragraph-progress-15 font-[number:var(--paragraph-progress-15-font-weight)] text-[#f9fff4] text-[length:var(--paragraph-progress-15-font-size)] text-right tracking-[var(--paragraph-progress-15-letter-spacing)] leading-[var(--paragraph-progress-15-line-height)] whitespace-nowrap [font-style:var(--paragraph-progress-15-font-style)]">
              {userData?.experience} Years
            </div>
          </div>
        </div>
        <img className="absolute w-[250px] h-[250px] top-[100px] left-[25px] rounded-full" alt="Profile" src={userData?.imgUrl} />
      </div>
      <div className="inline-flex flex-col h-[468px] items-center gap-[10px] absolute top-0 left-[1332px]">
        <div className="relative w-[108px] h-[468px] bg-[#111111] shadow-[4px_0px_10px_#2f7af91a] rounded-full bg-gray-600 mt-4" />
        <div className="absolute w-[25px] h-[25px] top-[400px] left-[41px] bg-[url(light-mode.svg)] bg-[100%_100%]" />
        <div className="absolute w-[40px] h-[100px] top-[28px] left-[32px]">
          <div className="absolute w-[40px] h-[40px] top-0 left-0">
            <div className="relative h-[40px]">
              <a href="/">
              <img src={haleonMini} className="!absolute !w-[18px] !h-[18px] !top-[11px] !left-[11px]" color="#D4D4D4" />
              </a>
            </div>
          </div>
          <div className="absolute w-[40px] h-[40px] top-[60px] left-0 bg-[#181818] rounded-[20px]">
            <a href="/viewall">
            <img src={cv} className="!absolute !w-[18px] !h-[18px] !top-[11px] !left-[11px]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  
);
}

export default UserProfile;
