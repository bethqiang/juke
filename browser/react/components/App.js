import React from 'react';

import SidebarContainer from '../containers/SidebarContainer';
import PlayerContainer from '../containers/PlayerContainer';

const App = props => {
  return (
    <div id="main" className="container-fluid">
      <div className="col-xs-2">
        <SidebarContainer />
      </div>
      <div className="col-xs-10">
        { props.children }
      </div>
      <PlayerContainer />
    </div>
  );
};

export default App;
