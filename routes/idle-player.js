
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

module.exports = router;