import { CALL_API } from '../middleware/api';


/*---------------- Recent Tracks ----------------*/

export const RECENT_TRACKS_REQUEST = 'RECENT_TRACKS_REQUEST';
export const RECENT_TRACKS_SUCCESS = 'RECENT_TRACKS_SUCCESS';
export const RECENT_TRACKS_FAILURE = 'RECENT_TRACKS_FAILURE';

function fetchRecentTracks() {
  return {
    [CALL_API]: {
      types: [ RECENT_TRACKS_REQUEST, RECENT_TRACKS_SUCCESS, RECENT_TRACKS_FAILURE ],
      endpoint: 'user.getrecenttracks',
    }
  };
}

export function loadRecentTracks() {
  return (dispatch, getState) => {
    const loaded = getState().recentTracks.length;
    if (loaded) {
      return null
    }

    return dispatch(fetchRecentTracks());
  }
}


/*---------------- Top Albums ----------------*/

export const TOP_ALBUMS_REQUEST = 'TOP_ALBUMS_REQUEST';
export const TOP_ALBUMS_SUCCESS = 'TOP_ALBUMS_SUCCESS';
export const TOP_ALBUMS_FAILURE = 'TOP_ALBUMS_FAILURE';

function fetchTopAlbums(period) {
  return {
    [CALL_API]: {
      types: [ TOP_ALBUMS_REQUEST, TOP_ALBUMS_SUCCESS, TOP_ALBUMS_FAILURE ],
      endpoint: 'user.gettopalbums',
      period,
    }
  };
}

export function loadTopAlbums(period) {
  return (dispatch, getState) => {
    const loaded = getState().charts.topAlbums[period].length;
    if (loaded) {
      return null
    }

    return dispatch(fetchTopAlbums(period));
  }
}


/*---------------- Top Tracks ----------------*/

export const TOP_TRACKS_REQUEST = 'TOP_TRACKS_REQUEST';
export const TOP_TRACKS_SUCCESS = 'TOP_TRACKS_SUCCESS';
export const TOP_TRACKS_FAILURE = 'TOP_TRACKS_FAILURE';

function fetchTopTracks(period) {
  return {
    [CALL_API]: {
      types: [ TOP_TRACKS_REQUEST, TOP_TRACKS_SUCCESS, TOP_TRACKS_FAILURE ],
      endpoint: 'user.gettoptracks',
      period,
    }
  };
}

export function loadTopTracks(period) {
  return (dispatch, getState) => {
    const loaded = getState().charts.topTracks[period].length;
    if (loaded) {
      return null
    }

    return dispatch(fetchTopTracks(period));
  }
}


/*---------------- Top Artists ----------------*/

export const TOP_ARTISTS_REQUEST = 'TOP_ARTISTS_REQUEST';
export const TOP_ARTISTS_SUCCESS = 'TOP_ARTISTS_SUCCESS';
export const TOP_ARTISTS_FAILURE = 'TOP_ARTISTS_FAILURE';

function fetchTopArtists(period) {
  return {
    [CALL_API]: {
      types: [ TOP_ARTISTS_REQUEST, TOP_ARTISTS_SUCCESS, TOP_ARTISTS_FAILURE ],
      endpoint: 'user.gettopartists',
      listType: 'CHART',
      period,
    }
  };
}

export function loadTopArtists(period) {
  return (dispatch, getState) => {
    const loaded = getState().charts.topArtists[period].length;
    if (loaded) {
      return null
    }

    return dispatch(fetchTopArtists(period));
  }
}
