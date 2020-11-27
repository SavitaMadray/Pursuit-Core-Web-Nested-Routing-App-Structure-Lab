const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 3400;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

const recipeRouter = require("./routes/recipe.js");
app.use("/recipe", recipeRouter);

const userRouter = require("./routes/users.js");
app.use("/users", userRouter);

app.listen(port, () => {
  `server on ${port}`;
});
