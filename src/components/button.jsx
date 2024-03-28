import React from 'react';

const Button = () => {

  const handleClick = () => {
    window.location.href = 'https://www.youtube.com';
    // Alternatively, you can use history.push('/youtube') if you want to handle routing within your app.
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Go to YouTube
      </button>
    </div>
  );
};

export default Button;
