import React from 'react';

import AlbumListItem from './AlbumListItem';

class AlbumList extends React.Component {
  render() {

    const albums = this.props.albums.map((album, idx) => {
      return (<AlbumListItem key={idx} name={album.name} />);
    });

    return (
      <ul className="list albums-list">
        {albums}
      </ul>
    );
  }
}

AlbumList.propTypes = {
  albums: React.PropTypes.array
}

export default AlbumList;
