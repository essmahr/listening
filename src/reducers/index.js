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
  return actionType === 'TOP_ALBUMS_SUCCESS'
  || actionType === 'TOP_TRACKS_SUCCESS' || actionType === 'TOP_ARTISTS_SUCCESS';
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
      return false
    default:
      return state;
  }
}

const lists = combineReducers({
  charts,
  recentTracks,
  isFetching,
})

const rootReducer = combineReducers({
  lists,
  activeTimeSpan,
  routing,
})

export default rootReducer;
