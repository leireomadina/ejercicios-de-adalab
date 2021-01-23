const express = require("express");
const cors = require("cors");

// create server
const server = express();

// set express middleware
server.use(express.json());
server.use(cors());

// init express aplication
const serverPort = 3500;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// static server
const staticServerPath = "./public";
server.use(express.static(staticServerPath));

// users

const users = []; // fake users data base
console.log(users);

// api endpoints

server.post("/user", (req, res) => {
  console.log("Query params:", req.query);
  console.log("Query param userName:", req.query.userName);
  console.log("Query param userEmail:", req.query.userEmail);

  // add new user to daba base
  users.push({
    name: req.query.userName,
    email: req.query.userEmail,
  });

  res.json({
    result: "User created",
  });
});

server.get("/users", (req, res) => {
  const queryParamFilterName = req.query.filterByName;
  console.log('Query params filterByName:', queryParamFilterName);
  console.log(queryParamFilterName);

  const filteredUsers = users.filter((user) =>
    user.name.toUpperCase().includes(queryParamFilterName.toUpperCase())
  );

  res.json({
    result: filteredUsers,
  });
});
