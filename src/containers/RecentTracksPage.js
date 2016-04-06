import React from 'react';
import { connect } from 'react-redux';
import { loadRecentTracks } from '../actions';

import TrackList from '../components/TrackList';

class RecentTracksPage extends React.Component {
  componentWillMount() {
    this.props.loadRecentTracks();
  }

  render() {
    return (
      <TrackList tracks={this.props.recentTracks} />
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    recentTracks: state.entities.recentTracks,
  }
}

export default connect(mapStateToProps, {
  loadRecentTracks
})(RecentTracksPage)
