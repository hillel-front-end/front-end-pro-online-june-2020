var http = require('http');
var static = require('node-static');
const url = require('url');
const fs = require('fs');

var Server = static.Server;
var file = new Server('.');
const port = 5674;
const USERS_FILE_PATH = './api/users.json';

const health = {
  users: 0,
  other: 0
};

http.createServer(function(req, res) {
  const queryObject = url.parse(req.url,true);
  console.log(queryObject.pathname);
  if (queryObject.pathname === '/users') {
    return usersCallback(req, res, queryObject);
  }

  if (queryObject.pathname === '/user/add') {
    return updateUserCallback(req, res, queryObject);
  }

  if (queryObject.pathname === '/user/remove') {
    return updateUserCallback(req, res, queryObject);
  }

  if (queryObject.pathname === '/health') {
    return healthCallback(req, res);
  }

  health.other++;
  file.serve(req, res);
}).listen(port);


console.log(`Server running on port ${port}`);






function updateUserCallback(req, res, queryObject) {
  req
    .on('data', (chunk) => {
      const users = fs.readFileSync(USERS_FILE_PATH, 'utf8');
      let userParsed = JSON.parse(users);
      const body = Buffer.concat([chunk]).toString();
      const bodyParsed = JSON.parse(body);

      if (queryObject.pathname === '/user/add') {
        if (!bodyParsed.userName) {
          return res.end('Failed');
        }
        let record = {
          id: userParsed.length + 1,
          name: bodyParsed.userName
        };
  
        userParsed.push(record);
      } else if (queryObject.pathname === '/user/remove'){
        if (!bodyParsed.userId) {
          return res.end('Failed');
        }
        const originalLength = userParsed.length;
        userParsed = userParsed.filter(user => user.id !== Number(bodyParsed.userId));

        if (userParsed.length === originalLength) {
          return res.end(`No user with id ${bodyParsed.userId}`);
        }
      }



      fs.writeFileSync(USERS_FILE_PATH, JSON.stringify(userParsed, null, '\t'));


      res.end('Success');
    });
}






function usersCallback(req, res, queryObject) {
  const id = queryObject.query['user-id'];
  const users = fs.readFileSync(USERS_FILE_PATH, 'utf8');

  if(queryObject.query['all'] !== undefined) {
    return res.end(users);
  }

  const userById = JSON.parse(users).find(user => user.id === Number(id));
  
  health.users++;
  res.end(JSON.stringify(userById));
}

function healthCallback(req, res) {
  res.end(JSON.stringify(health));
}