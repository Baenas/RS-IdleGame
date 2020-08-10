
var express = require('express');
var router = express.Router();

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('mydb.db');


router.get("/items", (req, res, next) => {
    db.all("SELECT * FROM items", [], (err, row) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.status(200).json(row);
    });
});

router.get("/items/:id", (req, res, next) => {
    var params = [req.params.id]
    db.get(`SELECT * FROM items where name = ?`, [req.params.id], (err, row) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.status(200).json(row);
    });
});

// router.get('/items/:name', (res, req) => {

//     const name = req.params.name;

//     db.all(`SELECT * FROM items Where name = ${name}`, (err, rows) => {
//         if (err) {
//             res.status(400).json({ "error": err.message });
//             return;
//         }
//         res.status(200).json({ rows });
//     });

//     // pool.query('SELECT * FROM idle_items WHERE nombre = ?', name, (error, result) => {
//     //     if (error) throw error;

//     //     response.send(result);
//     // });
// });


module.exports = router;