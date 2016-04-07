import * as ActionTypes from '../actions';
import merge from 'lodash/merge';
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

const initialEntities = {
  recentTracks: [],
  topAlbums: [],
  topTracks: [],
  topArtists: []
}

function entities(state = initialEntities, action) {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities);
  }

  return state;
}

const rootReducer = combineReducers({
  entities,
  routing,
})

export default rootReducer;
