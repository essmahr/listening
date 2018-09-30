import React from 'react';
import Header from '../containers/Header';
import About from '../components/About';
import LoaderWrapper from '../components/LoaderWrapper';

const App = props => (
  <LoaderWrapper>
    <Header />
    {props.children}
    <About />
  </LoaderWrapper>
);

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
