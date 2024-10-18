import React from "react";

const nutrition = [
  { value1: "Calories", value2: "277Kcal" },
  { value1: "Carbs", value2: "0g" },
  { value1: "Protein", value2: "20g" },
  { value1: "Fat", value2: "22g" },
];

function RecipeComponent() {
  return (
    <div className="bg-white md:rounded-2xl sm:rounded-none w-full max-w-[736px] flex flex-col justify-center overflow-hidden">
      <div className="md:p-10 md:pb-0">
        <img
          src="recipePage/image-omelette.jpeg"
          alt="recipe-image"
          className="w-full sm:rounded-none md:rounded-2xl"
        />
      </div>
      <div className="p-8 md:px-10 md:pb-10 md:pt-6">
        <h1 className="text-[40px] font-bold text-[#32312f] font-youngSerif">
          Simple Omelette Recipe
        </h1>
        <h3 className="text-justify font-outfit text-[#5F564D]">
          An easy quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with
          choice of cheese, vegetables or meats.
        </h3>
        <h2 className="text-[#7A284E] font-bold text-[20px] mt-4">
          Preparation time
        </h2>
        <ul className="list-disc pl-5 font-outfit text-[#7A284E]">
          <li>
            <span className="font-bold mr-2 text-[#5F564D]">Total:</span>
            <span className="text-[#5F564D]">Approximately 10 minutes</span>
          </li>
          <li>
            <span className="font-bold mr-2 text-[#5F564D]">Preparation:</span>
            <span className="text-[#5F564D]">5 minutes</span>
          </li>
          <li>
            <span className="font-bold mr-2 text-[#5F564D]">Cooking:</span>
            <span className="text-[#5F564D]">5 minutes</span>
          </li>
        </ul>
        <h2 className="text-[#854632] font-semibold text-[28px] font-youngSerif mt-6">
          Ingredients
        </h2>
        <ul className="list-disc pl-5 font-outfit text-[#854632]">
          <li className="text-[#5F564D] marker:text-[#854632]">
            2-3 large eggs
          </li>
          <li className="text-[#5F564D] marker:text-[#854632]">
            Salt, to taste
          </li>
          <li className="text-[#5F564D] marker:text-[#854632]">
            Pepper, to taste
          </li>
          <li className="text-[#5F564D] marker:text-[#854632]">
            1 tablespoon of butter or oil
          </li>
          <li className="text-[#5F564D] marker:text-[#854632]">
            Optional fillings: cheese, diced vegetables, cooked meats, herbs
          </li>
        </ul>
        <h2 className="text-[#854632] font-semibold text-[28px] font-youngSerif mt-6">
          Instructions
        </h2>
        <ol className="list-decimal pl-5 font-outfit marker:text-[#854632] marker:font-bold text-[#5F564D]">
          <li>
            <span className="font-bold mr-2 text-4">Beat the eggs:</span>
            In a bowl, beat the eggs with a pinch of salt and pepper until they
            are well mixed. You can add a tablespoon of water or milk for a
            fluffier texture.
          </li>
          <li>
            <span className="font-bold mr-2 text-4">Heat the pan:</span>
            Place a non-stick frying pan over medium heat and add butter or oil.
          </li>
          <li>
            <span className="font-bold mr-2">Cook the omelette:</span> Once the
            butter is melted and bubbling, pour in the eggs. Tilt the pan to
            ensure the eggs evenly coat the surface.
          </li>
          <li>
            <span className="font-bold mr-2">Add fillings (optional):</span>{" "}
            When the eggs begin to set at the edges but still slightly runny in
            the middle, sprinkle your chosen fillings over one half of the
            omelette.
          </li>
          <li>
            <span className="font-bold mr-2">Fold and serve:</span> As the
            omelette continues to cook, carefully lift one edge and fold it over
            the fillings. Let it cook for another minute, then slide it onto a
            plate.
          </li>
          <li>
            <span className="font-bold mr-2">Enjoy:</span> Serve hot, with
            additional salt and pepper if needed.
          </li>
        </ol>

        <div className="flex flex-col mt-6">
          <h2 className="text-[#854632] font-semibold text-[28px] font-youngSerif">
            Nutrition
          </h2>
          <h3 className="font-outfit text-[#5F564D]">
            The table below shows nutritional values per serving without the
            additional fillings.
          </h3>
          <div className="flex flex-col gap-2 mt-2 font-outfit">
            {nutrition.map((item, index) => (
              <div key={index} className="flex">
                <span className="text-[#5F564D] w-[288px] ml-8">
                  {item.value1}:
                </span>
                <span className="text-[#854632] font-bold">{item.value2}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeComponent;
