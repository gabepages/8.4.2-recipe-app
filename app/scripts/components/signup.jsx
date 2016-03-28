var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var Parse = require('parse');
Parse.initialize("gabeserver");
Parse.serverURL = 'http://gabes-non-tiny-server.herokuapp.com/';


var Signup = React.createClass({
  signUp: function(e){
    e.preventDefault();
    var username = $('#email').val();
    var password = $('#password').val();
    var user = new Parse.User();
    user.set({'username': username, 'password': password, 'email': username});
    user.signUp(null, {
      success: function(user) {
        console.log("signed up: ", user);
        Backbone.history.navigate('login', {trigger: true});
      },
      error: function(user, error) {
        alert("Error: " + error.code + " " + error.message);
        $('#email').val('');
        $('#password').val('');
      }
    });
  },
  toLogin: function(e){
    e.preventDefault();
    this.props.router.navigate('login', {trigger: true});
  },
  render: function(){
    return(
      <div className="signup">
        <div className="well">
          <h2>New to RecipeMe? Sign Up Today!</h2>
          <input type="email" className="form-control" id="email" placeholder="Email" required=""/>
          <input type="password" className="form-control" id="password" placeholder="Password" required=""/>
          <button type="button" className="btn btn-success su-btn" onClick={this.signUp}>Sign Up!</button>
          <p>- or -</p>
          <button type="button" className="btn btn-primary l-btn" onClick={this.toLogin}>Login!</button>
        </div>
      </div>
    );
  }
});


module.exports= Signup;
