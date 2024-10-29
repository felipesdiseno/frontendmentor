import TimeTRackingC from "@/components/TimeTracking";
import React from "react";
import { IoHome } from "react-icons/io5";
import Link from "next/link";
import ActivityCard from "@/components/TimeTracking/activityCard";
import { timeDailyInfo } from "@/lib/timeTracking";
function TrackingTimePage() {
  return (
    <div className="h-screen w-screen bg-[#0F1424] flex items-center justify-center">
      <div className="flex md:flex-row sm:flex-col gap-4">
        <TimeTRackingC />
        <div className=" grid md:grid-cols-3 sm:grid-cols-1 gap-4 ">
          {timeDailyInfo.map((info, index) => (
            <ActivityCard key={index} {...info} />
          ))}
        </div>
      </div>
      <div className="absolute top-4 right-4 p-2 ml-2 rounded-full bg-gray-400 text-white hover:bg-gray-500 hover:cursor-pointer transform hover:scale-110 ease-in-out">
        <Link href={"/"}>
          <IoHome className="text-3xl" />
        </Link>
      </div>
    </div>
  );
}

export default TrackingTimePage;
