const express =require ("express");

const db=require("./app/models/index")

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
    
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
 

const app=express();

require("./app/routes/movie.routes")(app);
require("./app/routes/artist.routes")(app);
require("./app/routes/genre.routes")(app);

const port=9000;

    app.get("/", (req, res) => {
      res.json({ message: "Welcome to Upgrad Movie booking application development." });
    });

    app.get("/movies",(req,res)=>{
      res.status(200).send("All Movies Data in JSON format from Mongo DB");
    })

    app.get("/genres",(req,res)=>{
        res.status(200).send("All Genres Data in JSON format from Mongo DB");
    })
    
    app.get("/artists",(req,res)=>{
        res.status(200).send("All Artists Data in JSON format from Mongo DB");
    })

app.listen(port,()=>{
 console.log("server started");
})