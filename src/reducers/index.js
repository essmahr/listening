import * as ActionTypes from '../actions';
import merge from 'lodash/merge';
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

const initialCharts = {
  topAlbums: {
    week: [],
    month: [],
    year: [],
    allTime: [],
  },
  topTracks: {
    week: [],
    month: [],
    year: [],
    allTime: [],
  },
  topArtists: {
    week: [],
    month: [],
    year: [],
    allTime: [],
  },
}

function isChartSuccessAction(actionType) {
  return actionType === 'TOP_ALBUMS_SUCCESS' || actionType === 'TOP_TRACKS_SUCCESS' || actionType === 'TOP_ARTISTS_SUCCESS';
}

function charts(state = initialCharts, action) {
  if (isChartSuccessAction(action.type) && action.response) {
    return merge({}, state, action.response);
  }

  return state;
}

function recentTracks(state = [], action) {
  if (action.type === 'RECENT_TRACKS_SUCCESS' && action.response) {
    return [].concat(action.response);
  }

  return state;
}

const rootReducer = combineReducers({
  charts,
  recentTracks,
  routing,
})

export default rootReducer;
