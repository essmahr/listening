import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import routes from '../routes';
import { Router } from 'react-router';
import ga from 'react-ga';
import { googleAnalyticsKey } from '../../config.js'

ga.initialize(googleAnalyticsKey);

function logPageView() {
  ga.pageview(window.location.pathname);
}

export default class Root extends Component {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <Router history={history} routes={routes} onUpdate={logPageView}/>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
