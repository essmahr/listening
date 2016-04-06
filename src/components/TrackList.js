import React from 'react';

import TrackListItem from './TrackListItem';

class TrackList extends React.Component {
  render() {

    const tracks = this.props.tracks.map((track, idx) => {
      if (track.date === undefined) return;

      return (<TrackListItem
                key={idx}
                name={track.name}
                artist={track.artist.name}
                album={track.album}
                date={track.date.uts}
              />);
    });

    return (
      <ul className="list tracks-list">
        {tracks}
      </ul>
    );
  }
}

TrackList.propTypes = {
  tracks: React.PropTypes.array
}

export default TrackList;
