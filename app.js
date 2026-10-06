require("dotenv").config();
const express = require("express");
const cors = require("cors");
const logger = require("./src/middlewares/logger");
const { notFound, errorHandler } = require("./src/middlewares/errorHandler");
const recipeRoutes = require("./src/routes/recipeRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/api/recipes", recipeRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});