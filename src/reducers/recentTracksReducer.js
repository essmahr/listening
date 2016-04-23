import merge from 'lodash/merge';

const initialState = {
  feed: [],
  page: 1
}

function recentTracksReducer(state = initialState, action) {

  if (action.type === 'RECENT_TRACKS_SUCCESS' && action.response) {
    const page = action.page || state.page;
    const feed = (page === 1)
      ? action.response.recenttracks.track
      : state.feed.concat(action.response.recenttracks.track)

    return merge({}, state, {feed, page});
  }

  return state;
}

export default recentTracksReducer;
