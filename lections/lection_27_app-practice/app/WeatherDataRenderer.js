console.log('HI');


export const SOME_VALUE = 1000;

export class WeatherDataRenderer_notDefault {
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

// export default WeatherDataRenderer;