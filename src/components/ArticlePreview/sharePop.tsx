import React from "react";
import { FaFacebookSquare, FaTwitter, FaPinterest } from "react-icons/fa";
import Link from "next/link";

function SharePop() {
  return (
    <div className="absolute md:bottom-1 bottom-0 left-1/2 transform -translate-x-1/2 md:-translate-y-full bg-[#48556A] md:p-4 p-0 rounded-xl shadow-md flex flex-row items-center justify-center w-full md:w-[248px] h-[55px]">
      <div className="flex flex-row gap-2 justify-between">
        <h1 className="text-white text-[13px] tracking-widest font-manrope">
          SHARE
        </h1>
        <div className="flex flex-row gap-4 items-center">
          <Link href="https://www.facebook.com/">
            <FaFacebookSquare className="text-white w-5 h-5 cursor-pointer" />
          </Link>
          <Link href="https://twitter.com/">
            <FaTwitter className="text-white w-5 h-5 cursor-pointer" />
          </Link>
          <Link href="https://www.pinterest.com/">
            <FaPinterest className="text-white w-5 h-5" />
          </Link>
        </div>
      </div>

      <div className="absolute w-5 h-5 bg-[#48556A] transform rotate-45 -bottom-2 md:flex items-center hidden"></div>
    </div>
  );
}

export default SharePop;
