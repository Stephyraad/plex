/*
  Tutorial Instructions
*/

var React = require('react');
var Modal = require('react-modal');
 
var TutorialModal = React.createClass({
 
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
    var style = {
      overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(255, 255, 255, 0.75)'
      },
      content : {
        position                   : 'absolute',
        top                        : '40px',
        left                       : '40px',
        right                      : '40px',
        bottom                     : '40px',
        border                     : '1px solid #ccc',
        background                 : '#fff',
        overflow                   : 'auto',
        WebkitOverflowScrolling    : 'touch',
        borderRadius               : '4px',
        outline                    : 'none',
        padding                    : '20px',
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
      }
    }
    return (
      <div>
        <button onClick={this.openModal}>How to PlexIt</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={style} >
 
          <h2>How to Plex It</h2>
          <form>
            <p> Insert your alogorithm wrapped into one function in the code mirror</p>
            <p> Click the Plex it button </p>
            <p> Check the graph so see a visual representation  of your alogorithm </p>
            <p> Check the information box to get more useful information about your alogorithm </p>
          </form>
          <button onClick={this.closeModal}>Got it</button>
        </Modal>
      </div>
    );
  }
});

module.exports = TutorialModal;
