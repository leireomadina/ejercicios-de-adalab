const express = require("express");
const cors = require("cors");
const data = require("./data.json");

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
app.get("/characters/:characterId", (req, res) => {
  const characterFound = data.results.find(
    (character) => character.id === parseInt(req.params.characterId)
  );

  if (characterFound === undefined) {
    return res.json({ error: "Character not found" });
  } else {
    return res.json(characterFound);
  }
});

app.get("/characters/:characterId/episodes", (req, res) => {
  const characterFound = data.results.find(
    (character) => character.id === parseInt(req.params.characterId)
  );
  
  if (characterFound === undefined) {
    return res.json({ error: "Episodes not found" });
  } else {
    return res.json(characterFound.episode);
  }
});
