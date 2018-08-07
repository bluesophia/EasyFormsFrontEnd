var express = require('express');
var router = express.Router();
var validator = require('validator');
var isEmpty = require('lodash.isempty');

// router.post("/", function(req, res){
//     console.log(req.body);
// });

function validateInput(data){
    let errors= {};

    if(validator.isEmpty(data.username)) {
        errors.username = 'This field is required';
    }
    if(validator.isEmpty(data.email)) {
        errors.email = 'This field is required';
    }
    if(!validator.isEmail(data.email)){
        errors.email = 'Email is invald';
    }
    if(validator.isEmpty(data.password)) {
        errors.password = 'This field is required';
    }
    if(validator.isEmpty(data.passwordConfirmation)) {
        errors.passwordConfirmation = 'This field is required';
    }
    if(!validator.equals(data.password, data.passwordConfirmation)){
        errors.passwordConfirmation = 'Password must match';
    }
    return{
        errors,
        isValid: isEmpty(errors)
    }
}

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