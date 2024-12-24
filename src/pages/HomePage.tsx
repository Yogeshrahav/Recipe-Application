// src/pages/HomePage.tsx
import React from 'react';
import AddRecipeForm from '../components/AddRecipeForm';
import RecipeList from '../components/RecipeList';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Recipe App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
};

export default HomePage;
