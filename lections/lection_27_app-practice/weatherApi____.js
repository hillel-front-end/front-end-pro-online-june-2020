const fetch = require('node-fetch');

// OpenWeatherAPI -
const API_KEY = 'MY API'; // NON SECURE
const WEATHER_PATH_BASE = 'https://api.openweathermap.org/data/2.5';

const weatherCache = {};

class WeatherApi {
    fetchForecast5Days(city = '', cached = true) {
        if (weatherCache[city]) {
            if (Date.now() - weatherCache[city].timestamp <= 15000) {
                console.log(`City ${city} in cache still alive, data returns`);

                return Promise.resolve(JSON.parse(weatherCache[city].data));
            }
        }

        const queryObject = {
            ['units']: 'metric',
            'q': city,
            'appid': API_KEY
        };

        const queryArray = Object.keys(queryObject)
            .map((key) => `${key}=${queryObject[key]}`); //[units, q, appid]

        const queryString = queryArray.join('&');  //{key}={value}&{key2}={value2}

        // return fetch(`${WEATHER_PATH_BASE}/forecast?units=metric&q=${city}&appid=${API_KEY}`)
        return fetch(`${WEATHER_PATH_BASE}/forecast${queryString ? '?' + queryString : ''} `)
            .then(resp => resp.json())
            .then(data => {
                if (cached) {
                    weatherCache[city] = {
                        timestamp: Date.now(),
                        data: JSON.stringify(data)
                    };

                    // write to file

                    console.log(`City ${city} cached, timestamp: ${weatherCache[city].timestamp}`);
                }
                return data;
            });
    }
}

module.exports = {
    api: new WeatherApi(),
    someValue: 100
};


// setTimeout(() => {
//     module.exports.someValue = 200;
//
//     const test = require('./testModule');
// }, 100);