// import WeatherDataRendererModules, {WeatherDataRenderer_notDefault, SOME_VALUE} from './WeatherDataRenderer.js';
import * as WeatherDataRendererModules from './WeatherDataRenderer.js';
// import getWeatherFilters from './getWeatherFilters.js';

import './noExport.js';

console.log('Web app started!');

let weatherSerive = null;

window.onload = function () {
    const dataTable = document.querySelector('#table-data-weather');

    // import WeatherDataRendererModules from './WeatherDataRenderer.js';//ERROR

    document.querySelector('#getForecastData').addEventListener('click', () => {
        if (!weatherSerive) {
            weatherSerive = new WeatherService();
        }

        import('./getWeatherFilters.js').then(({ default: getWeatherFilters, NEW_VALUE }) => {
            const filters = getWeatherFilters();
            console.log('NEW_VALUE', NEW_VALUE);

            const cityName = document.querySelector('#city').value;

            weatherSerive.fetchForecast5Days(cityName, filters).then(({ list }) => {
                WeatherDataRendererModules.WeatherDataRenderer_notDefault.renderAll(dataTable, list);
            });
        });

    });
};

class WeatherService {
    #basePath = 'http://localhost:7070';

    fetchForecast5Days(city = '', filters = '') {
        return fetch(`${this.#basePath}/forecast/load/${city}${filters && `?filters=${filters}`}`).then(resp => resp.json());
    }
}