import React from 'react';

import RecentTrackListItem from './RecentTrackListItem';
import LoadMoreButton from './LoadMoreButton';

class RecentTrackList extends React.Component {
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
      <section className="section">
        <header className="section-header">
          <h1 className="section-title">Recent Tracks</h1>
        </header>
        <ul className="list recent-tracks-list">
          {tracks}
        </ul>
        <LoadMoreButton />
      </section>
    );
  }
}

RecentTrackList.propTypes = {
  tracks: React.PropTypes.array
}

export default RecentTrackList;
