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

    const languesDejaInclue = (array, langue) => {
        langue.forEach(element => {
            if (!array.includes(element)) {
                array.push(element)
            }
        })
    }

    for (let i = 0; i < pays.length; i++) {
        if (pays[i].continent.toLowerCase() === input)
            languesDejaInclue(langues, pays[i].langues_officielles)
    }
    const donnee = JSON.stringify(langues);
    res.send(donnee);

})

app.listen(PORT, () => console.log(`Écoute sur le port ${PORT}`))

