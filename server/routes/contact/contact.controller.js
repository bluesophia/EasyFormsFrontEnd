var mysql =require("mysql");

//contact
exports.contact = (req, res) => {
    res.locals.connection.query('SELECT * FROM contact', function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
      })
    };



