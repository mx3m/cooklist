Meteor.methods({
  addRecipe: function (title, userId) {
    Recipes.insert({
      title: title,
      createdAt: new Date(),
      userId: userId
    });
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