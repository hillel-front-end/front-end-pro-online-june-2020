const express = require('express')
const app = express()
const fs = require('fs');
const port = 7070;
const bodyParser = require('body-parser')

const weatherApi = require('./weatherApi');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
  res.send('Health check!')
});


app.get('/forecast/load/:city', (req, res) => {
    weatherApi.fetchForecast5Days(req.params.city)
        .then(data => {
          if (req.query.filters) {
            let dataFilterd = Object.assign({}, data);
            const filters = req.query.filters.split(',');

            dataFilterd.list = dataFilterd.list.map(item => {
              let mainStruct = {};
              filters.forEach(filter => {
                mainStruct[filter] = item.main[filter];
              }); 

              return {...item, main: mainStruct};
            });

            return dataFilterd;
          }

          return data;
        })
        .then(data => {
            res.json(data);
        })
})


app.listen(port, () => {
  console.log(`Weather app listening at http://localhost:${port}`)
})