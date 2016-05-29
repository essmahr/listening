import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import topTracks from './topTracksReducer';
import topAlbums from './topAlbumsReducer';
import topArtists from './topArtistsReducer';
import recentTracks from './recentTracksReducer';

function activeTimeSpan(state = 'allTime', action) {
  if (action.type === 'TIME_SPAN_CHANGE') {
    return action.timeSpan;
  }

  return state;
}

function isFetching(state = false, action) {
  switch (action.type) {
    case 'TOP_ALBUMS_REQUEST':
    case 'TOP_TRACKS_REQUEST':
    case 'TOP_ARTISTS_REQUEST':
    case 'RECENT_TRACKS_REQUEST':
      return true;
    case 'TOP_ALBUMS_SUCCESS':
    case 'TOP_ALBUMS_FAILURE':
    case 'TOP_TRACKS_SUCCESS':
    case 'TOP_TRACKS_FAILURE':
    case 'TOP_ARTISTS_SUCCESS':
    case 'TOP_ARTISTS_FAILURE':
    case 'RECENT_TRACKS_SUCCESS':
    case 'RECENT_TRACKS_FAILURE':
      return false;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  topTracks,
  topArtists,
  topAlbums,
  recentTracks,
  isFetching,
  activeTimeSpan,
  routing,
})

export default rootReducer;
