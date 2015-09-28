Recipes = new Mongo.Collection('recipes');

if (Meteor.isClient) {
  Template.body.helpers({
    recipes: function () {
      return Recipes.find({}, {sort: {createdAt: -1}});
    }
  });

  Template.addNew.events({
    'submit .add-new-recipe': function (e) {
      e.preventDefault();

      var title = $(e.target).find('[name=title]').val();

      Recipes.insert({
        title: title,
        createdAt: new Date()
      });

      // Clear form
      $(e.target).find('[name=title]').val("");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
