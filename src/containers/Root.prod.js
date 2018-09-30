import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import routes from '../routes';
import { Router } from 'react-router';
import ga from 'react-ga';

ga.initialize(process.env.GA_KEY);

function logPageView() {
  ga.pageview(window.location.pathname);
}

const Root = props => {
  const { store, history } = props;
  return (
    <Provider store={store}>
      <Router history={history} routes={routes} onUpdate={logPageView}/>
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default Root;
