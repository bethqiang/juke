import AUDIO from '../audio';
import {skip} from '../utils';
import {START_PLAYING, STOP_PLAYING, SET_CURRENT_SONG, SET_LIST, SET_PROGRESS} from '../constants';

// synchronous action creators

export const startPlaying = () => {
  return {
    type: START_PLAYING
  };
};

export const stopPlaying = () => {
  return {
    type: STOP_PLAYING
  };
};

export const setCurrentSong = (currentSong) => {
  return {
    type: SET_CURRENT_SONG,
    currentSong
  };
};

export const setCurrentSongList = (currentSongList) => {
  return {
    type: SET_LIST,
    currentSongList
  };
};

export const setProgress = (progress) => {
  return {
    type: SET_PROGRESS,
    progress
  };
};

// asynchronous action creators/dispatchers

export const play = () => {
  return function(dispatch) {
    AUDIO.play();
    dispatch(startPlaying());
  };
};

export const pause = () => {
  return function(dispatch) {
    AUDIO.pause();
    dispatch(stopPlaying());
  };
};

export const load = (currentSong, currentSongList) => {
  return function(dispatch) {
    AUDIO.src = currentSong.audioUrl;
    AUDIO.load();
    dispatch(setCurrentSongList(currentSongList));
    dispatch(setCurrentSong(currentSong));
  };
};

export const startSong = (song, list) => {
  return function(dispatch) {
    dispatch(pause());
    dispatch(load(song, list));
    dispatch(play());
  };
};

export const toggle = () => {
  return function(dispatch, getState) {
    const {isPlaying} = getState().player;
    if (isPlaying) dispatch(pause());
    else dispatch(play());
  };
};

export const toggleOne = (selectedSong, selectedSongList) => {
  return function(dispatch, getState) {
    const {currentSong} = getState().player;
    if (selectedSong.id !== currentSong.id) {
      dispatch(startSong(selectedSong, selectedSongList));
    } else {
      dispatch(toggle());
    }
  };
};

export const next = () => {
  return function(dispatch, getState) {
    dispatch(startSong(...skip(1, getState().player)));
  };
};

export const prev = () => {
  return function(dispatch, getState) {
    dispatch(startSong(...skip(-1, getState().player)));
  };
};

export const progressBar = (progress) => {
  return function(dispatch, getState) {
    dispatch(setProgress(progress));
  }
}
