import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
function SharePop() {
  return (
    <div className="bg-[#48556A] w-[28px] h-[55px]">
      <h1>S H A R E</h1>
      <div className="flex flex-row gap-4 ">
        <FaFacebookSquare />
        <FaTwitter />
        <FaPinterest />
      </div>
    </div>
  );
}

export default SharePop;
