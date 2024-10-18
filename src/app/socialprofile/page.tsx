import ProfileLinkCard from "@/components/ProfileLinksCard";
import React from "react";
import { IoHome } from "react-icons/io5";
import Link from "next/link";

function SocialLinksProfile() {
  return (
    <div className="bg-gray-900 relative flex items-center justify-center gap-8 min-h-screen p-6">
      <ProfileLinkCard />
      <div className="absolute top-4 right-4 p-2 rounded-full bg-gray-400 text-white hover:bg-gray-500 hover:cursor-pointer transform hover:scale-110 ease-in-out">
        <Link href={"/"}>
          <IoHome className="text-3xl" />
        </Link>
      </div>
    </div>
  );
}

export default SocialLinksProfile;
