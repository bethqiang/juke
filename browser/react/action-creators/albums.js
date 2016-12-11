import axios from 'axios';

import {RECEIVE_ALBUMS, RECEIVE_ALBUM} from '../constants';
// import {convertAlbum} from '../utils';

export const receiveAlbums = (albums) => {
  return {
    type: RECEIVE_ALBUMS,
    albums
  };
};

export const receiveAlbum = (album) => {
  return {
    type: RECEIVE_ALBUM,
    album
  };
};

export const getAlbumById = (albumId) => {
  return function(dispatch, getState) {
    axios.get(`/api/albums/${albumId}`)
    .then(res => res.data)
    .then(album => dispatch(receiveAlbum(album)));
  };
};

