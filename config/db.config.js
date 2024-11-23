const mongoose = require("mongoose");

async function connetDB(){
   await mongoose.connect("mongodb://127.0.0.1:27017/filesSystem");
   console.log("connected to mongoDB.");
};

connetDB();

module.export = mongoose.connection;