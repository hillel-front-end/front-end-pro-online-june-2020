console.log('Web app started!')


let weatherSerive = null;

window.onload = function() {
    const dataTable = document.querySelector('#table-data-weather');

    document.querySelector('#getForecastData').addEventListener('click', () => {
        if (!weatherSerive) {
            weatherSerive = new WeatherService();
        }
        const filters = getWeatherFilters();
        const cityName = document.querySelector('#city').value;

        weatherSerive.fetchForecast5Days(cityName, filters).then(({list}) => {
            WeatherDataRenderer.renderAll(dataTable, list);
        })
    });
}


function getWeatherFilters() {
    let filters = [];

    document.querySelectorAll('.query-filter').forEach(filter => {
        if (filter.checked) {
            filters.push(filter.value);
        }
    });

    return filters.join(',');
}





class WeatherDataRenderer {
    static list = null;
    static target = null;

    static renderAll(target, list) {
        this.target = target;
        this.list = list;

        this.target.innerHTML = `${this.getTableHeader()}${this.getTableRows()}`;
    }

    static getTableHeader() {
        return `
            <tr>
                <th>Time</th>
                ${Object.keys(this.list[0].main).map(item => `<th>${item}</th>`).join('')}
            </tr>
        `;
    }

    static getTableRows() {
        return `${this.list.map((item) => {
            return `
                <tr>
                    <td>${item.dt_txt}</td>
                    ${Object.values(item.main).map(item => `<td>${item}</td>`).join('')}
                </tr>
            `;
        }).join('')}`;
    }
}





class WeatherService {
    #basePath = 'http://localhost:7070';
    fetchForecast5Days(city = '', filters = '') {
        return fetch(`${this.#basePath}/forecast/load/${city}${filters && `?filters=${filters}`}`).then(resp => resp.json());
    }
}