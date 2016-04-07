import React from 'react';
import { connect } from 'react-redux';
import { loadTopArtists } from '../actions';

import TopArtistsList from '../components/TopArtistsList';

class TopArtistsPage extends React.Component {
  componentWillMount() {
    this.props.loadTopArtists();
  }

  render() {
    console.log(this.props);
    return (
      <TopArtistsList artists={this.props.topArtists} />
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    topArtists: state.entities.topArtists,
  }
}

export default connect(mapStateToProps, {
  loadTopArtists
})(TopArtistsPage)
