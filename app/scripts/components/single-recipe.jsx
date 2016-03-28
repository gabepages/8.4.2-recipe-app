var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var Parse = require('parse');
Parse.initialize("gabeserver");
Parse.serverURL = 'http://gabes-non-tiny-server.herokuapp.com/';

var SingleRecipe = React.createClass({
  render: function(){
    var recipe =JSON.parse(localStorage.getItem('recipe'));
    console.log(recipe);
    return(
      <div className="recipe">
        <h1>{recipe.name}</h1>
        <h2>by: {recipe.username}</h2>
        <img src="images/brownie.jpg" alt="..." />
        <h3>- Description -</h3>
        <p>{recipe.description}</p>
        <div className="recipe-info">
          <div className="info-chart">
            <ul>
              <li>
                <p>Type: </p>
                <span>{recipe.type}</span>
              </li>
              <li>
                <p>Prep-Time: </p>
                <span>{recipe.prepTime}min</span>
              </li>
              <li>
                <p>Cook-Time: </p>
                <span>{recipe.cookTime}min</span>
              </li>
              <li>
                <p>Cook-Temp: </p>
                <span>{recipe.cookTemp}°F</span>
              </li>
            </ul>
          </div>
          <div className="serving-chart">
            <h2>{recipe.amount} {recipe.items}</h2>
            <table className="table table-bordered">
              <tbody>
                 <tr>
                   <td>2</td>
                   <td>Eggs</td>
                 </tr>
                 <tr>
                   <td>1-1/2 lbs</td>
                   <td>Raw Squid</td>
                 </tr>
                 <tr>
                   <td>2</td>
                   <td>Hushpuppies</td>
                 </tr>
                 <tr>
                   <td>1</td>
                   <td>Lemon</td>
                 </tr>
                 <tr>
                   <td>1/2 lb</td>
                   <td>Walnuts</td>
                 </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
});


module.exports= SingleRecipe;
