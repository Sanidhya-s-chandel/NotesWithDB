const express = require("express");
const app = express();
const fileSchema  = require("./models/user.model")

require("./config/db.config")
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/new",(req,res)=>{
    res.render("new");
});

app.post("/new",async function(req,res){
    const {fileName,Description,Data} = req.body;

    const newFile = await fileSchema.create({
        fileName,Description,Data
    });

    console.log(newFile);
    res.redirect("/");
});

app.listen(3000,()=>{
    console.log("The Server is running at Port: 3000");
});