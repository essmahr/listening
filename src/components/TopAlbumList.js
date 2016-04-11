import React from 'react';

import AlbumListItem from './TopAlbumListItem';

class AlbumList extends React.Component {
  render() {

    const albums = this.props.albums.map((album, idx) => {
      const rank = album['@attr'].rank;
      return (<AlbumListItem key={idx} album={album} rank={rank} />);
    });

    return (
      <section className="section">
        <header className="section-header">
          <h1 className="section-title">Top Albums</h1>
        </header>
        <ul className="list top-albums-list">
          {albums}
        </ul>
      </section>
    );
  }
}

AlbumList.propTypes = {
  albums: React.PropTypes.array
}

export default AlbumList;
