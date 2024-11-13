// recipeStore.js
import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchQuery: '',
  
  // Action to set the entire list of recipes
  setRecipes: (newRecipes) => set({ recipes: newRecipes }),
  
  setSearchQuery: (query) => set({ searchQuery: query }),
  
  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  
  editRecipe: (id, updatedRecipe) => 
    set((state) => ({
      recipes: state.recipes.map((recipe) => 
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    })),
    
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
    
  filteredRecipes: (state) => state.recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(state.searchQuery.toLowerCase())
  ),
}));

export default useRecipeStore;
