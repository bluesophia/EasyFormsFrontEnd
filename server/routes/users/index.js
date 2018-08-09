var express = require('express');
var router = express.Router();
var validateInput = require('../../../src/shared/validations/signup')

// router.post("/", function(req, res){
//     console.log(req.body);
// });



router.post("/", function(req, res){
    
    setTimeout(() => {
        const { errors , isValid } = validateInput(req.body);
        
        if(!isValid) {
            res.status(400).json(errors);
        }
    },1000)
    
});
//router.post("/login", controller.login);

module.exports = router;