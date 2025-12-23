import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getRecipeById, deleteRecipe } from "../Services/recipeApi";

export default function RecipeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch recipe
  const fetchRecipe = async () => {
    try {
      setLoading(true);
      const res = await getRecipeById(id);
      setRecipe(res.data);
    } catch (err) {
      setError("Failed to load recipe. Please try again.");
      console.error(err.response || err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipe();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      try {
        await deleteRecipe(id);
        navigate("/");
      } catch (err) {
        console.error("Delete failed:", err.response || err);
        alert("Failed to delete recipe. Try again.");
      }
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <p className="text-gray-500 text-lg">Loading recipe...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );

  if (!recipe)
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <p className="text-gray-500 text-lg">Recipe not found</p>
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-800 mt-4">{recipe.title}</h1>
      <p className="text-gray-600 mt-1">{recipe.category}</p>
      <p className="text-gray-700 mt-2">⏱ {recipe.time}</p>

      <div className="mt-6 bg-gray-50 p-6 rounded-xl shadow-sm">
        <h2 className="text-2xl font-semibold mb-2">Ingredients:</h2>
        <p className="text-gray-800">{recipe.ingredients}</p>
      </div>

      <div className="mt-6 bg-gray-50 p-6 rounded-xl shadow-sm">
        <h2 className="text-2xl font-semibold mb-2">Instructions:</h2>
        <p className="text-gray-800 whitespace-pre-line">{recipe.instructions}</p>
      </div>

      <div className="flex gap-4 mt-6">
        <button
          onClick={() => navigate(`/edit/${id}`)}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Edit Recipe
        </button>

        <button
          onClick={handleDelete}
          className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Delete Recipe
        </button>
      </div>

      <button
        onClick={() => navigate(-1)}
        className="mt-4 text-gray-600 hover:underline"
      >
        ← Back
      </button>
    </div>
  );
}
