import merge from 'lodash/merge';
import initialState from '../lib/initialState';

function topArtistsReducer(state = initialState, action) {
  if (action.type === 'TOP_ARTISTS_SUCCESS' && action.response) {
    const {response, period} = action;
    const feed = response.topartists.artist
    return merge({}, state, {[period]: {feed}});
  }

  return state;
}

export default topArtistsReducer;
