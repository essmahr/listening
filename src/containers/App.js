import React from 'react';
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
  children: React.PropTypes.node
};

export default App;
