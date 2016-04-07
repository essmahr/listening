import { CALL_API } from '../middleware/api';

function dispatcher(key, dispatchFunction) {
  return (dispatch, getState) => {
    const loaded = getState().entities[key].length;
    if (loaded) {
      return null
    }

    return dispatch(dispatchFunction());
  }
}


/*---------------- Recent Tracks ----------------*/

export const RECENT_TRACKS_REQUEST = 'RECENT_TRACKS_REQUEST';
export const RECENT_TRACKS_SUCCESS = 'RECENT_TRACKS_SUCCESS';
export const RECENT_TRACKS_FAILURE = 'RECENT_TRACKS_FAILURE';

function fetchRecentTracks() {
  return {
    [CALL_API]: {
      types: [ RECENT_TRACKS_REQUEST, RECENT_TRACKS_SUCCESS, RECENT_TRACKS_FAILURE ],
      endpoint: 'user.getrecenttracks'
    }
  };
}

export function loadRecentTracks() {
  return dispatcher('recentTracks', fetchRecentTracks);
}


/*---------------- Top Albums ----------------*/

export const TOP_ALBUMS_REQUEST = 'TOP_ALBUMS_REQUEST';
export const TOP_ALBUMS_SUCCESS = 'TOP_ALBUMS_SUCCESS';
export const TOP_ALBUMS_FAILURE = 'TOP_ALBUMS_FAILURE';

function fetchTopAlbums() {
  return {
    [CALL_API]: {
      types: [ TOP_ALBUMS_REQUEST, TOP_ALBUMS_SUCCESS, TOP_ALBUMS_FAILURE ],
      endpoint: 'user.gettopalbums'
    }
  };
}

export function loadTopAlbums() {
  return dispatcher('topAlbums', fetchTopAlbums);
}


/*---------------- Top Tracks ----------------*/

export const TOP_TRACKS_REQUEST = 'TOP_TRACKS_REQUEST';
export const TOP_TRACKS_SUCCESS = 'TOP_TRACKS_SUCCESS';
export const TOP_TRACKS_FAILURE = 'TOP_TRACKS_FAILURE';

function fetchTopTracks() {
  return {
    [CALL_API]: {
      types: [ TOP_TRACKS_REQUEST, TOP_TRACKS_SUCCESS, TOP_TRACKS_FAILURE ],
      endpoint: 'user.gettoptracks'
    }
  };
}

export function loadTopTracks() {
  return dispatcher('topTracks', fetchTopTracks);
}


/*---------------- Top Artists ----------------*/

export const TOP_ARTISTS_REQUEST = 'TOP_ARTISTS_REQUEST';
export const TOP_ARTISTS_SUCCESS = 'TOP_ARTISTS_SUCCESS';
export const TOP_ARTISTS_FAILURE = 'TOP_ARTISTS_FAILURE';

function fetchTopArtists() {
  return {
    [CALL_API]: {
      types: [ TOP_ARTISTS_REQUEST, TOP_ARTISTS_SUCCESS, TOP_ARTISTS_FAILURE ],
      endpoint: 'user.gettopartists'
    }
  };
}

export function loadTopArtists() {
  return dispatcher('topArtists', fetchTopArtists);
}
