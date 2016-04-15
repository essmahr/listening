import React from 'react';
import ImageLoader from './ImageLoader';

class TopArtistsListItem extends React.Component {
  render() {
    const {name, rank, image, count} = this.props;

    return (
      <li className="list-item top-artists-list-item">
        <div className="top-artist-image-column">
          <ImageLoader imgSrc={image} className="list-image top-albums-rank-image">
            <div className="list-image-rank top-artist-rank">{rank}</div>
          </ImageLoader>
        </div>
        <div className="top-artist-info-column">
          <h1 className="top-artist-name">{name}</h1>
        </div>
        <div className="top-artist-playcount-column">
          <strong className="top-artist-playcount-count">{count}</strong>
          <span className="top-artist-playcount-label"> Plays</span>
        </div>
      </li>
    )
  }
}

TopArtistsListItem.proptypes = {
  name: React.PropTypes.string.isRequired,
  rank: React.PropTypes.string.isRequired,
  count: React.PropTypes.string.isRequired,
}

export default TopArtistsListItem;
