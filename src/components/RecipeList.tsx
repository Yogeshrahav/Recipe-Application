// src/components/RecipeList.tsx
import React, { useEffect, useState } from 'react';
import { getRecipes } from '../services/recipeServices';
import RecipeCard from './RecipeCard';

const RecipeList: React.FC = () => {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchRecipes = async () => {
      const data = await getRecipes();
      if (data) {
        setRecipes(Object.entries(data).map(([id, recipe]) => ({ id, ...recipe })));
      }
    };
    fetchRecipes();
  }, []);

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(search.toLowerCase()) ||
      recipe.ingredients.some((ingredient: string) =>
        ingredient.toLowerCase().includes(search.toLowerCase())
      )
  );

  return (
    <div>
        <h1>Recipe List</h1>
      <input
        type="text"
        placeholder="Search recipes by title or ingredient"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredRecipes.map((recipe) => (
        <RecipeCard key={recipe.id} {...recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
