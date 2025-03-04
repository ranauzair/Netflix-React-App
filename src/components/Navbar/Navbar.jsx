import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Profile from "./Profile";
import Notification from "./Notification";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center space-x-8">
          <Link to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
              alt="Netflix Logo"
              className="w-24 cursor-pointer"
            />
          </Link>
          <ul className="hidden md:flex space-x-6 text-white">
            <li>
              <Link to="/" className="cursor-pointer hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/tv-shows" className="cursor-pointer hover:text-gray-300">
                TV Shows
              </Link>
            </li>
            <li>
              <Link to="/movies" className="cursor-pointer hover:text-gray-300">
                Movies
              </Link>
            </li>
            <li className="cursor-pointer hover:text-gray-300">New & Popular</li>
            <li className="cursor-pointer hover:text-gray-300">My List</li>
            <li className="cursor-pointer hover:text-gray-300">Browse by Languages</li>
          </ul>
        </div>

        <div className="flex items-center space-x-6">
          <SearchBar />
          <Notification />
          <Profile />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
