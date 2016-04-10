import React from 'react';
import { connect } from 'react-redux';
import { loadTopAlbums } from '../actions';

import AlbumList from '../components/TopAlbumList';

class TopAlbumsPage extends React.Component {
  componentWillMount() {
    this.props.loadTopAlbums();
  }

  render() {
    return (
      <AlbumList albums={this.props.topAlbums} />
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    topAlbums: state.entities.topAlbums,
  }
}

export default connect(mapStateToProps, {
  loadTopAlbums
})(TopAlbumsPage);
