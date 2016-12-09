'use strict';

import React from 'react';

const Footer = (props) => {
  return (
    <footer>
      <div className="pull-left">
        <button className="btn btn-default">
          <span className="glyphicon glyphicon-step-backward"></span>
        </button>
        <button className="btn btn-default">
          {props.isPlaying ? <span className="glyphicon glyphicon-pause" onClick={props.pause}></span> :
          <span className="glyphicon glyphicon-play" onClick={() => props.start(props.currentSong)}></span>
          }
        </button>
        <button className="btn btn-default">
          <span className="glyphicon glyphicon-step-forward"></span>
        </button>
      </div>
      <div className="bar">
        <div className="progress">
          <div className="progress-bar"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
