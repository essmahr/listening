import React from 'react';
import Header from '../containers/Header';
import AboutBlurb from '../components/AboutBlurb';
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
      </LoaderWrapper>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node
};

export default App;
