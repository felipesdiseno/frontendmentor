import React from "react";
import { ITimeTrackingContent } from "../../../interfaces/ITimeTracking";

function ActivityCard({
  img,

  title,
  duration,
  description,
  color,
}: ITimeTrackingContent) {
  return (
    <div
      className="flex flex-col justify-end rounded-xl relative p-2 md:w-[255px] md:h-[203px] sm:w-[314px] sm:h-[202px]"
      style={{ backgroundColor: color }}
    >
      <div className="absolute top-2 right-0 z-0">
        <img
          src={img}
          alt="imageDescription"
          className="w-[48px] h-[48.63px]"
        />
      </div>
      <div className="bg-[#1C1F4A] flex flex-col hover:cursor-pointer hover: rounded-xl md:w-[255px]  sm:w-[314px] sm:h-[162px] z-10 absolute bottom-0 left-0 right-0 mx-auto">
        <div className="flex flex-row justify-between items-center w-full p-2 ">
          <h3 className="text-lg text-white mt-[28px] sm:mt-[28px] sm:ml-[10px]">
            {title}
          </h3>
          <img
            src="/timeTracking/icon-ellipsis.svg"
            alt="imageDescription"
            className="text-white"
          />
        </div>
        <div className="p-2 sm:h-[32px] flex sm:flex-row sm:items-center sm:justify-center sm:gap-[43px]">
          <span className="text-[56px] sm:text-8 text-[#BDC1FF]">
            {duration}
          </span>
          <span className="text-4 text-[#BDC1FF] sm:mt-1 sm:ml-[28px] ">
            {description}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ActivityCard;
