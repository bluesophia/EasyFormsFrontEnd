var express = require('express');
var router = express.Router();


/* GET about page. */
router.get('/', function(req, res, next) {
    res.locals.connection.query('SELECT * FROM about', function (error, results, fields) {
      if(error) throw error;
      res.send(JSON.stringify(results));
    });
  });
  
module.exports = router;