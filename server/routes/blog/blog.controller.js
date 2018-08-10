var mysql = require('mysql');

//main
exports.blog = (req, res) => {
    res.locals.connection.query('SELECT * FROM blogCategory', function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
      })
    };

