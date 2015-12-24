/*
  Tutorial
*/

var React = require('react');
var TutorialBtn = require('./TutorialBtn');

// var TutorialBtn = React.createClass({
  
//   render: function() {
//     var style = {
//       marginRight: '0px',
//       width: '100px',
//       height: '30px',
//       position: 'relative'
//     }

//     return(
//       <button onClick={this.props.whenClicked} style={style}>How To Plex It</button>
//     )
//   }
// });


var Tutorial = React.createClass({
  
  showTutorial: function(){
    alert('click');
  },

  render: function() {
    return(
      <TutorialBtn whenClicked={this.showTutorial} />
    )
  }
});

module.exports = Tutorial;