import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title) newErrors.title = "Title is required.";
    if (!ingredients) newErrors.ingredients = "Ingredients are required.";
    if (!instructions) newErrors.instructions = "Instructions are required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Here you would handle the submission (e.g., sending the data to an API or updating state)
      console.log('Submitting:', { title, ingredients, instructions });
      // Reset form fields
      setTitle('');
      setIngredients('');
      setInstructions('');
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="title">
          Recipe Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={`border ${errors.title ? 'border-red-500' : 'border-gray-300'} p-2 w-full`}
        />
        {errors.title && <p className="text-red-500 text-xs italic">{errors.title}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="ingredients">
          Ingredients
        </label>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className={`border ${errors.ingredients ? 'border-red-500' : 'border-gray-300'} p-2 w-full`}
          rows="4"
        />
        {errors.ingredients && <p className="text-red-500 text-xs italic">{errors.ingredients}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="instructions">
          Instructions
        </label>
        <textarea
          id="instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className={`border ${errors.instructions ? 'border-red-500' : 'border-gray-300'} p-2 w-full`}
          rows="4"
        />
        {errors.instructions && <p className="text-red-500 text-xs italic">{errors.instructions}</p>}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
