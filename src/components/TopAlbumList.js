import React from 'react';

import AlbumListItem from './TopAlbumListItem';

class AlbumList extends React.Component {
  render() {

    const albums = this.props.albums.map((album, idx) => {
      return (<AlbumListItem key={idx} name={album.name} />);
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
