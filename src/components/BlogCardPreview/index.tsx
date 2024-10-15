import React from "react";

function BlogPreviewCard() {
  return (
    <div
      className="sm:w-[327px] sm:h-[501px] md:w-[384px] md:h-[522px] bg-white p-4 rounded-xl flex flex-col gap-4  border border-black "
      style={{ boxShadow: "10px 10px 0px #000" }}
    >
      <img
        src="blogCard/illustration-article.svg"
        alt="image Preview"
        className="rounded-2xl"
      />

      <div>
        <h2 className=" font-bold p-2 mx-auto w-auto inline-block bg-[#F4D04E] rounded-md ">
          Learning
        </h2>
      </div>
      <h2 className="text-sm text-gray-900 ">Published 15 Oct 2024</h2>
      <h1 className="font-bold text-2xl">HTML & CSS foundations</h1>
      <p className="text-base text-gray-500">
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>
      <div className="flex flex-row gap-4 items-center">
        <img
          src="blogCard/image-avatar.webp"
          alt=""
          className="w-[32px] h-[32px]"
        />
        <h2 className="font-bold">By Felipe Sanchez</h2>
      </div>
    </div>
  );
}

export default BlogPreviewCard;
