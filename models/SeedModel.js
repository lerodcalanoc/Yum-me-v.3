const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SeedRecipeSchema = new Schema({
  id: {
    type: String, 
    required: true 
  },
  sourceUrl: {
    type: String,
    required: true,
  },
  img: { 
    type: String, 
    required: true 
  },
  title: { 
    type: String, 
    required: true 
  },
  servings: String,
  extendedIngredients: {
    Ingredients: {
      type: Array
    },
    Toppings: {
      type: Array
    }
  },
  extendedInstructions: {
    Instructions: {
      type: Array
    },
    Topping: {
      type: Array
    }
  },
  user: String,
  dateSaved: { 
    type: Date, 
    default: Date.now 
  }
});

const SeedRecipe = mongoose.model("SeedRecipe", SeedRecipeSchema);

module.exports = SeedRecipe;
