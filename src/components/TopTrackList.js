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
      <ul className="list top-tracks-list">
        {tracks}
      </ul>
    );
  }
}

TopTrackList.propTypes = {
  tracks: React.PropTypes.array
}

export default TopTrackList;
