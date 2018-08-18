const config = require('../../config');
const File = require('../../models/file');

exports.save = (req, res) => {
    if(!req.files) {
        console.log("No file received");
        return res.send({
            success: false
        });
    } else {
        const {subject} = req.params;
        const create = files => {
            console.log("save", files.length);
            if(files.length > 0) {
                console.log("update", req.files);
                return File.update(req.files);
            } else {
                req.files.map = (file) => {
                    console.log("file info", file);
                    let info = file.filename.split("_");
                    return File.create(subject, fileOriginal)
                };
            }
        }
    }
}




