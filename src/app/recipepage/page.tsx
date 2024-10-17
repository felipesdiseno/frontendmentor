import React from "react";
import RecipeComponent from "@/components/recipeComponent";
function RecipePafe() {
  return (
    <div className="bg-[#f3e5d8] flex items-center justify-center flex-col p-6">
      <h1 className="text-3xl font-bold mb-4 text-gray-500">
        {" "}
        A wonderful Recipe
      </h1>
      <RecipeComponent />
    </div>
  );
}

export default RecipePafe;
