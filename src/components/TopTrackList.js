import React from 'react';
import PropTypes from 'prop-types';

import TopTrackListItem from './TopTrackListItem';

class TopTrackList extends React.Component {
  trackList() {
    return this.props.tracks.map((track, idx) => {
      const props = {
        track: track.name,
        artist: track.artist.name,
        album: track.album,
        count: track.playcount,
        rank: track['@attr'].rank,
      };
      return (<TopTrackListItem key={idx} {...props} />);
    });
  }

  loaderList() {
    return Array(25).fill().map((_, idx) => {
      return (<TopTrackListItem key={idx} />);
    });
  }

  render() {
    return (
      <ul className="list top-tracks-list">
        {this.props.tracks.length ? this.trackList() : this.loaderList()}
      </ul>
    );
  }
}

TopTrackList.propTypes = {
  tracks: PropTypes.array
}

export default TopTrackList;
