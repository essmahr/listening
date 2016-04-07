import React from 'react';

import RecentTrackListItem from './RecentTrackListItem';

class RecentTrackList extends React.Component {
  render() {

    const tracks = this.props.tracks.map((track, idx) => {
      if (track.date === undefined) return;

      return (<RecentTrackListItem
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

RecentTrackList.propTypes = {
  tracks: React.PropTypes.array
}

export default RecentTrackList;
