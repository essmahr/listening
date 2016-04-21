
const API_ROOT = "http://ws.audioscrobbler.com/2.0/?format=json&api_key=6084246ab5e1ff9a0d042f39b7f44a3a&extended=1&limit=30&user=kazoo_kid&method=";

// better key naming
const periodMap = {
  week: '7day',
  month: '1month',
  year: '12month',
  allTime: 'overall',
};

function callApi(endpoint, period) {
  let fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;

  if (period) {
    fullUrl = `${fullUrl}&period=${periodMap[period]}`;
  }

  return fetch(fullUrl)
    .then(response =>
      response.json().then((json) => ({ json, response }))
    ).then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json);
      }

      return santizeResponse(json, endpoint, period);
    });
}

function santizeResponse(json, endpoint, period) {
  switch(endpoint) {
    case 'user.getrecenttracks':
      return [...json.recenttracks.track];
    case 'user.gettopalbums':
      return {
        topAlbums: {[period]: Object.assign({}, json.topalbums.album)}
      }
    case 'user.gettoptracks':
      return {
        topTracks: {[period]: Object.assign({}, json.toptracks.track)}
      }
    case 'user.gettopartists':
      return {
        topArtists: {[period]: Object.assign({}, json.topartists.artist)}
      }
    default:
      return json;
  }
}

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = Symbol('Call API');

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
  const callAPI = action[CALL_API];

  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  const { endpoint, period, types } = callAPI;

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.')
  }

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.')
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.')
  }

  function actionWith(data) {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[CALL_API];
    return finalAction;
  }

  const [ requestType, successType, failureType ] = types;

  next(actionWith({ type: requestType }))

  return callApi(endpoint, period).then(
    response => next(actionWith({
      response,
      type: successType
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || 'Something bad happened'
    }))
  )
}
