import React from 'react';
import { connect } from 'react-redux';
import { loadTopTracks, changeTimeSpan } from '../actions';

import ListHeader from '../components/ListHeader';
import TopTrackList from '../components/TopTrackList';

class TopTracksPage extends React.Component {
  componentWillMount() {
    this.props.loadTopTracks(this.props.activeTimeSpan);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.activeTimeSpan !== nextProps.activeTimeSpan) {
      this.props.loadTopTracks(nextProps.activeTimeSpan);
    }
  }

  render() {
    return (
      <section className="section">
        <ListHeader title="Top Tracks" />
        <TopTrackList tracks={this.props.topTracks[this.props.activeTimeSpan]} />
      </section>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    topTracks: state.charts.topTracks,
    activeTimeSpan: state.activeTimeSpan,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onTimeSpanChange: (span) => {
      dispatch(changeTimeSpan(span));
    },
    loadTopTracks: (span) => {
      dispatch(loadTopTracks(span));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopTracksPage)
