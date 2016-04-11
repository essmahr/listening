import React from 'react';

class TopArtistsListItem extends React.Component {
  render() {
    const {name, rank, count} = this.props;

    return (
      <li className="list-item top-artists-list-item">
        <div className="top-artist-rank-column">
          <div className="top-artist-rank">
            {rank}
          </div>
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
