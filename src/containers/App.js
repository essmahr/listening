import React from 'react';
import Header from '../containers/Header';
import ProgressBar from '../components/ProgressBar';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  // Injected by React Router
  children: React.PropTypes.node
};

export default App;
