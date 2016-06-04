import config from '../../config';

const API_ROOT = `http://ws.audioscrobbler.com/2.0/?format=json&api_key=${config.lastfmApiKey}&extended=1&limit=25&user=${config.lastfmUser}&method=`;

// better key naming
const periodMap = {
  week: '7day',
  month: '1month',
  sixMonths: '6month',
  year: '12month',
  allTime: 'overall',
};

function callApi(endpoint, params) {
  console.log(endpoint, params);

  let fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;

  if (params.period) {
    fullUrl = `${fullUrl}&period=${periodMap[params.period]}`;
  }

  if (params.page) {
    fullUrl = `${fullUrl}&page=${params.page}`;
  }

  return fetch(fullUrl)
    .then(response =>
      response.json().then((json) => ({ json, response }))
    ).then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json);
      }

      return {
        response: json,
        period: params.period,
        page: params.page,
      };
    });
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

  const { endpoint, params, types } = callAPI;

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

  next(actionWith({ type: requestType }));

  return callApi(endpoint, params).then(
    ({response, period, page}) => {
      return next(actionWith({
        response,
        period,
        page,
        type: successType,
      }));
    },
    (error) => {
      return next(actionWith({
        type: failureType,
        error: error.message || 'Something bad happened',
      }));
    }
  )
}
