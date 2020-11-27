document.addEventListener("DOMContentLoaded", () => {
  loadRecipes();
  postRecipes();
});

const loadRecipes = async () => {
  let url = "http://localhost:3400/recipe/all";

  try {
    let response = await axios.get(url);
    let data = response.data;
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

const postRecipes = async () => {
  let recipe = {
    name: "Salad",
    ingredients: ["lettuce", "tomato", "cucumber"],
    directions: "Wash all items, chop and toss with dressing",
  };

  let url = "http://localhost:3400/recipe/all";
  let response = await axios.post(url, recipe);
  let date = response.data;
  console.log(data);
};
