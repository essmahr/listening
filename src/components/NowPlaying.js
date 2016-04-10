import React from 'react';
import { Link } from 'react-router';

export default class NowPlaying extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {name, artist} = this.props.track;

    return (
      <div className="now-playing">
        <div className="container">
          <h5 className="now-playing-label">Now Playing</h5>
          <h1 className="now-playing-song">
            <span className="now-playing-title">{name}</span>
            <span className="sep">&mdash;</span>
            <span className="now-playing-artist">{artist.name}</span>
          </h1>
        </div>
      </div>
    );
  }
}
