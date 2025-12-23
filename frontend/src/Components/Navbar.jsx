import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check login status on component load
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setLoggedIn(!!token);
  }, []);

  // Logout the user
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="bg-green-700 px-6 py-4 text-white flex items-center justify-between shadow-md">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold">
        🍽 RecipeHub
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-6 text-lg">
        <Link to="/" className="hover:text-gray-200 transition">Home</Link>

        <Link to="/recipes" className="hover:text-gray-200 transition">Recipes</Link>

        {/* Login / Logout Button */}
        {loggedIn ? (
          <button
            onClick={handleLogout}
            className="bg-white text-green-700 font-semibold px-4 py-1 rounded hover:bg-gray-200 transition"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="bg-white text-green-700 font-semibold px-4 py-1 rounded hover:bg-gray-200 transition"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
