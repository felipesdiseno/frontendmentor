import React from "react";

function TimeTRackingC() {
  return (
    <div className="flex md:flex-row sm:flex-col gap-6 md:w-[160px] md:h-[272px] sm:w-[240px] sm:h-[74.66px]">
      <div className="flex flex-col bg-[#1C1F4A] rounded-xl">
        <div className="bg-[#5847EB] rounded-xl p-2 md:flex-col sm:flex-row flex md:w-[160px] md:h-[181px] sm:w-[240px] sm:h-[74.66px]">
          <div className="p-1 bg-white rounded-full flex  items-start w-fit">
            <img
              src="/timeTracking/image-jeremy.png"
              alt="profile picture"
              className="w-[40px] h-[40px] rounded-full"
            />
          </div>
          <h3>Report for</h3>
          <h2>Jeremy Robson</h2>
        </div>
        <div className="flex md:flex-col sm:flex-row gap-2 sm:justify-between sm:items-center md:items-start p-2">
          <h3>Daily</h3>
          <h3>Weekly</h3>
          <h3>Monthly</h3>
        </div>
      </div>
    </div>
  );
}

export default TimeTRackingC;
