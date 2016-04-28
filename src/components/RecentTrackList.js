import React from 'react';
import RecentTrackListItem from './RecentTrackListItem';

class RecentTrackList extends React.Component {
  trackList() {
    return this.props.tracks.map((track, idx) => {
      if (track.date === undefined) return;

      const props = {
        isFirstOfAlbum: idx !== 0 && track.album['#text'] !== this.props.tracks[idx - 1].album['#text'],
        name: track.name,
        artist: track.artist.name,
        album: track.album['#text'],
        date: track.date.uts,
      };

      return (<RecentTrackListItem key={idx} {...props} />);
    });
  }

  loaderList() {
    return Array(25).fill().map((_, idx) => {
      return (<RecentTrackListItem key={idx} />);
    });
  }

  render() {
    return (
      <ul className="list recent-tracks-list">
        {this.props.tracks.length ? this.trackList() : this.loaderList()}
      </ul>
    );
  }
}

RecentTrackList.propTypes = {
  tracks: React.PropTypes.array
}

export default RecentTrackList;
