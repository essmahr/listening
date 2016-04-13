import React from 'react';

import AlbumListItem from './TopAlbumListItem';

class AlbumList extends React.Component {
  render() {

    const albums = this.props.albums.map((album, idx) => {
      const rank = album['@attr'].rank;
      return (<AlbumListItem key={idx} album={album} rank={rank} />);
    });

    return (
      <ul className="list top-albums-list">
        {albums}
      </ul>
    );
  }
}

AlbumList.propTypes = {
  albums: React.PropTypes.array
}

export default AlbumList;
