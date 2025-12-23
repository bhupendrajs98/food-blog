const express = require('express');
const { 
    loginUser,
    getRecipes, 
    getRecipe, 
    addRecipe, 
    editRecipe, 
    deleteRecipe 
} = require('../Controller/recipe');

const router = express.Router();


// Login route
router.post("/login", loginUser);

// Get all recipes
router.get("/", getRecipes);

// Get recipe by ID
router.get("/:id", getRecipe);

// Add new recipe
router.post("/", addRecipe);

// Edit recipe by ID
router.put("/:id", editRecipe);

// Delete recipe by ID
router.delete("/:id", deleteRecipe);

module.exports = router;
