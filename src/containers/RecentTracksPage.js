import React from 'react';
import { connect } from 'react-redux';
import { loadRecentTracks } from '../actions';

import RecentTrackList from '../components/RecentTrackList';

class RecentTracksPage extends React.Component {
  componentWillMount() {
    this.props.loadRecentTracks();
  }

  render() {
    return (
      <RecentTrackList tracks={this.props.recentTracks} />
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    recentTracks: state.lists.recentTracks,
  }
}

export default connect(mapStateToProps, {
  loadRecentTracks
})(RecentTracksPage)
