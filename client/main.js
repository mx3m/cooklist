Template.recipesList.helpers({
  recipes: function () {
    return Recipes.find({
      userId: Meteor.user()._id}, {
        sort: {createdAt: -1}
      }
    );
  }
});

Template.ingredientsList.helpers({
  ingredients: function () {
    return Ingredients.find({recipeId: this._id});
  }
});

Template.ingredientItem.events({
  'click .ingredient-item-delete': function () {
    Meteor.call('removeIngredient', this._id);
  }
});

Template.recipeNew.events({
  'submit .add-new-recipe': function (e) {
    e.preventDefault();

    var title = $(e.target).find('[name=title]').val();
    var userId = Meteor.user()._id;

    console.log("recipes to be added");

    Meteor.call('addRecipe', title, userId);

    console.log("recipes correctly added to the db");

    // Clear form
    $(e.target).find('[name=title]').val("");
  }
});

Template.recipeItem.events({
  'click .recipe-item-delete': function () {
    var confirmation = confirm("Are you sure? This action is permanent!");
    if (confirmation)
      Meteor.call('deleteRecipe', this._id);
  },
  'click .recipe-item-edit': function (e) {
    $(e.target).parents('.list-group-item').toggleClass('is-edited');
  },
  'click .list-group-item': function (e) {
    $(e.target).toggleClass('is-toggled');
    e.stopPropagation();
  },
  'submit .recipe-item-title-edit': function(e) {
    e.preventDefault();
    var title = $(e.target).find('[name=title]').val();

    Meteor.call('editRecipe', this._id, title);

    $(e.target).parents('.list-group-item').toggleClass('is-edited');
  }
});

Template.ingredientNew.events({
  'submit .add-new-ingredient': function (e) {
    e.preventDefault();

    var title = $(e.target).find('[name=title]').val();

    Meteor.call('addIngredient', title, this._id);

    $(e.target).find('[name=title]').val("");
  }
});

Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});
