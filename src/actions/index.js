import { CALL_API } from '../middleware/api';

export const TRACKS_REQUEST = 'TRACKS_REQUEST';
export const TRACKS_SUCCESS = 'TRACKS_SUCCESS';
export const TRACKS_FAILURE = 'TRACKS_FAILURE';

function fetchRecentTracks() {
  return {
    [CALL_API]: {
      types: [ TRACKS_REQUEST, TRACKS_SUCCESS, TRACKS_FAILURE ],
      endpoint: 'user.getrecenttracks'
    }
  };
}

export function loadRecentTracks() {
  return (dispatch, getState) => {
    const tracksLoaded = getState().entities.recentTracks.length;
    if (tracksLoaded) {
      return null
    }

    return dispatch(fetchRecentTracks());
  }
}
