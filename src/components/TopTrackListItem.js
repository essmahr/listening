import React from 'react';

class TrackListItem extends React.Component {
  render() {
    const {track, artist, album, count, rank} = this.props;

    return (
      <li className="list-item top-tracks-list-item">
        <div className="top-track-rank-column">
          <div className="top-track-rank">
            {rank}
          </div>
        </div>
        <div className="top-track-info-column">
          <h1 className="top-track-name">{track}</h1>
          <h2 className="top-track-artist">{artist}</h2>
        </div>
        <div className="top-track-playcount-column">
          <strong className="top-track-playcount-count">{count}</strong>
          <span className="top-track-playcount-label"> Plays</span>
        </div>
      </li>
    )
  }
}

TrackListItem.proptypes = {
  track: React.PropTypes.string,
  artist: React.PropTypes.string,
  album: React.PropTypes.object,
  count: React.PropTypes.string,
  rank: React.PropTypes.string,
}

export default TrackListItem;
