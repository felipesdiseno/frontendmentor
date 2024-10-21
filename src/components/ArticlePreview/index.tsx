"use client";
import React, { useState } from "react";
import { IoMdShareAlt } from "react-icons/io";
import SharePop from "@/components/ArticlePreview/sharePop";
function ArticlePreviewComponent() {
  const [sharePop, setSharePop] = useState(false);
  return (
    <div className=" flex flex-row w-[730px] h-[280px] rounded-xl shadow-xl relative ">
      <img
        src="articlePreview/drawers.jpg"
        alt="drawers"
        className="rounded-l-xl"
      />
      <div className="flex flex-col ml-6">
        <p className="font-bold text-xl cursor-default">
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </p>
        <p className="text-[13.5px] cursor-default">
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
        <div className="flex flex-row items-center justify-between mr-6">
          <div className="flex flex-row">
            <img
              src="articlePreview/avatar-michelle.jpg"
              alt="avatar"
              className="w-[39px] h-[39px] rounded-full"
            />
            <div className="flex flex-col ml-2">
              <h3 className="text-[#48556A] font-bold cursor-default">
                Michelle Appleton
              </h3>
              <h3 className="text-[#9EAFC2] cursor-default">21 Oct 2024</h3>
            </div>
          </div>
          <div className="relative">
            <div
              className="bg-[#9EAFC2] rounded-full p-1 hover:bg-[#6E8098] cursor-pointer"
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
