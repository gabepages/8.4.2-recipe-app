var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

//components
var IndexHeader = require('./components/su-li-header.jsx');
var Signup = require('./components/signup.jsx');
var Login = require('./components/login.jsx');
var AppHeader = require('./components/appHeader.jsx');


//models and collections


//Router

var Router = Backbone.Router.extend({
  routes: {
    "": "index",
    "login": "login",
    "home": "home",
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
    console.log('hello');
    $('.bod').removeClass("bod");
    ReactDOM.render(
      <AppHeader router={this}/>,
      $('.app-header')[0]
    );

  },


  //app- create recipe
  create: function(){

  },

});

var router = new Router();


Backbone.history.start();
