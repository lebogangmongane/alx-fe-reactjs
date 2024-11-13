/* eslint-disable no-unused-vars */
// RecipeDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipes = useRecipeStore((state) => state.recipes);
  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

  return recipe ? (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
    </div>
  ) : (
    <p>Recipe not found.</p>
  );
};

export default RecipeDetails;
