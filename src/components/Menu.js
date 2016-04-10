import React from 'react';
import { Link } from 'react-router';

export default class Explore extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="menu">
        <Link className="menu-link" to="/">Recent</Link>
        <Link className="menu-link" to="/albums">Albums</Link>
        <Link className="menu-link" to="/tracks">Tracks</Link>
        <Link className="menu-link" to="/artists">Artists</Link>
      </nav>
    );
  }
}
