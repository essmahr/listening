import React from 'react';
import { connect } from 'react-redux';
import { loadTopArtists, changeTimeSpan } from '../actions';

import ListHeader from '../components/ListHeader';
import TopArtistsList from '../components/TopArtistsList';

class TopArtistsPage extends React.Component {
  componentWillMount() {
    this.props.loadTopArtists(this.props.activeTimeSpan);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.activeTimeSpan !== nextProps.activeTimeSpan) {
      this.props.loadTopArtists(nextProps.activeTimeSpan);
    }
  }

  render() {
    return (
      <section className="section">
        <ListHeader title="Top Artists"/>
        <TopArtistsList artists={this.props.topArtists[this.props.activeTimeSpan]} />
      </section>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    topArtists: state.lists.charts.topArtists,
    activeTimeSpan: state.activeTimeSpan,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onTimeSpanChange: (span) => {
      dispatch(changeTimeSpan(span));
    },
    loadTopArtists: (span) => {
      dispatch(loadTopArtists(span));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopArtistsPage)
