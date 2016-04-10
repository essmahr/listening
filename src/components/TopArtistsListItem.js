import React from 'react';

class TopArtistsListItem extends React.Component {
  render() {
    return (
      <li className="list-item top-artists-list-item">
        <h1>{this.props.name}</h1>
      </li>
    )
  }
}

TopArtistsListItem.proptypes = {
  name: React.PropTypes.string,
}

export default TopArtistsListItem;
