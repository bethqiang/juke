import { connect } from 'react-redux';

import Album from '../components/Album';
import { toggleOne } from '../action-creators/player';

const mapStateToProps = state => {
  return {
    selectedAlbum: state.albums.selected,
    player: state.player,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleOne(song, list) {
      dispatch(toggleOne(song, list));
    }
  };
};

const AlbumContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);

export default AlbumContainer;
