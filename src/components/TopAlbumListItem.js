import React from 'react';

class AlbumListItem extends React.Component {
  render() {
    return (
      <li className="list-item top-albums-list-item">
        <h1>{this.props.name}</h1>
        <h2>{this.props.artist}</h2>
      </li>
    )
  }
}

AlbumListItem.proptypes = {
  artist: React.PropTypes.string,
  name: React.PropTypes.string
}

export default AlbumListItem;
