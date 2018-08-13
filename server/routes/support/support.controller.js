var mysql = require('mysql');

//support
exports.support = (req, res) => {
    res.locals.connection.query('SELECT * FROM support', function(error, results, fields) {
        if(error) throw err;
        res.send(JSON.stringify(results));
    })
};

