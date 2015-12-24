
var React = require('react');

var TutorialBtn = React.createClass({
  
  render: function() {
    var style = {
      marginRight: '0px',
      width: '100px',
      height: '30px',
      position: 'relative'
    }

    return(
      <button onClick={this.props.whenClicked} style={style}>How To Plex It</button>
    )
  }
});

module.exports = TutorialBtn;
