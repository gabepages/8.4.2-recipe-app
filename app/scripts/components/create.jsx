var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var Parse = require('parse');
Parse.initialize("gabeserver");
Parse.serverURL = 'http://gabes-non-tiny-server.herokuapp.com/';
var RecipeClass = Parse.Object.extend("NewRecipes");


var CreateRecipe = React.createClass({
  letHellBrakeLose: function (e){
    e.preventDefault();
    var image = $('#callForFile')[0];
    if (image.files.length > 0) {
      var file = image.files[0];
      var name = "photo.jpg";

      var parseFile = new Parse.File(name, file);
    }
    parseFile.save().then(function(file){
        console.log('file saved to parse. LOOK HERE!', file.url());
    }, function(error){
      console.log('error: ', error);
    });
    var recipe = new RecipeClass();
    var name = $('#recipe-name').val();
    var username = $('#by').val();
    var description = $('#description').val();
    var type = $('#type option:selected').text();
    var prepTime = $('#prep').val();
    var cookTime = $('#cook').val();
    var cookTemp = $('#temp').val();
    var amount = $('#amount option:selected').text();
    var items = $('#items').val();
    var recipeInfo = {
      'name': name,
      'username': username,
      'description': description,
      "imageUrl": imageUrl,
      'type':type,
      'prepTime':prepTime,
      'cookTime': cookTime,
      'cookTemp': cookTemp,
      'amount': amount,
      'items':items
    };
    recipe.set('recipeInfo', recipeInfo);
    recipe.set('recipePhotoFile', parseFile);
    recipe.save(null,{
      success:function(recipe) {
        Backbone.history.navigate('home', {trigger: true});
      },
      error:function(error) {
        console.log(error);
      }
    });
  },
  render: function(){
    return(
      <div className="create">
        <h1>Create A Recipe</h1>
        <div className="basic-info">
          <div className="add-img" >
            <h2>Add Image</h2>
            <input type="file" id="callForFile" />
          </div>
          <form action="">
            <input type="text" className="form-control" id="recipe-name" placeholder="Recipe Name" required="" />
            <input type="text" className="form-control" id="by" placeholder="By:" required="" />
            <input type="text" className="form-control" id="description" placeholder="Description" required="" />
          </form>
        </div>
        <div className="more-create-info">
          <form action="" id='making-info'>
            <select name="" id="type">
              <option value="">Snack</option>
              <option value="">Entree</option>
              <option value="">Dessert</option>
            </select>
            <input type="text" className="form-control" id="prep" placeholder="Prep Time" required="" />
            <input type="text" className="form-control" id="cook" placeholder="Cook Time" required="" />
            <input type="text" className="form-control" id="temp" placeholder="Cook Temp" required="" />
          </form>
          <form action="" id='will-make'>
            <p>This recipe will make: </p>
            <select name="" id="amount">
              <option value="">2</option>
              <option value="">4</option>
              <option value="">8</option>
              <option value="">16</option>
            </select>
            <input type="text" className="form-control" id="items" placeholder="cookies, loaves, ect" required="" />
          </form>
        </div>
        <button type="button" className="btn btn-default" onClick={this.letHellBrakeLose}>Create Recipe</button>
      </div>
    );
  }
});


module.exports= CreateRecipe;
