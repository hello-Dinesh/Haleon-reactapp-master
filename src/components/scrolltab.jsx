// ScrollMenu.jsx

import React, { useEffect, useState } from 'react';

const ScrollMenu = ({ sectionIds }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [blobPosition, setBlobPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    const progress = (scrollPosition / (documentHeight - windowHeight)) * 100;
    setScrollProgress(progress);

    const blobMaxPosition = 100 - 10; // 10 is the blob size
    const newPosition = isDragging ? blobPosition : Math.min(progress, blobMaxPosition);
    setBlobPosition(newPosition);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const mouseX = e.clientX;
      const containerWidth = window.innerWidth;
      const newPosition = (mouseX / containerWidth) * 100;
      setBlobPosition(Math.min(newPosition, 100 - 10));
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = section.offsetTop;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="fixed top-10 left-1/2 transform -translate-x-1/2 w-400 bg-gray-800 text-white p-4 rounded-3xl">
      <ul className="flex space-x-4">
        <li onClick={() => scrollToSection(sectionIds.home)}>Home</li>
        <li onClick={() => scrollToSection(sectionIds.reviews)}>Highlights</li>
        <li onClick={() => scrollToSection(sectionIds.experience)}>Experience</li>
        <li onClick={() => scrollToSection(sectionIds.contact)}>Contact</li>
      </ul>
      <div
        className="absolute h-1 w-10 bg-green-500 rounded-full cursor-pointer"
        style={{ left: `${blobPosition}%` }}
        onMouseDown={handleMouseDown}
      />
    </div>
  );
};

export default ScrollMenu;
