import React from 'react';

class RecentTrackListItem extends React.Component {
  render() {

    const classNames = ['list-item', 'recent-tracks-list-item'];

    if (this.props.firstOfAlbum) {
      classNames.push('first-of-type');
    }

    return (
      <li className={classNames.join(' ')}>
        <h2 className="recent-track-artist">{this.props.artist}</h2>
        <div className="recent-track-song">
          <h1 className="recent-track-song-title">{this.props.name}</h1>
          <div className="recent-track-album">
            <strong>{this.props.album['#text']}</strong>
          </div>
        </div>
        <span className="recent-track-timestamp">{this.props.date}</span>
      </li>
    )
  }
}

RecentTrackListItem.proptypes = {
  artist: React.PropTypes.string,
  album: React.PropTypes.object,
  date: React.PropTypes.string,
}

export default RecentTrackListItem;
