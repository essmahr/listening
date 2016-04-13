import React from 'react';
import { connect } from 'react-redux';
import { loadTopTracks } from '../actions';

import ListHeader from '../components/ListHeader';
import TopTrackList from '../components/TopTrackList';

class TopTracksPage extends React.Component {
  componentWillMount() {
    this.props.loadTopTracks('allTime');
  }

  render() {
    return (
      <section className="section">
        <ListHeader title="Top Tracks" />
        <TopTrackList tracks={this.props.topTracks.allTime} />
      </section>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    topTracks: state.charts.topTracks,
  }
}

export default connect(mapStateToProps, {
  loadTopTracks
})(TopTracksPage)
