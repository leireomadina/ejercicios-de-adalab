const express = require("express");
const cors = require("cors");

// create server
const server = express();

// set express middleware
server.use(express.json());
server.use(cors());

// init express aplication
const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// static server
const staticServerPath = "./public";
server.use(express.static(staticServerPath));

// api endpoints

server.post("/user", (req, res) => {
  console.log("Header param booleano", req.header("soyUnBooleano")); // 'true'
  console.log("Header param objeto", req.header("soyUnObjeto")); // [object Object]
  console.log("Header param string", req.header("soyUnString")); // 'Hola'
  console.log("Header param array", req.header("soyUnArray")); //  'Hello,13'
  console.log("Header param user-agent:", req.header("user-agent"));
  // Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36
  console.log("Todos los header params:", req.headers);

  res.json({
    result: "User created",
  });
});
