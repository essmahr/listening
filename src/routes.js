import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import RecentTracksPage from './containers/RecentTracksPage';
import TopAlbumsPage from './containers/TopAlbumsPage';
import TopArtistsPage from './containers/TopArtistsPage';
import TopTracksPage from './containers/TopTracksPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={RecentTracksPage} />
    <Route path="/albums" component={TopAlbumsPage} />
    <Route path="/artists" component={TopArtistsPage} />
    <Route path="/tracks" component={TopTracksPage} />
  </Route>
);
