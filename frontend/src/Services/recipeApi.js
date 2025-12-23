import axios from "axios";

const API = "http://localhost:7000/recipe";

export const getAllRecipes = () => axios.get(API);

export const getRecipeById = (id) => axios.get(`${API}/${id}`);

export const addRecipe = (data) => axios.post(API, data);

export const updateRecipe = (id, data) => axios.put(`${API}/${id}`, data);

export const deleteRecipe = (id) => axios.delete(`${API}/${id}`);
