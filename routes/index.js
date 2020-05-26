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
	res.render("index", { title: "Express" });
});

router.post("/add", (req, res) => {
	console.log("body: ", req.body.chore);
	let task = req.body.chore;
	let chore = { time: new Date(), chore: task };
	console.log(chore);
	let sql = "INSERT INTO chores SET ?";
	db.query(sql, chore, (err, result) => {
		if (err) throw err;
		console.log(result);
		res.send(`${task} added`);
	});
});

module.exports = router;
