import axios from 'axios'

import {
  RECEIVE_ARTISTS,
  RECEIVE_ARTIST
} from '../constants';

// synchronous

export const receiveArtists = artists => {
  return {
    type: RECEIVE_ARTISTS,
    artists
  };
};

export const receiveArtist = (artist, albums, songs) => {
  return {
    type: RECEIVE_ARTIST,
    artist,
    albums,
    songs
  };
};

// asynchronous

export const getArtistById = artistId => {
  return function(dispatch) {
    Promise.all([
      axios.get(`/api/artists/${artistId}`),
      axios.get(`/api/artists/${artistId}/albums`),
      axios.get(`/api/artists/${artistId}/songs`)
    ])
    .then(response => response.map(res => res.data))
    .then(data => dispatch(receiveArtist(...data)));
  };
};
