import React from 'react';
import PropTypes from 'prop-types';

import AlbumListItem from './TopAlbumListItem';

class AlbumList extends React.Component {
  albumList() {
    return this.props.albums.map((album, idx) => {
      const props = {
        rank: album['@attr'].rank,
        playcount: album.playcount,
        albumName: album.name,
        artistName: album.artist.name,
        image: album.image[3]['#text'],
      }
      return (<AlbumListItem key={idx} {...props} />);
    });
  }

  loaderList() {
    return Array(25).fill().map((_, idx) => {
      return (<AlbumListItem key={idx} />);
    });
  }

  render() {
    return (
      <ul className="list top-albums-list">
        {this.props.albums.length ? this.albumList() : this.loaderList()}
      </ul>
    );
  }
}

AlbumList.propTypes = {
  albums: PropTypes.array
}

export default AlbumList;
