
const fetch = require('node-fetch');

// OpenWeatherAPI - https://openweathermap.org/guide
const API_KEY = 'MY API'; // NON SECURE
const WEATHER_PATH_BASE = 'https://api.openweathermap.org/data/2.5';




const weatherCache = {};


class WeatherApi {
    fetchForecast5Days(city = '', cached = true) {
        if (weatherCache[city]) {
            if (Date.now() - weatherCache[city].timestamp <= 15000){
                console.log(`City ${city} in cache still alive, data returns`);

                return Promise.resolve(JSON.parse(weatherCache[city].data));
            }
        }


        return fetch(`${WEATHER_PATH_BASE}/forecast?units=metric&q=${city}&appid=${API_KEY}`)
            .then(resp => resp.json())
            .then(data => {
                if (cached) {
                    weatherCache[city] = {
                        timestamp: Date.now(),
                        data: JSON.stringify(data)
                    };

                    // write to file

                    console.log(`City ${city} cached, timestamp: ${weatherCache[city].timestamp}`)
                }
                return data;
            });
    }
}


module.exports = new WeatherApi();