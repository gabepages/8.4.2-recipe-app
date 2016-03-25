var $ = require('jquery');
var React = require('react');
var ReactDOM = require= ('react-dom');

var Login = React.createClass({
  toHome: function (e){
    e.preventDefault();
    this.props.router.navigate("home", {tigger:true});
  },
  render: function(){
    return(
      <div className="login">
        <div className="well">
          <h2>Login To RecipeMe!</h2>
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          <button type="button" className="btn btn-success" onClick={this.toHome}>Login!</button>
        </div>
      </div>
    );
  }
});


module.exports= Login;
