import React from "react";

function TimeTRackingC() {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col bg-[#1C1F4A] rounded-xl">
        <div className="bg-[#5847EB] rounded-xl p-2 ">
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
        <div className="flex flex-col p-2">
          <h3>Daily</h3>
          <h3>Weekly</h3>
          <h3>Monthly</h3>
        </div>
      </div>
    </div>
  );
}

export default TimeTRackingC;
