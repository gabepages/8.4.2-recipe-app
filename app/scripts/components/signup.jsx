var $ = require('jquery');
var React = require('react');
var ReactDOM = require= ('react-dom');

var Signup = React.createClass({
  toLogin: function(e){
    e.preventDefault();
    this.props.router.navigate('login', {trigger: true});
  },
  render: function(){
    return(
      <div className="signup">
        <div className="well">
          <h2>New to RecipeMe? Sign Up Today!</h2>
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          <button type="button" className="btn btn-success su-btn">Sign Up!</button>
          <p>- or -</p>
          <button type="button" className="btn btn-primary l-btn" onClick={this.toLogin}>Login!</button>

        </div>
      </div>
    );
  }
});


module.exports= Signup;
