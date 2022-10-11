const express = require("express");
 const app  = express()
 
 app.get("/movies",(req,res) => {
    res.status(200).send("<h1>All Movie Data in JSON Format from Mongo DB</h1>");
 });


 app.get("/genres",(req,res) => {
    res.status(200).send("<h1>All Genres Data in JSON Format from Mongo DB</h1>");
 })

 app.get("/artists",(req,res) => {
    res.status(200).send("<h1>All Artists Data in JSON Format from Mongo DB</h1>");
 })
app.listen(9000,()=> {
  console.log("listening  on port 3000");
});
