import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
function SharePop() {
  return (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-full bg-[#48556A] p-4 rounded-lg shadow-md flex flex-col items-center">
      <h1>S H A R E</h1>
      <div className="flex flex-row gap-4 ">
        <FaFacebookSquare />
        <FaTwitter />
        <FaPinterest />
      </div>
      <div className="bg-[#48556A] traslate-y-4"></div>
    </div>
  );
}

export default SharePop;
