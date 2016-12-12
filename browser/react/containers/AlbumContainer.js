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

// class AlbumContainer extends Component {

//   constructor() {
//     super();
//     this.state = store.getState();
//   }

//   componentDidMount() {
//     this.unsubscribe = store.subscribe(() => {
//       this.setState(store.getState());
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribe();
//   }

//   toggle(song, list) {
//     store.dispatch(toggleOne(song, list));
//   }

//   render() {
//     return (
//       <Album
//         selectedAlbum={this.state.albums.selected}
//         player={this.state.player}
//         toggleOne={this.toggle} />
//     );
//   }

// }

// export default AlbumContainer;
