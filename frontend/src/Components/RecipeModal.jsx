import React, { useState } from "react";
import { addRecipe } from "../Services/recipeApi";

function RecipeModal({ close, refresh }) {
  const [form, setForm] = useState({
    title: "",
    time: "",
    category: "",
    ingredients: "",
    instructions: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    addRecipe(form)
      .then(() => {
        refresh();
        close();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-3xl mx-4 p-8 rounded-xl shadow-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Share Your Recipe
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Recipe Name"
            className="w-full border p-3 rounded-lg"
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />

          <input
            type="text"
            placeholder="Preparation Time"
            className="w-full border p-3 rounded-lg"
            onChange={(e) => setForm({ ...form, time: e.target.value })}
          />

          <input
            type="text"
            placeholder="Category"
            className="w-full border p-3 rounded-lg"
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          />

          <textarea
            placeholder="Ingredients"
            className="w-full border p-3 rounded-lg h-28"
            onChange={(e) => setForm({ ...form, ingredients: e.target.value })}
          />

          <textarea
            placeholder="Instructions"
            className="w-full border p-3 rounded-lg h-32"
            onChange={(e) => setForm({ ...form, instructions: e.target.value })}
          />

          <button
            type="submit"
            className="bg-green-600 text-white py-3 rounded-lg w-full text-lg font-semibold"
          >
            Submit Recipe
          </button>
        </form>

        <button
          onClick={close}
          className="text-red-600 mt-5 w-full font-semibold text-lg"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default RecipeModal;
