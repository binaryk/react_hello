var React = require('react');

var UserProfiles = React.createClass({
  propTypes:{
    username: React.PropTypes.string.isRequired,
    bio: React.PropTypes.object.isRequired
  },
  render: function(){
    console.log(this.props.bio);

    return (
        <div>
          UserProfiles
        </div>
    )
  }
})


module.exports = UserProfiles;