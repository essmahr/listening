import React from 'react';
import { Link } from 'react-router';

export default class NowPlaying extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {name, artist} = this.props.track;

    return (
      <div>
        <h5>Now Playing</h5>
        <h1>{name}</h1>
        <h2>{artist.name}</h2>
      </div>
    );
  }
}
