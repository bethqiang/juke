import { connect } from 'react-redux';

import Station from '../components/station';
import { convertSong } from '../utils';
import { toggleOne } from '../action-creators/player';

const mapStateToProps = (state, ownProps) => {
  return {
    genreName: ownProps.params.genreName,
    songs: state.songs
      .filter(song => song.genre === ownProps.params.genreName)
      .map(convertSong),
    player: state.player
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleOne(song, list) {
      dispatch(toggleOne(song, list));
    }
  };
};

const StationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Station);

export default StationContainer;
