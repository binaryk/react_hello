/**
 * Created by lupac on 2/22/2016.
 */
var React = require('react');


var NoteList = React.createClass({
  render: function(){
    var notes =  this.props.notes.map(function(note, i){
      return <li className="list-group-item" key={i}> {note['.value']} </li>
    });

    return (
        <ul className="list-group">
          { notes }
        </ul>
    )
  }
})

module.exports = NoteList;
