import React from 'react';
import { Link } from 'react-router';

const Stations = (props) => {

  const stations = props.stations;

  return (
    <div>
      <h3>Stations</h3>
      <div className="list-group">
        {
          Object.keys(stations).map(station => (
            <div key={station} className="list-group-item">
              <Link to={'fill/me/in/later'}>{station}</Link>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Stations;
