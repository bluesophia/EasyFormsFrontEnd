// /* GET Home page. */
// router.get('/', function(req, res, next) {
//     res.locals.connection.query('SELECT * FROM home', function (error, results, fields) {
//       if(error) throw error;
// 	  res.send(JSON.stringify(results));
//     });
//   });
// //features
// router.get('/features', function(req, res, next) {
//   res.locals.connection.query('SELECT * FROM features', function (error, results, fields) {
//     if(error) throw error;
//   res.send(JSON.stringify(results));
//   });
// });

// module.exports = router;

var mysql =require("mysql");
//main
exports.home = (req, res) => {
    res.locals.connection.query('SELECT * FROM home', function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
      })
    };

//features
exports.features = (req, res) => {
    res.locals.connection.query('SELECT * FROM features', function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
        })
    };

//clients
exports.clients = (req, res) => {
    res.locals.connection.query('SELECT * FROM clients', function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
        })
    };

//stories
exports.stories = (req, res) => {
    res.locals.connection.query('SELECT * FROM stories', function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
        })
    };