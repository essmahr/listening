import React from 'react';

class TrackListItem extends React.Component {
  playCount() {
    if (!this.props.count) return;

    return (
      <div className="top-track-playcount">
        <strong className="top-track-playcount-count">{this.props.count}</strong>
        <span className="top-track-playcount-label"> Plays</span>
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
  track: React.PropTypes.string,
  artist: React.PropTypes.string,
  album: React.PropTypes.object,
  count: React.PropTypes.string,
  rank: React.PropTypes.string,
}

export default TrackListItem;
