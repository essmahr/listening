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
      <ul className="list tracks-list">
        {tracks}
      </ul>
    );
  }
}

TopTrackList.propTypes = {
  tracks: React.PropTypes.array
}

export default TopTrackList;
