// src/services/recipeService.ts
import { db } from './firebaseConfig';
import { ref, set, get, remove } from 'firebase/database';

// Add a new recipe
export const addRecipe = (id: string, recipe: { title: string; ingredients: string[]; steps: string[] }) => {
  set(ref(db, 'recipes/' + id), recipe);
};

// Get all recipes
export const getRecipes = async () => {
  const snapshot = await get(ref(db, 'recipes/'));
  return snapshot.val();
};

// Delete a recipe
export const deleteRecipe = (id: string) => {
  remove(ref(db, 'recipes/' + id));
};

// Update a recipe
export const updateRecipe = (id: string, recipe: { title: string; ingredients: string[]; steps: string[] }) => {
  set(ref(db, 'recipes/' + id), recipe);
};
