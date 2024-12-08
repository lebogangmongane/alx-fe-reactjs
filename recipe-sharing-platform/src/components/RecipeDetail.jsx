import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch recipe details based on ID (mock example using local JSON file)
    fetch('/data.json') // Assuming data.json is in the public folder
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((recipe) => recipe.id === parseInt(id, 10));
        setRecipe(selectedRecipe);
      })
      .catch((error) => console.error('Error fetching recipe:', error));
  }, [id]);

  if (!recipe) {
    return <p>Loading recipe...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <p className="text-gray-700 mb-4">
        <strong>Summary:</strong> {recipe.summary}
      </p>
      <h2 className="text-xl font-semibold mb-2">Instructions:</h2>
      <ul className="list-disc list-inside text-gray-700">
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeDetail;
