import { connect } from 'react-redux';

import Playlist from '../components/Playlist';
import { toggleOne } from '../action-creators/player';

const mapStateToProps = state => {
  return {
    player: state.player,
    selectedPlaylist: state.playlists.selected
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleOne(song, list) {
      dispatch(toggleOne(song, list));
    }
  };
};

const PlaylistContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist);

export default PlaylistContainer;
