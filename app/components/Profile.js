var React = require('react');
var Router = require('react-router');
var Repos  = require('./GitHub/Repos');
var UserProfile  = require('./GitHub/UserProfile');
var Notes  = require('./Notes/Notes');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase')
import getGitHubInfo  from '../utils/helpers';

var Profile = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function(){
    return {
      notes: [],
      bio : {},
      repos : []
    }
  },
  componentDidMount: function(){
    this.ref = new Firebase('https://github-note-taker.firebaseio.com/');
    this.init(this.props.params.username);
  },
  handleAddNote: function(newNote){
  //  update firebase
    this.ref.child(this.props.params.username).child(this.state.notes.length).set(newNote);
  },
  componentWillReceiveProps: function(nextProps){
    console.log('The next props are ', nextProps);
    this.unbind('notes');
    this.init(nextProps.params.username);
  },
  componentWillUnmount: function(){
    this.unbind('notes');
  },
  init: function(username){
    var childRef = this.ref.child(username);
    this.bindAsArray(childRef, 'notes');
    getGitHubInfo(username).then(function(data){
      this.setState({
        repos : data.repos,
        bio: data.bio
      })
    }.bind(this));
  },
  render : function(){
    console.log(this.state);

    return (
        <div className="row">
          <div className="col-md-4">
            <UserProfile username={this.props.params.username} bio={this.state.bio}/>
          </div>
          <div className="col-md-4">
            <Repos username={this.props.params.username} repos={this.state.repos} />
          </div>
          <div className="col-md-4">
            <Notes
                username={this.props.params.username}
                notes={this.state.notes}
                addNote={this.handleAddNote}
            />
          </div>
        </div>
    )
  }
})

module.exports = Profile;