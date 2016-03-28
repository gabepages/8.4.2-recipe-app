var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');


var Recipe = Backbone.Model.extend({

});

var RecipeCollection = Backbone.Collection.extend({
  model: Recipe
});


module.exports= RecipeCollection;
