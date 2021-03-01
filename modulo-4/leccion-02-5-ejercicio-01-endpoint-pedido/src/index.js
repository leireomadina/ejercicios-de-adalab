const express = require("express");
const cors = require("cors");
const users = require("./data.json");

// create app server
const app = express();

// set express middleware
app.use(express.json());
app.use(cors());

// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

// api endpoints
app.get("/users/all", (req, res) => {
  res.json(users);
});

app.get("/users/:userId/orders/:orderId", (req, res) => {
  console.log("Url params:", req.params);
  console.log("Url param userId:", req.params.userId);
  console.log("Url param orderId:", req.params.orderId);

  const user = users.find(
    (user) =>
      user.userId === parseInt(req.params.userId) &&
      user.orderId === parseInt(req.params.orderId)
  );
  console.log(user);
  
  if (user === undefined) {
    return res.json({ error: "Not found" });
  } else {
    return res.json(user);
  }
});
