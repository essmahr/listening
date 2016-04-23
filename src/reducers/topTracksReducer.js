import merge from 'lodash/merge';
import initialState from '../lib/initialState';

function topTracksReducer(state = initialState, action) {
  if (action.type === 'TOP_TRACKS_SUCCESS' && action.response) {
    const {response, period} = action;
    const feed = response.toptracks.track
    return merge({}, state, {[period]: {feed}});
  }

  return state;
}

export default topTracksReducer;
