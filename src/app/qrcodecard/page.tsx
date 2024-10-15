import React from "react";
import QrCard from "@/components/QrCard";
import { IoHome } from "react-icons/io5";
import Link from "next/link";
function QrCardPage() {
  return (
    <div className="flex items-center flex-col first:justify-center bg-[#D5E1EF] h-screen mb-10 p-1">
      <div className="self-end p-2 rounded-full bg-gray-400 text-white  hover:bg-gray-500 hover:cursor-pointer transform hover:scale-110 ease-in-out">
        <Link href={"/"}>
          <IoHome className="text-3xl e" />
        </Link>
      </div>
      <div className="">
        <QrCard />
      </div>
    </div>
  );
}

export default QrCardPage;
