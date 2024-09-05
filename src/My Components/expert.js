import React, { useState } from 'react';
import laptop from '../assets/pic/laptop.jfif'; // Correct path and import

export default function Expert() {
    const [list,setlist]=useState(false);
    const handlebutton=()=>{
        setlist(!list);
    }
  return (
    <div className="bg-yellow-500 w-full h-[300px] grid grid-cols-2 ">
      <div className="h-full flex items-center justify-center p-6">
        <img src={laptop} alt="Laptop" className="h-full object-cover" />
      </div>
      <div className="flex flex-col justify-center p-4 mt-6">
        <h1 className="text-2xl font-bold">EXPERT</h1>
        <p className="mt-2">This is my first project in react and i want to learn react very fast</p>
        <button onClick={handlebutton} className='bg-blue-950 text-white p-2 mt-2 w-[200px]'>Get Started</button>
      </div>
      {list && (
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
