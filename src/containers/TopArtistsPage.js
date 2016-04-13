import React from 'react';
import { connect } from 'react-redux';
import { loadTopArtists } from '../actions';

import ListHeader from '../components/ListHeader';
import TopArtistsList from '../components/TopArtistsList';

class TopArtistsPage extends React.Component {
  componentWillMount() {
    this.props.loadTopArtists('allTime');
  }

  render() {
    return (
      <section className="section">
        <ListHeader title="Top Tracks"/>
        <TopArtistsList artists={this.props.topArtists.allTime} />
      </section>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    topArtists: state.charts.topArtists,
  }
}

export default connect(mapStateToProps, {
  loadTopArtists
})(TopArtistsPage)
