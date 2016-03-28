var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var Parse = require('parse');
Parse.initialize("gabeserver");
Parse.serverURL = 'http://gabes-non-tiny-server.herokuapp.com/';


var Login = React.createClass({
  toHome: function (e){
    e.preventDefault();
    Parse.User.logIn($('#login-email').val(),$('#login-password').val() , {
      success: function(user) {
        console.log(user);
        Backbone.history.navigate("home", {trigger: true});
      },
      error: function(user, error) {
        alert("error");
        $('#login-email').val('');
        $('#login-password').val('')
        // The login failed. Check error to see why.
      }
    });

    // Backbone.history.navigate("home", {trigger: true});
  },
  render: function(){
    return(
      <div className="login">
        <div className="well">
          <h2>Login To RecipeMe!</h2>
          <input type="email" className="form-control" id="login-email" placeholder="Email" />
          <input type="password" className="form-control" id="login-password" placeholder="Password" />
          <button type="button" className="btn btn-success" onClick={this.toHome}>Login!</button>
        </div>
      </div>
    );
  }
});


module.exports= Login;
