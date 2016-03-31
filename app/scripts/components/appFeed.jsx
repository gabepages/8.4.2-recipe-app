var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var Parse = require('parse');
Parse.initialize("gabeserver");
Parse.serverURL = 'http://gabes-non-tiny-server.herokuapp.com/';


var AppFeed = React.createClass({

  getInitialState: function(){
    return {
      recipeItems: null,
    }
  },
  componentWillMount: function(){
    var Recipes = Parse.Object.extend("NewRecipes");
    var query = new Parse.Query(Recipes);
    query.find({
      success: function(recipes) {
        this.setState({'recipeItems': recipes});

        // The object was retrieved successfully.
      }.bind(this),
      error: function(object, error) {
        console.log("error: ", error, "object: ", object);
        // The object was not retrieved successfully.
        // error is a Parse.Error with an error code and message.
      }
    });
  },
  singleRecipe: function(item, e){
    e.preventDefault();
    var singleItem =  JSON.stringify(item.get('recipeInfo'));
    var itemPhoto = JSON.stringify(item.get('recipePhotoFile'));
    localStorage.setItem('recipePhoto', itemPhoto);
    localStorage.setItem('recipe', singleItem);
    localStorage.setItem('wholeRecipe', JSON.stringify(item));
    Backbone.history.navigate('recipe', {trigger: true});
  },
  render: function(){
    var items;
    if(this.state.recipeItems){
      items = this.state.recipeItems.map(function(item){
        var recipeInfo = item.get('recipeInfo');
        var recipePhoto =  JSON.stringify(item.get('recipePhotoFile'));
        recipePhoto = JSON.parse(recipePhoto);
        return(
          <div className="col-sm-6 col-md-4" key={item.id} >
            <div className="thumbnail" onClick={this.singleRecipe.bind(this, item)}>
              <img src={recipePhoto.url} alt="..." />
              <div className="caption">
                <h3>{recipeInfo.name}</h3>
                <h4>{recipeInfo.username}</h4>
                <p>{recipeInfo.description}</p>
                <button  className="btn btn-default" type="submit" >View Recipe</button>
              </div>
            </div>
          </div>
        );
      }.bind(this));
    }

    return(
      <div className="feed">
        {items}
      </div>
    );
  }
});


module.exports= AppFeed;
