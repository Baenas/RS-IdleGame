
var express = require('express');
var router = express.Router();

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('mydb.db');


router.get("/enemy", (req, res, next) => {
    db.all("SELECT * FROM enemy", [], (err, row) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.status(200).json(row);
    });
});

router.get("/enemy/:id", (req, res, next) => {
    var params = [req.params.id]
    db.get(`SELECT * FROM enemy where name = ?`, [req.params.id], (err, row) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.status(200).json(row);
    });
});



module.exports = router;