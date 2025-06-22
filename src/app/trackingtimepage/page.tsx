"use client";
import ActivityCard from "@/components/TimeTracking/activityCard";
import { IoHome } from "react-icons/io5";
import Link from "next/link";
import React, { useState } from "react";
import TimeTRackingC from "@/components/TimeTracking";
import {
  timeDailyInfo,
  timeWeeklyInfo,
  timeMonthlyInfo,
} from "@/lib/timeTracking";

function TrackingTimePage() {
  const [selectedInterval, setSelectedInterval] = useState<string>("daily");
  const currentData =
    selectedInterval === "daily"
      ? timeDailyInfo
      : selectedInterval === "weekly"
      ? timeWeeklyInfo
      : timeMonthlyInfo;
  return (
    <div className="h-screen w-screen bg-[#0F1424] flex items-start justify-center overflow-y-auto py-4">
      <div className="flex md:flex-row sm:flex-col gap-[30px]">
        <TimeTRackingC
          selectedInterval={selectedInterval}
          setSelectedInterval={setSelectedInterval}
        />
        <div className=" grid md:grid-cols-3 sm:grid-cols-1 md:gap-x-[30px] md:gap-y-[30px]">
          {currentData.map((info, index) => (
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
