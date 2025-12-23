import React from 'react';
import { useNavigate } from "react-router-dom";

function RecipeCard({ recipe }) {
  const navigate = useNavigate();

  if (!recipe) return null;

  const { _id, title = "Untitled Recipe", time = "N/A", category = "General" } = recipe;

  return (
    <div
      onClick={() => navigate(`/recipe/${_id}`)}
      className="
        relative 
        bg-linear-to-r from-white to-gray-50 
        border border-gray-200 
        rounded-2xl 
        p-5 
        shadow-md 
        hover:shadow-xl 
        hover:scale-105 
        transition-all 
        duration-300 
        cursor-pointer
        group
      "
    >
      {/* Decorative top-right circle */}
      <div className="absolute top-2 right-2 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>

      <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="text-gray-500 mt-1 text-sm">⏱ {time}</p>
      <p className="text-gray-400 mt-1 text-sm uppercase tracking-wide">{category}</p>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-green-600 font-semibold group-hover:text-blue-600 transition-colors">
          View Details →
        </span>
        {/* Optional arrow icon */}
        <svg
          className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors"
          fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
}

export default RecipeCard;
