import axios from 'axios';
import { browserHistory } from 'react-router';

import {
  RECEIVE_PLAYLISTS,
  RECEIVE_PLAYLIST,
  RECEIVE_SONGS
} from '../constants';

import { convertSong } from '../utils';

// synchronous

export const receivePlaylists = playlists => {
  return {
    type: RECEIVE_PLAYLISTS,
    playlists
  };
};

export const receivePlaylist = playlist => {
  return {
    type: RECEIVE_PLAYLIST,
    playlist
  };
};

export const receiveSongs = songs => {
  return {
    type: RECEIVE_SONGS,
    songs
  };
};

// asynchronoous

export const getPlaylistById = playlistId => {
  return function(dispatch) {
    return axios.get(`/api/playlists/${playlistId}`)
    .then(res => dispatch(receivePlaylist(res.data)));
  };
};

export const addNewPlaylist = playlistName => {
  return function(dispatch, getState) {
    return axios.post('/api/playlists', { name: playlistName })
    .then(res => res.data)
    .then(playlist => {
      const newListOfPlaylists = [...getState().playlists.list, playlist];
      dispatch(receivePlaylists(newListOfPlaylists));
      browserHistory.push(`/playlists/${playlist.id}`);
    });
  };
};

export const loadAllSongs = () => {
  return function(dispatch) {
    axios.get('/api/songs')
    .then(res => dispatch(receiveSongs(res.data)));
  };
};

export const addSongToPlaylist = (playlistId, songId) => {
  return function(dispatch, getState) {
    return axios.post(`/api/playlists/${playlistId}/songs`, { id: songId })
    .then(res => res.data)
    .then(song => {
      const selectedPlaylist = getState().playlists.selected;
      const songs = getState().playlists.selected.songs;
      const newSongs = [...songs, convertSong(song)];
      const newSelectedPlaylist = Object.assign({}, selectedPlaylist, {
        songs: newSongs
      });
      dispatch(receivePlaylist(newSelectedPlaylist));
    });
  };
};
