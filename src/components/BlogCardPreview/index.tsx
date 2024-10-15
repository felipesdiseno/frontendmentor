import React from "react";

function BlogPreviewCard() {
  return (
    <div className="sm:w-[327px] sm:h-[501px] md:w-[384px] md:h-[522px] bg-white p-4 rounded-xl flex flex-col gap-4">
      <div>
        <img
          src="blogCard/illustration-article.svg"
          alt="image Preview"
          className="rounded-2xl"
        />
        <h2 className="bg-[#F4D04E] font-bold p-2 rounded-md mx-auto">
          Learning
        </h2>
        <h2 className="text-sm text-gray-900">Published 15 Oct 2024</h2>
        <h1 className="font-bold text-2xl">HTML & CSS foundations</h1>
        <p className="text-base text-gray-500">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
      </div>
      <div className="flex flex-row gap-4 items-center">
        <img src="blogCard/image-avatar.webp" alt="" />
        <h2 className="font-bold">By Felipe Sanchez</h2>
      </div>
    </div>
  );
}

export default BlogPreviewCard;
