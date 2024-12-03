const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3005

app.use(cors());

const pays = require("./pays.json").pays;

app.get('/pays', (req, res) => {
    res.send(pays.map(element => {return element}));
})

app.get('/langue', (req, res) => {
    const input = req.query.continent.replace('+', ' '); 

    let langues = [];

    pays.forEach(elem => {
        if(!langues.includes(...elem.langues_officielles) && elem.continent.toLowerCase() === input.toLowerCase())
            langues.push(...elem.langues_officielles)
    })

    res.send(langues);

})

app.listen(PORT, () => console.log(`Écoute sur le port ${PORT}`))

