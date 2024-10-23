"use client";

import React, { useState } from "react";
import { IoMdShareAlt } from "react-icons/io";
import SharePop from "@/components/ArticlePreview/sharePop";

function ArticlePreviewComponent() {
  const [sharePop, setSharePop] = useState(false);

  const handleShareClick = () => setSharePop(!sharePop);

  return (
    <div className="flex flex-col md:flex-row rounded-xl shadow-xl relative w-full max-w-[730px] pb-[120px] md:pb-0">
      <img
        src="articlePreview/drawers.jpg"
        alt="drawers"
        className="md:rounded-l-xl w-full h-auto md:w-[50%]"
      />
      <div className="flex flex-col p-4 md:p-8 w-full relative">
        <div>
          <p className="font-bold text-xl md:text-2xl cursor-default text-[#48556A] font-manrope mb-4">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </p>
          <p className="text-sm md:text-base cursor-default text-[#6D7F97] mb-4">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I&apos;ve got some simple tips to
            help you make any room feel complete.
          </p>
        </div>

        <div
          className={`flex flex-row items-center justify-between ${
            sharePop ? "md:flex hidden" : "flex"
          }`}
        >
          <div className="flex flex-row items-center">
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

          <div className="relative z-10">
            <div
              className={`rounded-full p-2 cursor-pointer ${
                sharePop ? "bg-[#6E8098]" : "bg-[#9EAFC2] hover:bg-[#6E8098]"
              }`}
              onClick={handleShareClick}
            >
              <IoMdShareAlt className="text-white" />
            </div>
          </div>
        </div>

        {sharePop && (
          <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#48556A] py-4 px-8 flex items-center justify-between z-50">
            <SharePop />

            <div
              className="bg-[#6E8098] rounded-full p-2 cursor-pointer"
              onClick={handleShareClick}
            >
              <IoMdShareAlt className="text-white" />
            </div>
          </div>
        )}

        {sharePop && (
          <div className="hidden md:block absolute -top-16 right-0">
            <SharePop />
          </div>
        )}
      </div>
    </div>
  );
}

export default ArticlePreviewComponent;
