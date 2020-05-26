var express = require("express");
var router = express.Router();

const mysql = require("mysql");

// Setup mysql

const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "password",
	database: "chores",
});

db.connect((err) => {
	if (err) throw err;
	console.log("Mysql connected");
});

/* GET home page. */
router.get("/", function (req, res, next) {
	let sql = "SELECT * FROM chores";
	db.query(sql, (err, results) => {
		if (err) throw err;
		console.log(results);
		res.render("index", { choresList: results });
	});
});

// Add a chore

router.post("/add", (req, res) => {
	console.log("body: ", req.body.chore);
	let task = req.body.chore;
	let chore = { time: new Date(), chore: task };
	console.log(chore);
	let sql = "INSERT INTO chores SET ?";
	db.query(sql, chore, (err, result) => {
		if (err) throw err;
		console.log(result);
		res.send(`Chore ${task} added `);
	});
});

// Delete a chore
router.get("/delete/:id", (req, res) => {
	let sql = `DELETE FROM chores WHERE id=${req.params.id}`;
	db.query(sql, (err, results) => {
		if (err) throw err;
		console.log(results);
		res.send("Chore deleted");
	});
});

module.exports = router;
