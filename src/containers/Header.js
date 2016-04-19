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
        <Menu />
        {this.props.nowPlaying ? <NowPlaying track={this.props.nowPlaying}/> : null}
      </header>
    );
  }
};

function mapStateToProps(state) {
  if (!state.lists.recentTracks.length) return {};

  const latestTrack = state.lists.recentTracks[0];
  const nowPlaying = latestTrack['@attr'] !== undefined && latestTrack['@attr'].nowplaying;
  return {
    nowPlaying: nowPlaying ? latestTrack : false
  }
};

export default connect(mapStateToProps, {
  loadRecentTracks
})(Header);
