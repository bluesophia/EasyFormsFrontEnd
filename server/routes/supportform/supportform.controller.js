var mysql = require('mysql');

// //support
// exports.supportform = (req, res, data) => {
    //데이터 객체화
//     var data = { company:CompanyName, name:FullName, email:Email, message:Message } = req.body;
//     console.log(data);
//     res.locals.connection.query("INSERT INTO supportform (`company`, `name`, `email`, `message`)set ?", data, function(error, results, fields) {
//         // res.locals.connection.release();
//         // console.log('실행대상 sql:' + exec.sql);
//         if(error) throw error;
//         res.send(JSON.stringify(results));
//     })
// };

//support
exports.supportform = (req, res, data) => {
    var data = { company:CompanyName, name:FullName, email:Email, message:Message } = req.body;
    console.log(data);
    res.locals.connection.query("INSERT INTO supportform SET ?", data, function(error, results, fields) {
        // res.locals.connection.release();
        // console.log('실행대상 sql:' + exec.sql);
        if(error) throw error;
        res.send(JSON.stringify(results));
    })
};