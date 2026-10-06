let recipes = [
  {
    id: "rcp-001",
    title: "Nasi Goreng Spesial (Sheila Rolanda / 2428240129)",
    category: "Main Course",
    ingredients: ["Nasi", "Telur", "Bawang"],
    instructions: ["Tumis bawang", "Masukkan nasi"]
  }
];

const RecipeModel = {
  getAll: () => recipes,
  getById: (id) => recipes.find((r) => r.id === id),
  create: (data) => {
    const newRecipe = { id: `rcp-${Date.now()}`, ...data };
    recipes.push(newRecipe);
    return newRecipe;
  },
  update: (id, data) => {
    const index = recipes.findIndex((r) => r.id === id);
    if (index === -1) return null;
    recipes[index] = { ...recipes[index], ...data };
    return recipes[index];
  },
  delete: (id) => {
    const index = recipes.findIndex((r) => r.id === id);
    if (index === -1) return false;
    recipes.splice(index, 1);
    return true;
  }
};

module.exports = RecipeModel;