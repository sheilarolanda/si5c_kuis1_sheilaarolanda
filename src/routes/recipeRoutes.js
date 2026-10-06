const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");
const checkApiKey = require("../middlewares/checkApiKey");

router.get("/", recipeController.getAllRecipes);
router.get("/:id", recipeController.getRecipeById);

// Protected routes (membutuhkan API Key)
router.post("/", checkApiKey, recipeController.createRecipe);
router.put("/:id", checkApiKey, recipeController.updateRecipe);
router.delete("/:id", checkApiKey, recipeController.deleteRecipe);

module.exports = router;
