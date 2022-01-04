const express = require('express');
const mongooes = require('mongoose');
const routes = require('./routes');



mongooes.connect("mongodb://localhost:27017/posts", { useNewUrlParser: true }).then(()=>{
  
    console.log("connected");
    const app = express();



        app.use("/api", routes)

    app.listen(5000,()=>{
        console.log("server started");
    });
}

)