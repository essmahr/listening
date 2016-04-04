import React from 'react';
import { Link } from 'react-router';

export default class Explore extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to="/recent">Recent</Link>
        <Link to="/albums">Albums</Link>
        <Link to="/tracks">Tracks</Link>
        <Link to="/artists">Artists</Link>
      </div>
    );
  }
}
