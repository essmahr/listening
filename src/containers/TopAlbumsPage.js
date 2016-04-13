import React from 'react';
import { connect } from 'react-redux';
import { loadTopAlbums } from '../actions';

import ListHeader from '../components/ListHeader';
import AlbumList from '../components/TopAlbumList';

class TopAlbumsPage extends React.Component {
  componentWillMount() {
    this.props.loadTopAlbums('allTime');
  }

  render() {
    return (
      <section className="section">
        <ListHeader title="Top Tracks"/>
        <AlbumList albums={this.props.topAlbums.allTime} />
      </section>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    topAlbums: state.charts.topAlbums,
  }
}

export default connect(mapStateToProps, {
  loadTopAlbums
})(TopAlbumsPage);
