import merge from 'lodash/merge';
import initialState from '../lib/initialState';

function topAlbumsReducer(state = initialState, action) {
  if (action.type === 'TOP_ALBUMS_SUCCESS' && action.response) {
    const {response, period} = action;
    const feed = response.topalbums.album
    return merge({}, state, {[period]: {feed}});
  }

  return state;
}

export default topAlbumsReducer;
