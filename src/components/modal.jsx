import React from 'react';

const Modal = ({ experience, onClose, darkMode }) => {
  const modalStyles = {
    backgroundColor: darkMode ? '#333' : '#fff',
    color: darkMode ? '#fff' : '#333',
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className={`bg-white p-8 rounded-md max-w-xl`} style={modalStyles}>
        <img src={experience.logo_url} alt={experience.company} className="w-32 h-32 mx-auto rounded-none" />
        <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>{experience.company}</h2>
        <p className={`text-lg mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>{experience.title}</p>
        <p className={`text-lg mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>{experience.location}</p>
        <p className={`text-lg mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>
          {experience.starts_at && `${experience.starts_at.month}/${experience.starts_at.day}/${experience.starts_at.year}`} -{' '}
          {experience.ends_at && `${experience.ends_at.month}/${experience.ends_at.day}/${experience.ends_at.year}`}
        </p>
        <p className={`text-lg mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>{experience.description}</p>
        <button onClick={onClose} className={`bg-black text-white hover:bg-red-400 py-2 px-6 rounded-full text-lg font-semibold`}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
