const express = require("express");
const cors = require("cors");

// create server
const server = express();

// set express middleware
server.use(express.json());
server.use(cors());

// init express aplication
const serverPort = 3006;
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
  console.log("Body params:", req.body);
  console.log("Body param userName:", req.body.userName);
  console.log("Body param userEmail:", req.body.userEmail);

  // add new user to daba base
  users.push({
    name: req.body.userName,
    email: req.body.userEmail,
  });

  res.json({
    result: "User created",
  });
});

server.post("/users", (req, res) => {
  const bodyParamFilterName = req.body.filterByName;
  console.log("Body params filterByName:", bodyParamFilterName);
  console.log(bodyParamFilterName);
  const bodyParamFilterEmail = req.body.filterByEmail;
  console.log("Body params filterByEmail:", bodyParamFilterEmail);
  console.log(bodyParamFilterEmail);

  const filteredUsers = users.filter((user) =>
    user.name.toUpperCase().includes(bodyParamFilterName.toUpperCase()) &&
    user.email.toUpperCase().includes(bodyParamFilterEmail.toUpperCase())
  );

  res.json({
    result: filteredUsers,
  });
});
