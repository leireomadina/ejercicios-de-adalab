const express = require('express');
const cors = require('cors');

const server = express();

server.use(cors());
server.use(express.json());

const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

const staticServerPath = "./public";
server.use(express.static(staticServerPath));

server.get('/users', (req, res) => {
  const response = {
    users: [{ name: 'Sofía' }, { name: 'María' }]
  };
  res.json(response);
});

server.post('/new-user', (req, res) => {
  console.log(`Creating the user in database with user name: "${req.body.userName}"`);
  const response = {
    result: `User created: ${req.body.userName}`
  };
  res.json(response);
});