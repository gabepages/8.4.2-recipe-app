var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var Parse = require('parse');
Parse.initialize("gabeserver");
Parse.serverURL = 'http://gabes-non-tiny-server.herokuapp.com/';



//components
var IndexHeader = require('./components/su-li-header.jsx');
var Signup = require('./components/signup.jsx');
var Login = require('./components/login.jsx');
var AppHeader = require('./components/appHeader.jsx');
var AppFeed = require('./components/appFeed.jsx');
var SingleRecipe = require('./components/single-recipe.jsx');
var CreateRecipe = require('./components/create.jsx');

//models and collections
var RecipeCollection = require('./models/recipes');

//instanctiating collections
var recipeCollection = new RecipeCollection();



//Router
var Router = Backbone.Router.extend({
  routes: {
    "": "index",
    "login": "login",
    "home": "home",
    "recipe(/:id)": "singleRecipe",
    "create": "create",
    "profile":"profile"
  },

  //index page
  index: function(){
    ReactDOM.render(
      <IndexHeader />,
      $('.container-fluid')[0]
    );
    ReactDOM.render(
      <Signup router={this}/>,
      $('.container')[0]
    );
  },

  //login page
  login: function(){
    $('.bod').addClass("bod");
    console.log('login working');
    ReactDOM.render(
      <IndexHeader />,
      $('.container-fluid')[0]
    );
    ReactDOM.render(
      <Login router={this}/>,
      $('.container')[0]
    );
  },

  //app home
  home: function(){
    $('.bod').removeClass("bod");
    console.log('home working');
    ReactDOM.render(
      <AppHeader router={this}/>,
      $('.container-fluid')[0]
    );
    ReactDOM.render(
      <AppFeed router={this}/>,
      $('.container')[0]
    );
  },

  singleRecipe: function(){
    $('.bod').removeClass("bod");
    ReactDOM.render(
      <AppHeader router={this}/>,
      $('.container-fluid')[0]
    );
    ReactDOM.render(
      <SingleRecipe router={this}/>,
      $('.container')[0]
    );
  },
  //app- create recipe
  create: function(){
    console.log('create working');
    $('.bod').removeClass("bod");
    ReactDOM.render(
      <AppHeader router={this}/>,
      $('.container-fluid')[0]
    );
    ReactDOM.render(
      <CreateRecipe router={this}/>,
      $('.container')[0]
    );
  }

});

var router = new Router();


Backbone.history.start();
