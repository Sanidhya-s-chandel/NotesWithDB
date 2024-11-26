const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    
    fileName: String,
    description: String,
    data: String

},{timestamps: true});

const file = mongoose.model("file",fileSchema);
module.exports = file;