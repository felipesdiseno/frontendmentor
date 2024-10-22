"use client";
import React, { useState } from "react";
import { IoMdShareAlt } from "react-icons/io";
import SharePop from "@/components/ArticlePreview/sharePop";

function ArticlePreviewComponent() {
  const [sharePop, setSharePop] = useState(false);
  return (
    <div className="flex flex-col md:flex-row rounded-xl shadow-xl relative w-full max-w-[730px]">
      <img
        src="articlePreview/drawers.jpg"
        alt="drawers"
        className="md:rounded-l-xl w-full h-auto md:w-[50%]"
      />
      <div className="flex flex-col p-4 md:ml-6">
        <p className="font-bold text-xl md:text-2xl cursor-default text-[#48556A] font-manrope mb-4">
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </p>
        <p className="text-sm md:text-base cursor-default text-[#6D7F97] mb-4">
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
        <div className="flex flex-row items-center justify-between mt-4 ">
          <div className="flex flex-row items-center mb-4 md:mb-0">
            <img
              src="articlePreview/avatar-michelle.jpg"
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex flex-col ml-2">
              <h3 className="text-[#48556A] font-bold cursor-default">
                Michelle Appleton
              </h3>
              <h3 className="text-[#9EAFC2] cursor-default font-manrope">
                21 Oct 2024
              </h3>
            </div>
          </div>
          <div className="relative">
            <div
              className="bg-[#9EAFC2] rounded-full p-2 hover:bg-[#6E8098] cursor-pointer"
              onClick={() => setSharePop(!sharePop)}
            >
              <IoMdShareAlt className="text-white" />
            </div>
            {sharePop && <SharePop />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticlePreviewComponent;
