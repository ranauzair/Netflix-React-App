import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="relative">
      {!isOpen ? (
        <FaSearch
          className="text-white cursor-pointer hover:text-gray-300"
          onClick={() => setIsOpen(true)}
        />
      ) : (
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-1 bg-black text-white border border-gray-500 rounded-md outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onBlur={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default SearchBar;
