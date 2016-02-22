var React = require('react');

var Repos = React.createClass({
  render: function(){
    console.log(this.props);
    return (
        <div>
          REPOS for user
        </div>
    )
  }
})


module.exports = Repos;