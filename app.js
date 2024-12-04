const express = require("express");
const app = express();
const fileModel  = require("./models/user.model")

require("./config/db.config");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req,res)=>{

    const files = await fileModel.find(); 

    res.render("index",{files});
});

app.get("/new",(req,res)=>{
    res.render("new");
});

app.post("/new",async function(req,res){
    const {fileName,description,data} = req.body;

    const newFile = await fileModel.create({
        fileName: fileName,
        description: description,
        data: data,
    });

    // console.log(newFile);
    res.redirect("/");
});

app.get("/view/:fileName", async (req,res)=>{
    let file = await fileModel.findOne({fileName : req.params.fileName});
    res.render("vieww",{file});
});

app.get("/delete/:id", async (req,res)=>{
    await fileModel.findOneAndDelete({_id : req.params.id});
    // console.log(req.params)
    res.redirect("/");
}); 

app.get("/update/:id", async (req,res)=>{
   
    let file = await fileModel.findOne({_id : req.params.id})
    res.render("update",{file});

});

app.post("/update/:id", async (req,res)=>{

   const {fileName,description,data} = req.body;
   
   let result = await fileModel.updateOne(

    {_id : req.params.id},
    {$set: {fileName,description,data}});

   if (result.modifiedCount > 0){
    res.redirect("/");
   } else  {
    res.status(400).send("No changes were made to the file");}

});

app.listen(3000,()=>{
    console.log("The Server is running at Port: 3000");
});