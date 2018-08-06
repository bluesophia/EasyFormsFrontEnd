var express = require('express');
var router = express.Router();


/* GET blog page. */
router.get('/', function(req, res, next) {
    res.locals.connection.query('select * from blogCategory, blogQuestions', function (error, results, fields) {
      if(error) throw error;
      res.send(JSON.stringify(results));
    });
  });
  
module.exports = router;