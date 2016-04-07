import React from 'react';

class TopArtistsListItem extends React.Component {
  render() {
    return (
      <li>
        <h1>{this.props.name}</h1>
      </li>
    )
  }
}

TopArtistsListItem.proptypes = {
  name: React.PropTypes.string,
}

export default TopArtistsListItem;
