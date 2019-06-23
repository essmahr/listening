import React from 'react';
import PropTypes from "prop-types";
import Header from '../containers/Header';
import About from '../components/About';
import LoaderWrapper from '../components/LoaderWrapper';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LoaderWrapper>
        <Header/>
        {this.props.children}
        <About/>
      </LoaderWrapper>
    );
  }
}

App.propTypes = {
  children: PropTypes.node
};

export default App;
