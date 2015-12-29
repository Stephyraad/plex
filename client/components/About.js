/*
  About
*/

var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('react-modal');

var About = React.createClass({
 
  getInitialState: function() {
    return { modalIsOpen: false };
  },
 
  openModal: function() {
    this.setState({modalIsOpen: true});
  },
 
  closeModal: function() {
    this.setState({modalIsOpen: false});
  },
 
  render: function() {
    var styles= {
      overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(0, 0, 0, 0.5)'
      },
      content : {
        position              : 'absolute',
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        border                     : '1px solid #ccc',
        background                 : '#fff',
        overflow                   : 'auto',
        WebkitOverflowScrolling    : 'touch',
        borderRadius               : '4px',
        outline                    : 'none',
        padding                    : '20px'
      }
    };

    return (
      <div>
        <button onClick={this.openModal}>About</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={styles} >
          <p> plex is an application that estimates the average-case time complexity of users’ sorting algorithms. It also reports other interesting analytics about your algorithm. plex provides an intuitive interface that enables its users to gain insight into the performance of their code.</p>
          <button onClick={this.closeModal}>close</button>
        </Modal>
      </div>
    );
  }
});

module.exports = About;