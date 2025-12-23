import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Recipe from "./Pages/Recipe";
import Login from "./Components/Login";
import RecipeDetails from "./Pages/RecipeDetails";
import EditRecipe from "./Pages/EditRecipe";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Navbar />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipe />} />
            <Route path="/login" element={<Login />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route path="/edit/:id" element={<EditRecipe />} />
          </Routes>
        </div>

        <Footer className="bg-gray-100 text-center py-4 shadow-md" />
      </BrowserRouter>
    </div>
  );
}
