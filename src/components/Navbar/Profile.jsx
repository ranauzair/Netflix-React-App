import React, { useState, useRef } from "react";
import { Avatar } from "@material-tailwind/react";

const Profile = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 200);
  };

  return (
    <div 
      className="relative" 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Avatar
        src="https://docs.material-tailwind.com/img/face-2.jpg"
        variant="square"
        alt="User Profile"
        className="w-10 h-10 cursor-pointer"
      />

      {showDropdown && (
        <div className="absolute right-0 mt-2 w-40 bg-black text-white text-sm rounded shadow-lg transition-opacity duration-200">
          <div className="absolute top-[-6px] right-4 w-0 h-0 
                      border-l-8 border-r-8 border-b-8 
                      border-l-transparent border-r-transparent border-b-white"></div>

          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
              Profile
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
              Settings
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
              Sign Out
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Profile;
