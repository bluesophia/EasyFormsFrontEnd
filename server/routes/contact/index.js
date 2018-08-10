var express =require('express');
const router = express.Router();
var mysql =require("mysql");

router.get('/', function(req, res, next) {
	res.locals.connection.query('SELECT * from contact', function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify(results));
	});
});


module.exports = router;