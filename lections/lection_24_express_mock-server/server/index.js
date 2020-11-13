const express = require('express')
const app = express()
const fs = require('fs');
const port = 7070;
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: "application/json" }));
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.get('/', (req, res) => {
  res.send('Health check!')
});

// app.get('/goods', (req, res, next) => {
//     if (req.query.type) {
//         console.log(`Request with filter: ${JSON.stringify(req.query)}`);
//     }

//     if (false) { 
//         res.send(`all bad`) 
//     }
//     next();
// });

// app.get('/goods', (req, res) => {
//     res.send(`All goods 2! - But filter - ${JSON.stringify(req.query)}`) 
// });

// ----------------------------------------------------------------

// const CART_PATH = __dirname + '/mock-api/cart.json';

// app.route('/goods/microwave')
//     .get((req, res) => {
//         res.send(__dirname + '/microwave/index.html')
//     })

app.get('/microwave/config', (req, res) => {

    req.query.params // { age: 10, name: 'Vasya' }
    const body = {
        filters: [
            'width',
            'height'
        ]
    };
    
    res.json(body);
});


app.route('/cart')
    .get((req, res, next) => {
        console.log('GET GET GET');
        next();
    })
    .all((req, res) => {
        fs.readFile(CART_PATH, 'utf8', (error, data) => {
            const parsed = JSON.parse(data);
            res.json(parsed[req.method]);
        })
    })
    .get((req, res) => {

        fs.readFile(CART_PATH, 'utf8', (error, data) => {
            const parsed = JSON.parse(data);
            res.json(parsed[req.method]);
        })

        // res.send(`GET - response`) 
    })
    .post((req, res) => {
        res.send(`POST - response`) 
    });


// ----------------------------------------------------------------

// Logging
const date = new Date();
const dateFileName = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}_${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

const fileName = `${__dirname}/logs/log_${dateFileName}.txt`;

fs.writeFile(fileName, '', function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
}); 



const MOCK_API_PATH = __dirname + '/api_v2';

app.route('*')
    .all((req, res, next) => {
        const content = `${new Date(Date.now())} Method:${req.method} Body:${JSON.stringify(req.body)} Query:${JSON.stringify(req.query)}`;
        fs.appendFile(fileName, `${content}\n`, (err) => {
            if (err) {
              console.error(err)
              return
            }
          })
        next();
    })
    .all((req, res) => {
        const filePath = `${MOCK_API_PATH}${req.path}/${req.method.toLowerCase()}.json`;
        fs.readFile(filePath, 'utf8', (error, data) => {
            if(error) {
                res.send(error.message);
            } else {
                res.json(JSON.parse(data));
            }
        })
        
    })



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})