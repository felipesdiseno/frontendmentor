import React from "react";

function RecipeComponent() {
  return (
    <div className="bg-white rounded-2xl w-1/4 flex flex-col justify-center p-4">
      <img
        src="recipePage/image-omelette.jpeg"
        alt="recipe-image"
        className="rounded-2xl"
      />
      <h1 className="text-2xl font-bold">Simple Omelette Recipe</h1>
      <h3 className="text-justify">
        An easy quick dish, perfect for any meal. This classic omelette combines
        beaten eggs cooked to perfection, optionally filled with choice of
        chesse, vegetables or meats.
      </h3>
      <h2>Preparation time</h2>
      <ul className="list-disc pl-5">
        <li>
          <span className="font-bold mr-2">Total:</span>
          Approximately 10 minutes
        </li>
        <li>
          <span className="font-bold mr-2">Prepartion:</span>5 minutes
        </li>
        <li>
          <span className="font-bold mr-2">Cooking:</span>5 minutes
        </li>
      </ul>
      <h2>Ingredients</h2>
      <ul className="list-disc pl-5">
        <li>2-3 large eggs</li>
        <li>Salt, to taste</li>
        <li>Pepper, to taste</li>
        <li>1 tablespoon of butter or oil</li>
        <li>
          Optional fillings: cheese, diced vegetables, cooked meats, herbs
        </li>
      </ul>
      <h2>Instructions</h2>
      <ol className="list-decimal pl-5">
        <li>
          <span className="font-bold mr-2">Beat the eggs:</span>
          In a bowl, beat the eggs with a pinch of salt and pepper until they
          are well mixed. You can add a tablespoon of water or milk for a
          fluffier texture.
        </li>
        <li>
          <span className="font-bold mr-2">Heat the pan:</span>
          Place a non-stick frying pan over medium heat and add butter or oil.
        </li>
        <li>
          <span className="font-bold mr-2">Cook the omelette:</span> Once the
          butter is melted and bubbling, pour in the eggs. Tilt the pan to
          ensure the eggs evenly coat the surface.
        </li>
        <li>
          <span className="font-bold mr-2">Add fillings (optional):</span> When
          the eggs begin to set at the edges but still slightly runny in the
          middle, sprinkle your chosen fillings over one half of the omelette.
        </li>
        <li>
          <span className="font-bold mr-2">Fold and serve:</span> When As the
          omelette continues to cook, carefully lift one edge and fold it over
          the fillings, Let it cook for another minute, then slide it onto a
          plate.
        </li>
        <li>
          <span className="font-bold mr-2">Enjoy:</span> Serve hot, with
          additional salt and pepper if needed.
        </li>
      </ol>
    </div>
  );
}

export default RecipeComponent;
