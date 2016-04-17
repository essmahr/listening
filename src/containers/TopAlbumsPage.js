import React from 'react';
import { connect } from 'react-redux';
import { loadTopAlbums } from '../actions';

import ListHeader from '../components/ListHeader';
import AlbumList from '../components/TopAlbumList';

class TopAlbumsPage extends React.Component {
  componentWillMount() {
    this.props.loadTopAlbums(this.props.activeTimeSpan);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.activeTimeSpan !== nextProps.activeTimeSpan) {
      this.props.loadTopAlbums(nextProps.activeTimeSpan);
    }
  }

  render() {
    return (
      <section className="section">
        <ListHeader title="Top Albums"/>
        <AlbumList albums={this.props.topAlbums[this.props.activeTimeSpan]} />
      </section>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    topAlbums: state.lists.charts.topAlbums,
    activeTimeSpan: state.activeTimeSpan,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onTimeSpanChange: (span) => {
      dispatch(changeTimeSpan(span));
    },
    loadTopAlbums: (span) => {
      dispatch(loadTopAlbums(span));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopAlbumsPage);
