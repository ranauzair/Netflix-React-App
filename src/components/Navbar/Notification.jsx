import React from "react";
import { FaBell } from "react-icons/fa";

const Notification = () => {
    return (
        <div className = "relative">
            <FaBell className = "text-white cursor-pointer hover:text-gray-300" />
            <div className = "absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></div>
        </div>
    );

};

export default Notification;