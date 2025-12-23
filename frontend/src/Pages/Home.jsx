import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 
                    bg-linear-to-r from-green-400 via-green-500 to-blue-500 
                    text-white">
      <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
        Welcome to RecipeHub
      </h1>

      <p className="text-white text-lg max-w-md text-center mb-6 drop-shadow-md">
        Explore delicious recipes, discover new dishes, and save your
        favorites — all in one place!
      </p>

      <Link
        to="/recipes"
        className="bg-white text-green-700 px-6 py-3 rounded-lg text-lg font-semibold 
                   hover:bg-green-100 transition shadow-lg"
      >
        View Recipes
      </Link>
    </div>
  );
}

export default Home;
