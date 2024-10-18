import React from "react";
import RecipeComponent from "@/components/recipeComponent";
import { IoHome } from "react-icons/io5";
import Link from "next/link";
function RecipePafe() {
  return (
    <div className="bg-[#f3e5d8] flex items-center justify-center p-2">
      <div className="absolute top-4 right-6 p-2 rounded-full bg-gray-400 text-white  hover:bg-gray-500 hover:cursor-pointer transform hover:scale-110 ease-in-out">
        <Link href="/">
          <IoHome className="text-3xl" />
        </Link>
      </div>

      <RecipeComponent />
    </div>
  );
}

export default RecipePafe;
