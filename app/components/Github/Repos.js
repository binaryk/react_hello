var React = require('react');

var Repos = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    repos: React.PropTypes.array.isRequired
  },
  render: function(){
    console.log(this.props);
    return (
        <div>
          REPOS
        </div>
    )
  }
})


module.exports = Repos;