const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3005;

app.use(cors());

const pays = require("./pays.json").pays;

app.get("/pays", (_req, res) => {
  res.send(
    pays.map((element) => {
      return element;
    })
  );
});

app.get("/langues", (req, res) => {
  const input = req.query.continent.replace("+", " ");

  let langues = [];

  pays.forEach((elem) => {
    if (elem.continent.toLowerCase() === input.toLowerCase())
      elem.langues_officielles.forEach((langue) => {
        if (!langues.includes(langue)) langues.push(langue);
      });
  });

  res.send(langues);
});

app.listen(PORT, () => console.log(`Écoute sur le port ${PORT}`));
