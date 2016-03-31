var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var Parse = require('parse');
Parse.initialize("gabeserver");
Parse.serverURL = 'http://gabes-non-tiny-server.herokuapp.com/';

var SingleRecipe = React.createClass({
  getInitialState: function(){
    return{
      ingredients: null,
    };
  },
  componentWillMount: function(){
    //get recipeObj data from localStorage
    var id = localStorage.getItem('wholeRecipe');

    //set JSON object from raw string data
    id = JSON.parse(id);

    //build constructor for Parse Recipe Objecy
    var Recipe = Parse.Object.extend("NewRecipes");

    //instantiates a Parse Recipe Object with JSON data from localStorage
    var recipe = new Recipe(id);

    //instantiate a new query on the Ingredients table
    var query = new Parse.Query( Parse.Object.extend("Ingredients") );

    //set query search for ingretients that belong to this recipe
    query.equalTo("recipe", recipe);

    //do the query and return the ingredients
    query.find().then(function(ingredients){

      this.setState({"ingredients": ingredients});
      console.log("Ingredients: ",ingredients);

    }.bind(this),

    function(error){
      console.log('error getting ingredients', error);
    });




    //
    // var NewRecipes = Parse.Object.extend("NewRecipes");
    // var queryRecipe = new Parse.Query(NewRecipes);
    // queryRecipe.get(id.objectId).then(function(recipe){
    //   var Ingredients = Parse.Object.extend("Ingredients");
    //   var query = new Parse.Query(Ingredients);
    //   query.equalTo("recipe", recipe);
    //   query.find().then(function(ingredients){
    //     console.log(ingredients);
    //   })
    // });

  },
  // componentWillUnmount: function(){
  //   this.setState({'ingredients': null});
  //   console.log(this.state.ingredients);
  // },
  render: function(){
    var recipe = JSON.parse(localStorage.getItem('recipe'));
    var recipePhoto = JSON.parse(localStorage.getItem('recipePhoto'));
    if(this.state.ingredients){
      var list = this.state.ingredients.map(function(ingredient){
        var ing = ingredient.attributes;
        return(
          <tr key={ingredient.id}>
            <td>{ing.qty} {ing.unit}</td>
            <td>{ing.item}</td>
          </tr>
        );
      });
    }
    return(
      <div className="recipe">
        <h1>{recipe.name}</h1>
        <h2>by: {recipe.username}</h2>
        <img src={recipePhoto.url} alt="..." />
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
                 {list}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
});


module.exports= SingleRecipe;
