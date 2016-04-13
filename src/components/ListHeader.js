import React from 'react';

class ListHeader extends React.Component {
  render() {
    return (
      <header className="section-header">
        <h1 className="section-title">{this.props.title}</h1>
      </header>
    );
  }
}

ListHeader.propTypes = {
  title: React.PropTypes.string.isRequired
}

export default ListHeader;


