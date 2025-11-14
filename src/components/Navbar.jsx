import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-purple-200  h-20 flex items-center  justify-between ">
      
     
      <img 
        src="/logo.png"    
        alt="logo"
        className="h-10 w-25"
      />

     
      <ul className="hidden md:flex gap-16 text-black-400 text-lg ">
        <li className="hover:text-black  hover:scale-110  hover:underline cursor-pointer  bg-gray-400 h-7 w-15 text-center rounded-sm ">Home</li>
        <li className="hover:text-black  hover:scale-110  hover:underline cursor-pointer  bg-gray-400 h-7 w-15 text-center rounded-sm ">About</li>
        <li className="hover:text-black  hover:scale-110  hover:underline cursor-pointer  bg-gray-400 h-7 w-15 text-center rounded-sm ">Contact</li>
        <li className="hover:text-black  hover:scale-110  hover:underline cursor-pointer  bg-gray-400 h-7 w-15 text-center rounded-sm  ">Service</li>
      </ul>

      
      <button 
        className="md:hidden text-black text-3xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      
      {open && (
        <ul className="absolute top-20 left-0 w-full bg-purple-300 flex flex-col items-center gap-6 py-6 text-black text-lg md:hidden">
          <li className="hover:text-black  hover:scale-110  hover:underline cursor-pointer  bg-gray-400 h-7 w-15 text-center rounded-sm ">Home</li>
          <li className="hover:text-black  hover:scale-110  hover:underline cursor-pointer  bg-gray-400 h-7 w-15 text-center rounded-sm ">About</li>
          <li className="hover:text-black hover:scale-110   hover:underline cursor-pointer  bg-gray-400 h-7 w-15 text-center rounded-sm ">Contact</li>
          <li className="hover:text-black hover:scale-110   hover:underline cursor-pointer  bg-gray-400 h-7 w-15 text-center rounded-sm ">Service</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
