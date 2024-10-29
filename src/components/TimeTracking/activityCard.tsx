import React from "react";
import { ITimeTrackingContent } from "../../../interfaces/ITimeTracking";

// interface ActicyCardProps extends ITimeTrackingContent {
//   daily: string;
//   weekly: string;
//   monthly: string;
// }
function ActivityCard({
  img,

  title,
  duration,
  description,
  color,
}: ITimeTrackingContent) {
  console.log(color);
  return (
    <div
      className="flex flex-col  justify-end rounded-xl relative p-2 md:w-[160px] md:h-[128px] sm:w-[240px] sm:h-[112px]"
      style={{ backgroundColor: color }}
    >
      <div className="absolute top-2 right-0 z-0">
        <img
          src={img}
          alt="imageDescription"
          className="w-[48px] h-[48.63px]"
        />
      </div>
      <div className="bg-[#1C1F4A] flex flex-col rounded-xl md:w-[160px] md:h-[96px] sm:w-[240px] sm:h-[84px] z-10 absolute bottom-0 left-0 right-0 mx-auto">
        <div className="flex flex-row justify-between items-center w-full p-2 ">
          <h3 className="text-[10px] text-white">{title}</h3>
          <img
            src="/timeTracking/icon-ellipsis.svg"
            alt="imageDescription"
            className="text-white"
          />
        </div>
        <div className="p-2">
          <h3 className="text-2xl text-white">{duration}</h3>
          <h4 className="text-[10px] text-white">{description}</h4>
        </div>
      </div>
    </div>
  );
}

export default ActivityCard;
