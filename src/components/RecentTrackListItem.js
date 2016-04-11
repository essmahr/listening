import React from 'react';
import TimeAgo from 'react-timeago';
import smarten from '../lib/smarten'

class RecentTrackListItem extends React.Component {
  render() {
    const classNames = ['list-item', 'recent-tracks-list-item'];
    const timestamp = parseInt(this.props.date, 10) * 1000;

    if (this.props.firstOfAlbum) { classNames.push('first-of-type'); }

    return (
      <li className={classNames.join(' ')}>
        <div className="recent-track-artist">{this.props.artist}</div>
        <div className="recent-track-song">
          <span className="recent-track-title">{smarten(this.props.name)}</span>
          <div className="recent-track-album">{this.props.album['#text']}</div>
        </div>
        <TimeAgo className="recent-track-timestamp" date={timestamp}/>
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
