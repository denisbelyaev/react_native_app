'use strict'
import { Schema, arrayOf, normalize } from 'normalizr';
import { camelizeKeys } from 'humps';
import 'isomorphic-fetch';

const API_BASE_URL = 'http://127.0.0.1:8000';
const PROXY_ROOT = '/api/v1';

const queryString = (params) => {
    return '?' + Object.keys(params).map((key) =>
                [key, params[key]].join('=')
        ).join('&');
}

const callApi = (options) => {
    var {url, method, headers, params, body} = options;

    var requestUrl = API_BASE_URL + PROXY_ROOT + url

    params ? requestUrl += queryString(options.params) : params;
    headers['Accept'] = 'application/json';
    headers['Content-Type'] = 'application/json';

    return fetch(requestUrl, {...options, headers})
        .then(response => response.json())
};

export const addUser = action => {
    let {payload} = action;
    let options = {...payload,
        method: 'POST',
        url: 'users',
        body: payload.user
    }

    return callApi(options);
}

export const listUser = action => {
    let {payload} = action;
    let options = {...payload,
        method: 'GET',
        url: '/books'
    }

    return callApi(options);
}
