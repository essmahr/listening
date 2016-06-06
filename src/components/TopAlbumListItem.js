import React from 'react';
import ImageLoader from './ImageLoader';
import playCount from '../lib/playCount';

class AlbumListItem extends React.Component {
  playcount() {
    if (!this.props.playcount) return;

    return (
      <div className="top-albums-playcount">
        <strong className="top-albums-playcount-count">{this.props.playcount}</strong>
        <span className="top-albums-playcount-label"> {playCount(this.props.count)}</span>
      </div>
    );
  }

  render() {
    const {rank, albumName, artistName, image} = this.props;

    return (
      <li className="list-item top-albums-list-item">
        <div className="top-albums-cover-column">
          <ImageLoader key={image} imgSrc={image} className="list-image top-albums-rank-image">
            <div className="list-image-rank top-albums-rank">{rank}</div>
          </ImageLoader>
        </div>
        <div className="top-albums-info-column">
          <h2 className="top-album-artist">{artistName}</h2>
          <h1 className="top-album-name">{albumName}</h1>
          {this.playcount()}
        </div>
      </li>
    )
  }
}

export default AlbumListItem;
