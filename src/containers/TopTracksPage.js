import React from 'react';
import { connect } from 'react-redux';
import { loadTopTracks } from '../actions';

import TopTrackList from '../components/TopTrackList';

class TopTracksPage extends React.Component {
  componentWillMount() {
    this.props.loadTopTracks();
  }

  render() {
    return (
      <TopTrackList tracks={this.props.topTracks} />
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    topTracks: state.entities.topTracks,
  }
}

export default connect(mapStateToProps, {
  loadTopTracks
})(TopTracksPage)
