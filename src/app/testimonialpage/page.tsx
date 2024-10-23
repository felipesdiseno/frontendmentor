import TestimonialGridComponent from "@/components/TestimonialGrid";
import React from "react";
import { IoHome } from "react-icons/io5";
import Link from "next/link";
function TestimonialGridPage() {
  return (
    <div className="flex items-center justify-center p-2  bg-[#edf2f8]">
      <TestimonialGridComponent />
      <div className="absolute top-4 right-4 p-2 ml-2 rounded-full bg-gray-400 text-white hover:bg-gray-500 hover:cursor-pointer transform hover:scale-110 ease-in-out">
        <Link href={"/"}>
          <IoHome className="text-3xl" />
        </Link>
      </div>
    </div>
  );
}

export default TestimonialGridPage;
