import React from 'react';
import SineWave from './SineWave';

export default ({ track }) => {
  const { name, artist } = track;

  return (
    <div className="now-playing">
      <h5 className="now-playing-label">Listening:</h5>
      <h1 className="now-playing-title">{name}</h1>
      <h2 className="now-playing-artist">{artist.name}</h2>
      <SineWave />
    </div>
  );
};
