var express =require('express');
const router = express.Router();
// const auth = require("../auth");
var mysql =require("mysql");

// app.use("/auth", auth);

router.get('/about', function(req, res, next) {
	const customers = [
		{id: 1, firstname: 'Sohee', lastname: 'Im'},
		{id: 2, firstname: 'So', lastname: 'Im'}
	]
	res.json(customers);
	// res.locals.connection.query('SELECT * from about', function (error, results, fields) {
	// 	if (error) throw error;
	// 	res.send(JSON.stringify(results));
	// });
});


module.exports = router;