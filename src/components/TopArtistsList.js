import React from 'react';

import TopArtistsListItem from './TopArtistsListItem';

class TopArtistsList extends React.Component {
  render() {

    const artists = this.props.artists.map((artist, idx) => {
      return (<TopArtistsListItem
                key={idx}
                name={artist.name}
              />);
    });

    return (
      <ul className="list artists-list">
        {artists}
      </ul>
    );
  }
}

TopArtistsList.propTypes = {
  artists: React.PropTypes.array
}

export default TopArtistsList;
