import React from 'react';
import TopArtistsListItem from './TopArtistsListItem';

class TopArtistsList extends React.Component {

  artistsList() {
    return this.props.artists.map((artist, idx) => {
      const props = {
        name: artist.name,
        image: artist.image[2]['#text'],
        rank: artist['@attr'].rank,
        count: artist.playcount,
      };
      return (<TopArtistsListItem key={idx} {...props}/>);
    });
  }

  loaderList() {
    return Array(25).fill().map((_, idx) => {
      return (<TopArtistsListItem key={idx} />);
    });
  }

  render() {

    return (
      <ul className="list top-artists-list">
        {this.props.artists.length ? this.artistsList() : this.loaderList()}
      </ul>
    );
  }
}

TopArtistsList.propTypes = {
  artists: React.PropTypes.array
}

export default TopArtistsList;
