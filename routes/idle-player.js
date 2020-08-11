
var express = require('express');
var router = express.Router();

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('mydb.db');


router.get("/player", (req, res, next) => {
    db.all("SELECT * FROM players", [], (err, row) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.status(200).json(row);
    });
});
router.get("/player/:name", (req, res, next) => {
    var params = req.params.name
    db.all(`SELECT * FROM players where Player = ?`, req.params.name, (err, row) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.status(200).json(row);
    });
});

router.post("/player", (req, res, next) => {
    console.log(req.body)
    db.all(`Insert Into  players (Player, Recurso , Valor) Values(?,?,?) `, [req.body.Player, req.body.Recurso, req.body.Valor], (err, row) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.status(200).json(row);
    });
});
router.patch("/player", (req, res, next) => {
    console.log(req.body)
    db.run(`Update  players Set Valor = ? Where Player is ?  AND Recurso is ? `, [req.body.Valor, req.body.Player, req.body.Recurso], (err, row) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.status(200).json(row);
    });
});

module.exports = router;