var $ = require('jquery');
var React = require('react');
var ReactDOM = require= ('react-dom');

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
