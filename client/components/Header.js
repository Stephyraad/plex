/*
  Header
*/

var React = require('react');
var Tutorial = require('./Tutorial');

var Header = React.createClass({
  render: function() {
    var style = {
      height: '5vh',
      display: 'flex',
      alignItems: 'center'
    }

    return (
      <nav role="navigation" style={style}>
        <h1>{ this.props.header }</h1>
        <Tutorial />
      </nav>
    )
  }
});

module.exports = Header;
