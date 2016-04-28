import React from 'react';
import { connect } from 'react-redux';
import { loadTopArtists, changeTimeSpan } from '../actions';

import ListHeader from '../components/ListHeader';
import TopArtistsList from '../components/TopArtistsList';

class TopArtistsPage extends React.Component {
  componentWillMount() {
    this.props.loadTopArtists({period: this.props.activeTimeSpan});
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.activeTimeSpan !== nextProps.activeTimeSpan) {
      this.props.loadTopArtists({period: nextProps.activeTimeSpan});
    }
  }

  render() {
    return (
      <section className="section" key="topArtists">
        <ListHeader title="Top Artists"/>
        <TopArtistsList artists={this.props.topArtists} />
      </section>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    topArtists: state.topArtists[state.activeTimeSpan].feed,
    activeTimeSpan: state.activeTimeSpan,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadTopArtists: (span) => {
      dispatch(loadTopArtists(span));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopArtistsPage)
