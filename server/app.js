const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3005

const pays = require("./pays.json").pays;

const listen = app.listen(PORT, () => console.log(`Écoute sur le port ${PORT}`))

const routePays = app.get('/pays', (_req, res) => {
    res.send(pays[80].capitale);
})

const routeLangue = app.get('/langue', (_req, res) => {
    res.send(pays[0].langues_officielles[1])
})

app.use(cors());

listen;
routePays;
routeLangue;