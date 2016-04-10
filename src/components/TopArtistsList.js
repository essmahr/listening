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
      <section className="section">
        <header className="section-header">
          <h1 className="section-title">Top Artists</h1>
        </header>
        <ul className="list top-artists-list">
          {artists}
        </ul>
      </section>
    );
  }
}

TopArtistsList.propTypes = {
  artists: React.PropTypes.array
}

export default TopArtistsList;
