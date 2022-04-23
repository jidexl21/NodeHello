/***
 * This example shows how  to use an array to return a list of courses
 * 
 *  */
 const express = require("express"); 
 const app = express();
 var courses = [
     { 
        id:1,
        code:"J101",
        name : "Javascript 101",
        hours: 30,
    },
    { 
        id:2,
        code:"H101",
        name: "HTML5",
        hours: 15
    }
 ];

 
 app.get("/", (req, res) =>{
     res.send("Hello World");
 })
 
 
 app.get("/api/courses",(req,res)=>{
     res.send(courses)
 }); 
 
 app.listen(3000,() => {  
     console.log("Listening on port 3000");
  })