import React from 'react';
import ImageLoader from './ImageLoader';

class AlbumListItem extends React.Component {
  render() {
    const { album, rank } = this.props;

    const imageSrc = album.image[3]['#text'];

    return (
      <li className="list-item top-albums-list-item">
        <div className="top-albums-cover-column">
          <ImageLoader key={imageSrc} imgSrc={imageSrc} className="list-image top-albums-rank-image">
            <div className="list-image-rank top-albums-rank">{rank}</div>
          </ImageLoader>
        </div>
        <div className="top-albums-info-column">
          <h2 className="top-album-artist">{album.artist.name}</h2>
          <h1 className="top-album-name">{album.name}</h1>
          <div className="top-albums-playcount">
            <strong className="top-albums-playcount-count">{album.playcount}</strong>
            <span className="top-albums-playcount-label"> Plays</span>
          </div>
        </div>
      </li>
    )
  }
}

AlbumListItem.proptypes = {
  rank: React.PropTypes.string.isRequired,
  album: React.PropTypes.shape({
    name: React.PropTypes.string.isRequred,
    artist: React.PropTypes.object.isRequred
  }).isRequred,
}

export default AlbumListItem;
