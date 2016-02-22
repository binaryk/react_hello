var React = require('react');
var Router = require('react-router');
var Repos  = require('./GitHub/Repos');
var UserProfile  = require('./GitHub/UserProfile');
var Notes  = require('./Notes/Notes');


var Profile = React.createClass({
  getInitialState: function(){
    return {
      notes: [],
      bio : {},
      repos : []
    }
  },
  render : function(){
    console.log(this.props);
    return (
        <div className="row">
          <div className="col-md-4">
            <UserProfile username={this.state.params.username} bio={this.state.bio}/>
          </div>
          <div className="col-md-4">
            <Repos repos={this.state.repos} />
          </div>
          <div className="col-md-4">
            <Notes notes={this.state.notes} />
          </div>
        </div>
    )
  }
})

module.exports = Profile;