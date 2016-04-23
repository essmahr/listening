import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.isFetching) return null;

    return (
      <div className="progress-bar"></div>
    );
  }
}


function mapStateToProps(state) {
  return {
    isFetching: state.isFetching,
  }
}

export default connect(
  mapStateToProps
)(ProgressBar);
