import React from 'react';
import PropTypes from 'prop-types';
import ImageLoader from './ImageLoader';
import playCount from '../lib/playCount';

class TopArtistsListItem extends React.Component {
  playCount() {
    if (!this.props.count) return;

    return (
      <div className="top-artist-playcount">
        <strong className="top-artist-playcount-count">{this.props.count}</strong>
        <span className="top-artist-playcount-label"> {playCount(this.props.count)}</span>
      </div>
    );
  }

  render() {
    const {name, rank, image} = this.props;

    return (
      <li className="list-item top-artists-list-item">
        <div className="top-artist-image-container">
          <ImageLoader key={image} imgSrc={image} className="list-image top-albums-rank-image">
            <div className="list-image-rank top-artist-rank">{rank}</div>
          </ImageLoader>
        </div>
        <div className="top-artist-info-container">
          <h1 className="top-artist-name">{name}</h1>
          {this.playCount()}
        </div>
      </li>
    )
  }
}

TopArtistsListItem.proptypes = {
  name: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
}

export default TopArtistsListItem;
