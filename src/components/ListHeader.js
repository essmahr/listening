import React from 'react';
import TimeSpanMenu from './TimeSpanMenu';

const ListHeader = ({ title }) => (
  <header className="section-header">
    <h1 className="section-title">{title}</h1>
    <TimeSpanMenu />
  </header>
);

ListHeader.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default ListHeader;
