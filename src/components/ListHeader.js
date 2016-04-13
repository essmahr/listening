import React from 'react';
import TimeSpanMenu from './TimeSpanMenu';

class ListHeader extends React.Component {
  render() {
    return (
      <header className="section-header">
        <h1 className="section-title">{this.props.title}</h1>
        <TimeSpanMenu />
      </header>
    );
  }
}

ListHeader.propTypes = {
  title: React.PropTypes.string.isRequired,
}

export default ListHeader;
