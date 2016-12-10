'use strict';

import React, {Component} from 'react';
import axios from 'axios';

import NewPlaylist from '../components/NewPlaylist';

class NewPlaylistContainer extends Component {

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
    this.setState({playlistName});
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
    console.log(this.state.playlistName);
    this.setState({
      playlistName: ''
    });
    axios.post('/api/playlists', {name: this.state.playlistName})
    .then(res => res.data)
    .then(playlist => console.log(playlist));
  }

  render() {
    return (
      <NewPlaylist
        playlistName={this.state.playlistName}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        valid={this.state.valid}
        message={this.state.message} />
    );
  }

}

export default NewPlaylistContainer;
