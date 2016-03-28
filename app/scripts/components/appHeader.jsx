var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone= require('backbone');
var Parse = require('parse');
Parse.initialize("gabeserver");
Parse.serverURL = 'http://gabes-non-tiny-server.herokuapp.com/';


var AppHeader = React.createClass({
  toggleMenu: function(e){
    e.preventDefault();
    $('.user-list').toggleClass('hide');
  },
  logout: function(e){
    e.preventDefault();
    Parse.User.logOut().then( function(){
      var currentUser = Parse.User.current();
      console.log(currentUser); // this will now be null
    });
    Backbone.history.navigate('login', {trigger: true});
  },
  render: function(){
    return(
      <div className="app-header col-md-12">
        <div className="navBar">
          <h1>RecipeMe</h1>
          <form>
            <input type="text" className="form-control" id="search" placeholder="Search RecipeMe..." />
          </form>
          <a href="" className="profile-icon" onClick={this.toggleMenu}>
            <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
            <span className="glyphicon glyphicon-triangle-bottom carot" aria-hidden="true"></span>
          </a>
          <a href="#create"><span className="glyphicon glyphicon-plus" aria-hidden="true"></span></a>
          <a href="#home"><span className="glyphicon glyphicon-th" aria-hidden="true"></span></a>
          <ul className='user-list hide'>
            <li onClick={this.logout}>Logout</li>
          </ul>
        </div>
      </div>
    );
  }
});


module.exports= AppHeader;
