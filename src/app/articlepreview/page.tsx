import React from "react";
import ArticlePreviewComponent from "@/components/ArticlePreview";
import { IoHome } from "react-icons/io5";
import Link from "next/link";
function ArticlePreview() {
  return (
    <div className="flex items-center justify-center h-full bg-[#edf2f8] p-2">
      <div className="absolute top-4 right-6 p-2 rounded-full bg-gray-400 text-white  hover:bg-gray-500 hover:cursor-pointer transform hover:scale-110 ease-in-out">
        <Link href="/">
          <IoHome className="text-3xl" />
        </Link>
      </div>
      <ArticlePreviewComponent />
    </div>
  );
}

export default ArticlePreview;
