import React from "react";
import TimeTrackingCProps from "../../../interfaces/ITimeTrackingProps";
function TimeTRackingC({
  selectedInterval,
  setSelectedInterval,
}: TimeTrackingCProps) {
  return (
    <div className="flex flex-col h-[518px] bg-[#1C1F4A] rounded-[12px] ">
      <div className="bg-[#5847EB] w-[255px] h-[350px] sm:w-[314px] rounded-xl px-8">
        <div className="p-1 bg-white rounded-full flex  items-start w-fit mt-8">
          <img
            src="/timeTracking/image-jeremy.png"
            alt="profile picture"
            className="w-[80px] h-[80px] rounded-full"
          />
        </div>
        <h3 className="md:text-base sm:text-xs text-[#bdc1ff] mt-[43px]">
          Report for
        </h3>
        <div className="flex md:flex-col sm:flex-row ">
          <h2 className="text-white text-[40px] sm:text-[24px] font-rubik">
            Jeremy
          </h2>
          <h2 className="text-white text-[40px] md:mt-3 sm:text-[24px] font-rubik sm:ml-2 md:ml-0">
            Robson
          </h2>
        </div>
      </div>
      {/* parte inferior targeta */}
      <div className="w-[255px]  rounded-b-[12px] px-6">
        <h3
          onClick={() => setSelectedInterval("daily")}
          className={`cursor-pointer mt-6 ${
            selectedInterval === "daily"
              ? "text-white text-[18px]"
              : "text-[#5746E9]"
          }`}
        >
          Daily
        </h3>
        <h3
          onClick={() => setSelectedInterval("weekly")}
          className={`cursor-pointer mt-6  ${
            selectedInterval === "weekly"
              ? "text-white text-[18px]"
              : "text-[#5746E9]"
          }`}
        >
          Weekly
        </h3>
        <h3
          onClick={() => setSelectedInterval("monthly")}
          className={`cursor-pointer mt-6  ${
            selectedInterval === "monthly"
              ? "text-white text-[18px]"
              : "text-[#5746E9]"
          }`}
        >
          Monthly
        </h3>
      </div>
    </div>
  );
}

export default TimeTRackingC;
