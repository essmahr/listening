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
        <h5 className="now-playing-label">Listening:</h5>
        <h1 className="now-playing-title">{name}</h1>
        <h2 className="now-playing-artist">{artist.name}</h2>
      </div>
    );
  }
}
