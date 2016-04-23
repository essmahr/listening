import merge from 'lodash/merge';

const initialState = {
  feed: [],
  page: 1
}

function recentTracksReducer(state = initialState, action) {
  if (action.type === 'RECENT_TRACKS_SUCCESS' && action.response) {
    const feed = action.response.recenttracks.track;
    return merge(state, {feed});
  }

  return state;
}

export default recentTracksReducer;
