import { connect } from 'react-redux';

import Artist from '../components/Artist';
import { toggleOne } from '../action-creators/player';

const mapStateToProps = (state, ownProps) => {
  return {
    player: state.player,
    selectedArtist: state.artists.selected,
    children: ownProps.children
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleOne(song, list) {
      dispatch(toggleOne(song, list));
    }
  };
};

const ArtistContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Artist);

export default ArtistContainer;
