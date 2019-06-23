import React from 'react';
import PropTypes from 'prop-types';
import playCount from '../lib/playCount';

class TrackListItem extends React.Component {
  playCount() {
    if (!this.props.count) return;

    return (
      <div className="top-track-playcount">
        <strong className="top-track-playcount-count">{this.props.count}</strong>
        <span className="top-track-playcount-label"> {playCount(this.props.count)}</span>
      </div>
    );
  }

  render() {
    const {track, artist, album, rank} = this.props;

    return (
      <li className="list-item top-tracks-list-item">
        <div className="top-track-rank-container">
          <div className="top-track-rank">
            {rank}
          </div>
        </div>
        <div className="top-track-info-container">
          <div className="top-track-song">
            <h1 className="top-track-name">{track}</h1>
            <h2 className="top-track-artist">{artist}</h2>
          </div>
          {this.playCount()}
        </div>
      </li>
    )
  }
}

TrackListItem.proptypes = {
  track: PropTypes.string,
  artist: PropTypes.string,
  album: PropTypes.object,
  count: PropTypes.string,
  rank: PropTypes.string,
}

export default TrackListItem;
