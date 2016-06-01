import React from 'react';
import CSSTranstionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';

class LoaderWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstLoadComplete: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.isFetching) {
      window.setTimeout(() => {
        this.setState({
          firstLoadComplete: true,
        }, () => {
          document.body.className = 'loaded';
        });
      }, 500);
    }
  }

  spinner() {
    return (
      <div className="loading-overlay" key="1">
        <div className="spinner">
          <div className="rect1"></div>
          <div className="rect2"></div>
          <div className="rect3"></div>
          <div className="rect4"></div>
          <div className="rect5"></div>
          <div className="rect6"></div>
          <div className="rect7"></div>
          <div className="rect8"></div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <CSSTranstionGroup transitionName="loader-fade" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
          {!this.state.firstLoadComplete ? this.spinner() : null}
        </CSSTranstionGroup>
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    isFetching: state.isFetching,
  };
}

export default connect(mapStateToProps)(LoaderWrapper);
