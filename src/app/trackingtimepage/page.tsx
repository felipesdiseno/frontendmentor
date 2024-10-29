import TimeTRackingC from "@/components/TimeTracking";
import React from "react";
import { IoHome } from "react-icons/io5";
import Link from "next/link";
import ActivityCard from "@/components/TimeTracking/activityCard";
function TrackingTimePage() {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-center bg-[#0F1424] h-screen w-screen gap-6">
      <TimeTRackingC />
      <ActivityCard />
      <div className="absolute top-4 right-4 p-2 ml-2 rounded-full bg-gray-400 text-white hover:bg-gray-500 hover:cursor-pointer transform hover:scale-110 ease-in-out">
        <Link href={"/"}>
          <IoHome className="text-3xl" />
        </Link>
      </div>
    </div>
  );
}

export default TrackingTimePage;
