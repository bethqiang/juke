import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddSong from '../components/AddSong';
import { loadAllSongs, addSongToPlaylist } from '../action-creators/playlists';

const mapStateToProps = state => {
  return {
    songs: state.songs,
    selectedPlaylist: state.playlists.selected
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadAllSongs() {
      dispatch(loadAllSongs());
    },
    addSongToPlaylist(playlistId, songId) {
      return dispatch(addSongToPlaylist(playlistId, songId));
    }
  };
};

const AddSongContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  class IntermediateAddSongContainer extends Component {

    constructor() {
      super();
      this.state = {
        songId: 1,
        error: false
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
      this.props.loadAllSongs();
    }

    handleChange(evt) {
      this.setState({
        songId: evt.target.value,
        error: false
      });
    }

    handleSubmit(evt) {
      evt.preventDefault();
      const playlistId = this.props.selectedPlaylist.id;
      const songId = this.state.songId;
      this.props.addSongToPlaylist(playlistId, songId)
      .catch(() => this.setState({ error: true }));
    }

    render() {
      return (
        <AddSong
          {...this.props}
          {...this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} />
      );
    }
  }
);

export default AddSongContainer;
