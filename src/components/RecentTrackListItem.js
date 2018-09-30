import React from 'react';
import PropTypes from 'prop-types';
import smarten from '../lib/smarten';
import timeAgo from '../lib/timeAgo';
import dateFormat from 'dateformat';

class RecentTrackListItem extends React.Component {
  constructor(props) {
    super(props);

    this.timestamp = parseInt(props.date, 10) * 1000;
  }

  timeLabel() {
    if (!this.timestamp) return;

    const dayAgo = new Date().getTime() - (60 * 60 * 12 * 1000);

    if (this.timestamp > dayAgo) {
      return timeAgo(this.timestamp);
    } else {
      return dateFormat(this.timestamp, 'mmmm dS, h:MMtt');
    }
  }

  render() {
    const classNames = ['list-item', 'recent-tracks-list-item'];
    if (this.props.firstOfAlbum) { classNames.push('first-of-type'); }

    return (
      <li className={classNames.join(' ')}>
        <div className="recent-track-info-container">
          <div className="recent-track-artist">{this.props.artist}</div>
          <div className="recent-track-song">
            <span className="recent-track-title">{smarten(this.props.name)}</span>
            <div className="recent-track-album">{this.props.album}</div>
          </div>
        </div>
        <span className="recent-track-timestamp">{this.timeLabel()}</span>
      </li>
    )
  }
}

RecentTrackListItem.proptypes = {
  artist: PropTypes.string,
  album: PropTypes.object,
  date: PropTypes.string,
}

export default RecentTrackListItem;
