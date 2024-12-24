// src/components/AddRecipeForm.tsx
import React, { useState } from 'react';
import { addRecipe } from '../services/recipeServices';

const AddRecipeForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newRecipe = {
      title,
      ingredients: ingredients.split(','),
      steps: steps.split('.'),
    };
    const id = Date.now().toString();
    addRecipe(id, newRecipe);
    setTitle('');
    setIngredients('');
    setSteps('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Ingredients (comma separated)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Steps (dot separated)"
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
        required
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
