import React from 'react';
import RecentTrackListItem from './RecentTrackListItem';

class RecentTrackList extends React.Component {
  loadMore() {

  }

  render() {
    const tracks = this.props.tracks.map((track, idx) => {
      if (track.date === undefined) return;

      const isFirstOfAlbum = idx !== 0 && track.album['#text'] !== this.props.tracks[idx - 1].album['#text'];

      return (<RecentTrackListItem
                key={idx}
                name={track.name}
                artist={track.artist.name}
                album={track.album}
                date={track.date.uts}
                firstOfAlbum={isFirstOfAlbum}
              />);
    });

    return (
      <ul className="list recent-tracks-list">
        {tracks}
      </ul>
    );
  }
}

RecentTrackList.propTypes = {
  tracks: React.PropTypes.array
}

export default RecentTrackList;
