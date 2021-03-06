var React = require('react');
var NoteList = require('./NoteList');
var AddNote = require('./AddNote');


var Notes = React.createClass({
  propTypes:{
    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired,
    addNote: React.PropTypes.func.isRequired
  },
  render: function(){
    console.log(this.props.notes);
    return (
        <div>
           <h3>Notes</h3>
          <AddNote username={this.props.username} addNote={this.props.addNote} />
          <NoteList notes={this.props.notes}/>
        </div>
    )
  }
})


module.exports = Notes;