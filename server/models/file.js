var mysql = require('mysql');

const file = {
    insertImage: function(data, callback) {
        return res.locals.connection.query("INSERT INTO files VALUES (?)", function (error, results, fields) {
            if(error) throw error;
            res.send(JSON.stringify(results));
    }
}

file.statics.create  = function(subject){
    return file.save();
}

file.save = function() {
    return this.save();
};
module.exports = file;