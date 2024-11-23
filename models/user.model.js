const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    fileName: {
        type: String,
        required: true,
        unique: true
    },

    description: {
        type: String,
        required: true
    },

    Data: {
        type : String,
        required: true
    }
},{timestamps: true});

const file = mongoose.model("file",fileSchema);
module.exports = file;