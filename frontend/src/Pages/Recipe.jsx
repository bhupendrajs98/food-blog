import { useEffect, useState } from "react";
import RecipeModal from "../Components/RecipeModal";
import RecipeCard from "../Components/RecipeCard";
import { getAllRecipes } from "../Services/recipeApi";

export default function Recipe() {
  const [showModal, setShowModal] = useState(false);
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = () => {
    getAllRecipes().then((res) => {
      setRecipes(res.data);
    });
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className="p-6">
      <button
        onClick={() => setShowModal(true)}
        className="bg-green-600 text-white px-5 py-2 rounded-md"
      >
        Share Recipe
      </button>

      {showModal && (
        <RecipeModal close={() => setShowModal(false)} refresh={fetchRecipes} />
      )}

      <div className="grid grid-cols-3 gap-6 mt-6">
        {recipes.map((r) => (
          <RecipeCard key={r._id} recipe={r} />
        ))}
      </div>
    </div>
  );
}
