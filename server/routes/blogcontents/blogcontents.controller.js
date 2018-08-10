var mysql = require('mysql');


//blogcontents
exports.blogcontents = (req, res) => {
    res.locals.connection.query('SELECT * FROM blogQuestions', function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
      })
    };