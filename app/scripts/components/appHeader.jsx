var $ = require('jquery');
var React = require('react');
var ReactDOM = require= ('react-dom');

var AppHeader = React.createClass({
  render: function(){
    return(
      <div className="navBar">
        <h1>RecipeMe</h1>
        <form>
          <input type="text" className="form-control" id="search" placeholder="Search RecipeMe..." />
        </form>
        <a href="" className="profile-icon">
          <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
          <span className="glyphicon glyphicon-triangle-bottom carot" aria-hidden="true"></span>
        </a>
        <a href=""><span className="glyphicon glyphicon-plus" aria-hidden="true"></span></a>
        <a href=""><span className="glyphicon glyphicon-th" aria-hidden="true"></span></a>
      </div>
    );
  }
});


module.exports= AppHeader;
