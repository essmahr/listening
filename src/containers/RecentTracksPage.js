import React from 'react';
import { connect } from 'react-redux';
import { loadRecentTracks, loadMoreTracks } from '../actions';

import RecentTrackList from '../components/RecentTrackList';
import LoadMoreButton from '../components/LoadMoreButton';

class RecentTracksPage extends React.Component {
  componentWillMount() {
    this.props.loadRecentTracks();
  }

  loadMore() {
    this.props.loadMoreTracks();
  }

  render() {
    return (
      <section className="section">
        <header className="section-header no-tabs">
          <h1 className="section-title">Recent Tracks</h1>
        </header>
        <RecentTrackList tracks={this.props.recentTracks} />
        <LoadMoreButton isFetching={this.props.isFetching} onClick={this.loadMore.bind(this)} />
      </section>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    recentTracks: state.recentTracks.feed,
    isFetching: state.isFetching,
  }
}

export default connect(mapStateToProps, {
  loadRecentTracks,
  loadMoreTracks,
})(RecentTracksPage)
