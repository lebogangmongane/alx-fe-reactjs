import React from 'react';
import { useParams } from 'react-router-dom';
import recipes from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipes.find((rec) => rec.id === parseInt(id));

  if (!recipe) return <div>Recipe not found</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded" />
      <p className="text-gray-600 mt-4">{recipe.summary}</p>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <p>List ingredients here...</p>
        <h2 className="text-2xl font-semibold mt-4">Steps</h2>
        <p>Describe steps here...</p>
      </div>
    </div>
  );
};

export default RecipeDetail;
