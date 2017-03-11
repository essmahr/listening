import { CALL_API } from '../middleware/api';


/*---------------- Recent Tracks ----------------*/

export const RECENT_TRACKS_REQUEST = 'RECENT_TRACKS_REQUEST';
export const RECENT_TRACKS_SUCCESS = 'RECENT_TRACKS_SUCCESS';
export const RECENT_TRACKS_FAILURE = 'RECENT_TRACKS_FAILURE';

function fetchRecentTracks(params) {
  return {
    [CALL_API]: {
      types: [ RECENT_TRACKS_REQUEST, RECENT_TRACKS_SUCCESS, RECENT_TRACKS_FAILURE ],
      endpoint: 'user.getrecenttracks',
      params
    }
  };
}

export function loadRecentTracks(params = {}) {
  return (dispatch, getState) => {
    const loaded = getState().recentTracks.feed.length;
    if (loaded) return null;

    return dispatch(fetchRecentTracks(params));
  }
}

export function loadMoreTracks(params = {}) {
  return (dispatch, getState) => {
    const page = getState().recentTracks.page + 1;

    return dispatch(fetchRecentTracks({page}));
  }
}


/*---------------- Top Albums ----------------*/

export const TOP_ALBUMS_REQUEST = 'TOP_ALBUMS_REQUEST';
export const TOP_ALBUMS_SUCCESS = 'TOP_ALBUMS_SUCCESS';
export const TOP_ALBUMS_FAILURE = 'TOP_ALBUMS_FAILURE';

function fetchTopAlbums(params) {
  return {
    [CALL_API]: {
      types: [ TOP_ALBUMS_REQUEST, TOP_ALBUMS_SUCCESS, TOP_ALBUMS_FAILURE ],
      endpoint: 'user.gettopalbums',
      params,
    }
  };
}

export function loadTopAlbums(params) {
  return (dispatch, getState) => {
    const loaded = getState().topAlbums[params.period].feed.length;
    if (loaded) {
      return null
    }

    return dispatch(fetchTopAlbums(params));
  }
}


/*---------------- Top Tracks ----------------*/

export const TOP_TRACKS_REQUEST = 'TOP_TRACKS_REQUEST';
export const TOP_TRACKS_SUCCESS = 'TOP_TRACKS_SUCCESS';
export const TOP_TRACKS_FAILURE = 'TOP_TRACKS_FAILURE';

function fetchTopTracks(params) {
  return {
    [CALL_API]: {
      types: [ TOP_TRACKS_REQUEST, TOP_TRACKS_SUCCESS, TOP_TRACKS_FAILURE ],
      endpoint: 'user.gettoptracks',
      params,
    }
  };
}

export function loadTopTracks(params) {
  return (dispatch, getState) => {
    const loaded = getState().topTracks[params.period].feed.length;
    if (loaded) {
      return null
    }

    return dispatch(fetchTopTracks(params));
  }
}


/*---------------- Top Artists ----------------*/

export const TOP_ARTISTS_REQUEST = 'TOP_ARTISTS_REQUEST';
export const TOP_ARTISTS_SUCCESS = 'TOP_ARTISTS_SUCCESS';
export const TOP_ARTISTS_FAILURE = 'TOP_ARTISTS_FAILURE';

function fetchTopArtists(params) {
  return {
    [CALL_API]: {
      types: [ TOP_ARTISTS_REQUEST, TOP_ARTISTS_SUCCESS, TOP_ARTISTS_FAILURE ],
      endpoint: 'user.gettopartists',
      params,
    }
  };
}

export function loadTopArtists(params) {
  return (dispatch, getState) => {
    const loaded = getState().topArtists[params.period].feed.length;
    if (loaded) {
      return null
    }

    return dispatch(fetchTopArtists(params));
  }
}

/*---------------- Changing Timespan ----------------*/

export const TIME_SPAN_CHANGE = 'TIME_SPAN_CHANGE';

export function changeTimeSpan(timeSpan) {
  return {
    type: TIME_SPAN_CHANGE,
    timeSpan
  }
}
