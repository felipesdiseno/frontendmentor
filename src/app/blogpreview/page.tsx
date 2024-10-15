import React from "react";
import BlogPreviewCard from "@/components/BlogCardPreview";
import { IoHome } from "react-icons/io5";
import Link from "next/link";
function BlogPreviewPage() {
  return (
    <div className="flex items-center flex-col first:justify-center bg-[#F4D04E] h-screen mb-10 p-1">
      <div className="self-end mr-4 mb-4 p-2 rounded-full bg-gray-400 text-white  hover:bg-gray-500 hover:cursor-pointer transform hover:scale-110 ease-in-out">
        <Link href={"/"}>
          <IoHome className="text-3xl" />
        </Link>
      </div>
      <div className="">
        <BlogPreviewCard />
      </div>
    </div>
  );
}

export default BlogPreviewPage;
