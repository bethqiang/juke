import React, { Component } from 'react';
import { connect } from 'react-redux';

import NewPlaylist from '../components/NewPlaylist';
import { addNewPlaylist } from '../action-creators/playlists';

const mapDispatchToProps = dispatch => {
  return {
    addNewPlaylist(playlistName) {
      dispatch(addNewPlaylist(playlistName));
    }
  };
};

const NewPlaylistContainer = connect(
  null,
  mapDispatchToProps
)(
  class IntermediateNewPlaylistContainer extends Component {

    constructor(props) {
      super(props);
      this.state = {
        playlistName: '',
        valid: false,
        message: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      let playlistName = event.target.value;
      this.setState({ playlistName });
      if (playlistName.length === 0) {
        this.setState({
          valid: false,
          message: 'Name is required.'
        });
      } else if (playlistName.length > 16) {
        this.setState({
          valid: false,
          message: 'Name cannot be more than 16 characters long.'
        });
      } else {
        this.setState({
          valid: true,
          message: ''
        });
      }
    }

    handleSubmit(event) {
      event.preventDefault();
      this.setState({
        playlistName: ''
      });
      this.props.addNewPlaylist(this.state.playlistName);
    }

    render() {
      return (
        <NewPlaylist
          {...this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} />
      );
    }
  }
);

export default NewPlaylistContainer;
