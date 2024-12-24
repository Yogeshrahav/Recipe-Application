// src/components/RecipeCard.tsx
import React from 'react';
import { deleteRecipe } from '../services/recipeServices';
import { Link } from 'react-router-dom';

interface RecipeProps {
  id: string;
  title: string;
  ingredients: string[];
  steps: string[];
}

const RecipeCard: React.FC<RecipeProps> = ({ id, title, ingredients, steps }) => {
  return (
    <div className="recipe-card">
      <h3>{title}</h3>
      <p><strong>Ingredients:</strong> {ingredients.join(', ')}</p>
      <p><strong>Steps:</strong> {steps.join('. ')}</p>
      <Link to={`/recipe/${id}`}>View Details</Link>
      <button onClick={() => deleteRecipe(id)}>Delete</button>
    </div>
  );
};

export default RecipeCard;
