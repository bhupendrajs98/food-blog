import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">

        {/* Left */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-semibold text-white">🍽 RecipeHub</h2>
          <p className="text-sm text-gray-400">
            Cook • Share • Enjoy
          </p>
        </div>

        {/* Center */}
        <div className="flex gap-6 text-sm">
          <a href="/" className="hover:text-white transition">
            Home
          </a>
          <a href="/add" className="hover:text-white transition">
            Add Recipe
          </a>
          <a href="/about" className="hover:text-white transition">
            About
          </a>
        </div>

        {/* Right */}
        <div className="text-sm text-gray-400 mt-4 md:mt-0">
          © {new Date().getFullYear()} RecipeHub
        </div>
      </div>
    </footer>
  );
}

export default Footer;
