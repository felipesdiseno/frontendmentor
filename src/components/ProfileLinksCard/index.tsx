import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
function ProfileLinkCard() {
  return (
    <div className="flex flex-col rounded-md  bg-gray-800 p-6">
      <img
        src="profilelink/profilepic.jpg"
        alt="profile picture"
        className="self-center rounded-full w-56 h-56"
      />
      <h1 className="text-2xl font-bold text-white text-center">
        Felipe Sanchez
      </h1>
      <h2 className="text-sm text-[#C8F22E] text-center mt-4">
        Palmira, Colombia
      </h2>
      <h2 className="text-sm text-white text-center mt-4">
        &quot;Front-end Developer and industrial designer&quot;
      </h2>
      <div className="flex flex-col justify-center gap-4 mt-4">
        <Button className="bg-gray-700 hover:bg-[#C8F22E] hover:text-[#465902]">
          <Link href="https://github.com/felipesdiseno">GitHub</Link>
        </Button>
        <Button className="bg-gray-700 hover:bg-[#C8F22E] hover:text-[#465902]">
          <Link href="">Frontend Mentor</Link>
        </Button>
        <Button className="bg-gray-700 hover:bg-[#C8F22E] hover:text-[#465902]">
          <Link href="https://www.linkedin.com/in/felipe-frontdev/">
            Linkedin
          </Link>
        </Button>
        <Button className="bg-gray-700 hover:bg-[#C8F22E] hover:text-[#465902]">
          <Link href="https://x.com/?lang=es">Twitter</Link>
        </Button>
        <Button className="bg-gray-700 hover:bg-[#C8F22E] hover:text-[#465902]">
          <Link href="https://www.instagram.com/">Instagram</Link>
        </Button>
      </div>
    </div>
  );
}

export default ProfileLinkCard;
