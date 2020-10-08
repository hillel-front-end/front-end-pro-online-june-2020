export default function getWeatherFilters() {
    let filters = [];

    document.querySelectorAll('.query-filter').forEach(filter => {
        if (filter.checked) {
            filters.push(filter.value);
        }
    });

    return filters.join(',');
};

export const NEW_VALUE = 1000;