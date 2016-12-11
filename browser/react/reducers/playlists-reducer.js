import {
  RECEIVE_PLAYLISTS,
  RECEIVE_PLAYLIST,
} from '../constants';

import { convertSongs } from '../utils';

const initialPlaylistsState = {
  list: [],
  selected: {}
};

export default function(state = initialPlaylistsState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case RECEIVE_PLAYLISTS:
      newState.list = action.playlists;
      break;

    case RECEIVE_PLAYLIST:
      newState.selected = action.playlist;
      newState.selected.songs = convertSongs(newState.selected.songs);
      break;

    default:
      return state;
  }

  return newState;
}
