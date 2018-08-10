var mysql = require('mysql');

//support
exports.support = (req, res) => {
    res.locals.connection.query('SELECT * FROM support', function(error, results, fields) {
        if(error) throw err;
        res.send(JSON.stringify(results));
    })
};

// exports.support = (req, res) => {
//     res.locals.connection.query('INSERT INTO support (companyname, yourname, email, content, img)form VALUES ("'+req.body.companyname+'", "'+req.body.yourname+'", "'+req.body.email+'", "'+req.body.content+'", "'+req.body.img+'")', function(error, results, fields) {
//         if(error) throw err;
//         res.send(JSON.stringify(results));
//     })
// };

