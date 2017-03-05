import React from 'react';
import { Link, IndexLink } from 'react-router';

export default class Explore extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="menu-outer">
        <div className="menu">
          <IndexLink className="menu-link" activeClassName="active" to="/">Recent</IndexLink>
          <Link className="menu-link" activeClassName="active" to="/artists">Artists</Link>
          <Link className="menu-link" activeClassName="active" to="/albums">Albums</Link>
          <Link className="menu-link" activeClassName="active" to="/tracks">Tracks</Link>
        </div>
      </nav>
    );
  }
}
