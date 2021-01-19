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

server.post('/users', (req, res) => {
  const response = {
    users: [{ name: 'Sofía' }, { name: 'María' }]
  };
  res.json(response);
});

// tenemos que modificar el endpoint del fetch de main.js para que coincidan
server.post('/users/add', (req, res) => {
  console.log(`Creating the user in database with user name: "${req.body.userName}"`);
  const response = {
    result: `User created: ${req.body.userName}`
  };
  res.json(response);
});