const fetch = require('node-fetch');

const key = '41d4e07e8488935bc7d2270bb0a2156e';
const baseURL = 'https://api.darksky.net';

const forecast_endpoint = 'forecast';

const latitude = '37.8267';
const longitude = '-122.4233';

const callDarkSky =  () => {
    const url = ` ${baseURL}/${forecast_endpoint}/${key}/${latitude},${longitude}`;
    return fetch(url).then(value => {
        // fulfillment
        return value.json();
    }, reason => {
        // rejection
        console.log(reason);
    }).then(json => {
        return json;
    });
}


exports.callDarkSky = callDarkSky;
