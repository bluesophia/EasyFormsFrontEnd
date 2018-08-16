var mysql = require('mysql');

//support
exports.support = (req, res) => {
    res.locals.connection.query('SELECT * FROM support', function(error, results, fields) {
        if(error) throw err;
        res.send(JSON.stringify(results));
    })
};

//support
exports.supportform = (req, res) => {
    res.locals.connection.query('INSERT INTO( company, name, email, message) supportform Values('+req.body.CompanyName+'',''+req.body.FullName+'',''+req.body.Email+'',''+req.body.Message+'")', function(error, results, fields) {
        if(error) throw err;
        res.send(JSON.stringify(results));
    })
};

