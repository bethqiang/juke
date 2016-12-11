import axios from 'axios';

import { SET_LYRICS } from '../constants';

// synchronous

export const setLyrics = (text) => {
  return {
    type: SET_LYRICS,
    lyric: text
  };
};

// asynchronous

export const fetchLyrics = (artist, song) => {
  return function(dispatch) {
    axios.get(`/api/lyrics/${artist}/${song}`)
    .then(res => {
      dispatch(setLyrics(res.data.lyric));
    });
  };
};
