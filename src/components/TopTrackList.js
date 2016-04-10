import React from 'react';

import TopTrackListItem from './TopTrackListItem';

class TopTrackList extends React.Component {
  render() {

    const tracks = this.props.tracks.map((track, idx) => {
      return (<TopTrackListItem
                key={idx}
                name={track.name}
                artist={track.artist.name}
                album={track.album}
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
