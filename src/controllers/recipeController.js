const RecipeModel = require("../models/recipeModel");

exports.getAllRecipes = (req, res) => {
  const data = RecipeModel.getAll();
  res.status(200).json({ status: "success", data });
};

exports.getRecipeById = (req, res) => {
  const recipe = RecipeModel.getById(req.params.id);
  if (!recipe) {
    return res.status(404).json({ status: "fail", message: "Resep tidak ditemukan" });
  }
  res.status(200).json({ status: "success", data: recipe });
};

exports.createRecipe = (req, res) => {
  const { title, category, ingredients, instructions } = req.body;
  if (!title || !category) {
    return res.status(400).json({ status: "fail", message: "Data tidak lengkap: title dan category wajib diisi" });
  }
  const newRecipe = RecipeModel.create({ title, category, ingredients, instructions });
  res.status(201).json({ status: "success", data: newRecipe });
};

exports.updateRecipe = (req, res) => {
  const updated = RecipeModel.update(req.params.id, req.body);
  if (!updated) {
    return res.status(404).json({ status: "fail", message: "Resep tidak ditemukan untuk diperbarui" });
  }
  res.status(200).json({ status: "success", data: updated });
};

exports.deleteRecipe = (req, res) => {
  const deleted = RecipeModel.delete(req.params.id);
  if (!deleted) {
    return res.status(404).json({ status: "fail", message: "Resep tidak ditemukan untuk dihapus" });
  }
  res.status(200).json({ status: "success", message: "Resep berhasil dihapus" });
};