import React from 'react';
import Header from '../containers/Header';
import ProgressBar from '../components/ProgressBar';
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
  // Injected by React Router
  children: React.PropTypes.node
};

export default App;
