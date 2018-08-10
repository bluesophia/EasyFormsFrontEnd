var express = require('express');
var router = express.Router();


/* GET Home page. */
router.get('/', function(req, res, next) {
    res.locals.connection.query('select * from home', function (error, results, fields) {
      if(error) throw error;
	  res.send(JSON.stringify(results));
    });
  });
  
module.exports = router;