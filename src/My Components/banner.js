import React, { useState } from 'react';
import { ReactTyped } from 'react-typed';

export default function Banner() {
  const [showList, setShowList] = useState(false);

  const handleButtonClick = () => {
    setShowList(!showList);
  };

  return (
    <div>
      <div className="bg-blue-950 w-full py-44">
        <div className="flex items-center justify-center flex-col">
          <h3 className="text-yellow-300 text-xl">Learn with Us</h3>
          <h1 className="text-white font-bold text-3xl">Grow with us</h1>
          <h3 className="text-yellow-300 text-xl">
            Learn{" "}
            <ReactTyped
              className="p-2 font-bold"
              strings={["Web Development", "Digital Marketing", "Graphic Designing", "Video Editing"]}
              typeSpeed={100}
              loop={true}
              backSpeed={50}
            />
          </h3>
          <button
            className="bg-yellow-500 text-black rounded-md p-2 mt-2 w-[200px]"
            onClick={handleButtonClick}
          >
            Get Started
          </button>
        </div>
      </div>

      {showList && (
        <div className="flex justify-center mt-4">
          <ul className="bg-gray-100 p-4 rounded-md">
            <li className="p-2 border-b">Home</li>
            <li className="p-2 border-b">About</li>
            <li className="p-2">Services</li>
          </ul>
        </div>
      )}
    </div>
  );
}
