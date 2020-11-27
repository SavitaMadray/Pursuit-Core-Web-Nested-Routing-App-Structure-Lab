const express = require("express");
const router = express.Router();

let recipe = [
  {
    name: "Grilled Cheese",
    ingredients: ["bread", "cheese", "butter"],
    directions:
      "Preheat skillet over medium heat. Generously butter one side of a slice of bread. Place bread butter-side-down onto skillet bottom and add 1 slice of cheese. Butter a second slice of bread on one side and place butter-side-up on top of sandwich. Grill until lightly browned and flip over; continue grilling until cheese is melted. Repeat with remaining 2 slices of bread, butter and slice of cheese.",
  },
];

router.get("/all", (req, res, next) => {
  res.json({
    recipes: recipe,
  });
});

router.get("/:ingredient", (req, res, next) => {
  let ingredient = req.params.ingredient;
  let sameIngr = [];
  for (let i = 0; i < recipe.length; i++) {
    if (recipe[i].ingredients.includes(ingredient)) {
      sameIngr.push(recipe[i]);
    }
  }
  res.json({
    sameIngr: sameIngr,
  });
});

router.delete("/remove/:name", (req, res, next) => {
  let name = req.params.name;
  let removedEl;
  for (let i = 0; i < recipe.length; i++) {
    if (recipe[i].name === name) {
      removedEl = recipe.splice(i, 1);
    }
  }
  res.json({
    removedEl: removedEl,
  });
});

router.post("/add", (req, res, next) => {
  recipe.push(req.body);
  res.json({
    recipe: req.body,
  });
});

router.put("/update/:name/", (req, res, next) => {
  let name = req.params.name;

  //search arr for name and update all the recipes values with info from req.body
  for (let i = 0; i < recipe.length; i++) {
    if (recipe[i].name === name) {
      recipe[i] = req.body;
    }
  }
  res.send(req.body);
});

router.patch("/fix/:name", (req, res, next) => {
  let name = req.params.name;
  for (let i = 0; i < recipe.length; i++) {
    if (req.body === "name") {
    }
  }
});

module.exports = router;
