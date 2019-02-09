import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { loadRecentTracks } from '../actions';

import Menu from '../components/Menu';
import NowPlaying from '../components/NowPlaying';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.loadRecentTracks();
  }

  render() {
    return (
      <header className="site-header">
        {this.props.nowPlaying ? <NowPlaying track={this.props.nowPlaying}/> : null}
        <Menu location={this.props.location} />
      </header>
    );
  }
};

function mapStateToProps(state) {
  if (!state.recentTracks.feed.length) return {};

  const latestTrack = state.recentTracks.feed[0];
  const nowPlaying = latestTrack['@attr'] !== undefined && latestTrack['@attr'].nowplaying;
  return {
    location: state.routing.locationBeforeTransitions.pathname,
    nowPlaying: nowPlaying ? latestTrack : false
  }
};

export default connect(mapStateToProps, {
  loadRecentTracks
})(Header);
