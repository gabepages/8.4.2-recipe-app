var $ = require('jquery');
var React = require('react');
var ReactDOM = require= ('react-dom');

var AppHeader = React.createClass({
  render: function(){
    return(
      <div className="feed">
        {/*from here down goes in map*/}        
        <div class="col-sm-6 col-md-4">
          <div class="thumbnail">
            <img src="images/brownie.jpg" alt="...">
            <div class="caption">
              <h3>Walnut Brownies</h3>
              <h4>username</h4>
              <p>These tasty, brown treats will have you salivating all over your kitchen floor and begging your mom for more.</p>
              <button class="btn btn-default" type="submit">View Recipe</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});


module.exports= AppHeader;
