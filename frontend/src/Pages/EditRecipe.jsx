import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getRecipeById, updateRecipe } from "../Services/recipeApi";

export default function EditRecipe() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    time: "",
    category: "",
    ingredients: "",
    instructions: "",
  });

  const fetchRecipe = async () => {
    try {
      const res = await getRecipeById(id);
      const { title, time, category, ingredients, instructions } = res.data;
      setForm({ title, time, category, ingredients, instructions });
    } catch (err) {
      console.error("Error fetching recipe:", err);
    }
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateRecipe(id, form);
      navigate(`/recipe/${id}`);
    } catch (err) {
      console.error("Error updating recipe:", err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Edit Recipe</h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-6 rounded-xl shadow-md"
      >
        <div>
          <label className="block font-semibold mb-1">Recipe Name</label>
          <input
            type="text"
            value={form.title}
            placeholder="Recipe Name"
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
          />
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block font-semibold mb-1">Preparation Time</label>
            <input
              type="text"
              value={form.time}
              placeholder="e.g. 30 mins"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setForm({ ...form, time: e.target.value })}
            />
          </div>
          <div className="flex-1">
            <label className="block font-semibold mb-1">Category</label>
            <input
              type="text"
              value={form.category}
              placeholder="e.g. Dessert"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-1">Ingredients</label>
          <textarea
            value={form.ingredients}
            placeholder="List ingredients separated by commas"
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 h-24"
            onChange={(e) => setForm({ ...form, ingredients: e.target.value })}
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Instructions</label>
          <textarea
            value={form.instructions}
            placeholder="Step by step instructions"
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 h-32"
            onChange={(e) => setForm({ ...form, instructions: e.target.value })}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-700 transition"
        >
          Update Recipe
        </button>

        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mt-2 text-red-600 font-semibold hover:underline"
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
