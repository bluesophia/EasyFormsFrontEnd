var express = require('express');
var router = express.Router();
var validateInput = require('../../shared/validations/signup')

// router.post("/", function(req, res){
//     console.log(req.body);
// });



router.post("/", function(req, res){
        // const { errors } = validateInput(req.body);
        
        // if(!isValid) {
        //     res.status(400).json(errors);
        // }
        res.locals.connection.query('insert into users(name, email, password) values("'+req.body.username+'", "'+req.body.email+'", "'+req.body.password+'" '), function (error, results, fields) {
            if(error) throw error;
            res.send(JSON.stringify(results));
        });
});
//router.post("/login", controller.login);

module.exports = router;