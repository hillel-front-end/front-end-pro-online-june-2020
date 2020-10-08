const express = require('express');
const app = express();
const port = 7070;
const bodyParser = require('body-parser');

const weatherApi = require('./weatherApi____');

const file = require('./file.json');

console.log('file', file);

console.log(weatherApi);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/', (req, res) => {
    res.send('Health check!');
});

app.get('/forecast/load/:city', (req, res) => {
    weatherApi.api.fetchForecast5Days(req.params.city)
        .then(data => {
            if (req.query.filters) {
                let dataFilterd = Object.assign({}, data);
                const filters = req.query.filters.split(',');

                dataFilterd.list = dataFilterd.list.map(item => {
                    let mainStruct = {};

                    filters.forEach(filter => {
                        mainStruct[filter] = item.main[filter];
                    });

                    return { ...item, main: mainStruct };
                });

                return dataFilterd;
            }

            return data;
        })
        .then(data => {
            res.json(data);
        });
});

for (var i = 0; i < 5; i++) {
    (function (nomToShow) {
        setTimeout(function () {
            console.log(nomToShow);
        }, 0);
    })(i);
}

// console.log(i === 5);//true

console.log(i);
console.log(i);
console.log(i);
console.log(i);
console.log(i);

(function (nomToShow) {
    setTimeout(function () {
        console.log(nomToShow);
    }, 0);
})(100);

const object = {
    a: 10,
    b: 20
};

const object2 = object;

object2.b = 100;

function f(newObj) {
    newObj.b = 200;

    return newObj;
}

const object3 = f(object2);

console.log(object.b);   //20   20  200
console.log(object2.b);  //100  20  200
console.log(object3.b);  //200  20  200

const value = 100 || 20;        //100       true        100
const value2 = 100 && 20;       //20        true        20
const value3 = true && 1 && 30; //30        true        30
const value4 = false || 40;     //false     40          40
const value5 = true || 50;      //true      50          true
const value6 = 0 || 50;         //          false       50
const value7 = 0 && 50;         //          false       0

//HTTP
//Headers
//CORS
//Cookies
//JSONP


//0
//1
//2
//3
//4
/////////////////
//undefined x5
/////////////////

//5x5


app.listen(port, () => {
    console.log(`Weather app listening at http://localhost:${port}`);
});