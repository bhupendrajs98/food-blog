const Recipes = require("../models/recipe");

const loginUser = (req, res) => {
  const { email, password } = req.body;

  if (email !== "admin@gmail.com" || password !== "123456") {
    return res.status(400).json({ message: "Invalid Credentials" });
  }

  const token = "mySimpleToken123";

  return res.json({
    message: "Login successful",
    token,
  });
};

const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipes.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

const getRecipe = async (req, res) => {
  try {
    const recipe = await Recipes.findById(req.params.id);

    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.json(recipe);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

const addRecipe = async (req, res) => {
  try {
    const { title, ingredients, instructions, time, category } = req.body;

    if (!title || !ingredients || !instructions) {
      return res
        .status(400)
        .json({ message: "Required fields cannot be empty" });
    }

    const newRecipe = await Recipes.create({
      title,
      ingredients,
      instructions,
      time,
      category,
    });

    res.json(newRecipe);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

const editRecipe = async (req, res) => {
  try {
    const { title, ingredients, instructions, time, category } = req.body;

    if (!title || !ingredients || !instructions) {
      return res
        .status(400)
        .json({ message: "Required fields cannot be empty" });
    }

    const updatedRecipe = await Recipes.findByIdAndUpdate(
      req.params.id,
      { title, ingredients, instructions, time, category },
      { new: true }
    );

    if (!updatedRecipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.json(updatedRecipe);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

const deleteRecipe = async (req, res) => {
  try {
    const deletedRecipe = await Recipes.findByIdAndDelete(req.params.id);

    if (!deletedRecipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.json({ message: "Recipe deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

module.exports = {
  loginUser,
  getRecipes,
  getRecipe,
  addRecipe,
  editRecipe,
  deleteRecipe,
};
