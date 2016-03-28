var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Parse = require('parse');
Parse.initialize("gabeserver");
Parse.serverURL = 'http://gabes-non-tiny-server.herokuapp.com/';


var IndexHeader = React.createClass({
  render: function(){
    return(
      <div className="header">
        <h1>RecipeMe</h1>
      </div>
    );
  }
});


module.exports= IndexHeader;
