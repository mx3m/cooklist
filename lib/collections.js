Recipes = new Mongo.Collection('recipes');
Ingredients = new Mongo.Collection('ingredients');

Meteor.methods({
  addRecipe: function (title, userId) {
    Recipes.insert({
      title: title,
      createdAt: new Date(),
      userId: userId
    });
  },
  editRecipe: function (recipeId, title) {
    Recipes.update(recipeId, {$set: {title: title}});
  },
  deleteRecipe: function (recipeId) {
    Recipes.remove(recipeId);
  },
  addIngredient: function (title, recipeId) {
    Ingredients.insert({
      title: title,
      recipeId: recipeId
    });
  },
  removeIngredient: function (ingredientId) {
    Ingredients.remove(ingredientId);
  }
});
