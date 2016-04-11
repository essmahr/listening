import React from 'react';

import TopTrackListItem from './TopTrackListItem';

class TopTrackList extends React.Component {
  render() {

    const tracks = this.props.tracks.map((track, idx) => {
      const rank = track['@attr'].rank;

      return (<TopTrackListItem
                key={idx}
                track={track.name}
                artist={track.artist.name}
                album={track.album}
                count={track.playcount}
                rank={rank}
              />);
    });

    return (
      <section className="section">
        <header className="section-header">
          <h1 className="section-title">Top Tracks</h1>
        </header>
        <ul className="list top-tracks-list">
          {tracks}
        </ul>
      </section>
    );
  }
}

TopTrackList.propTypes = {
  tracks: React.PropTypes.array
}

export default TopTrackList;
