/***
 * This example shows how  to add to a list of courses
 * 
 *  */
 const express = require("express"); 
 const app = express();
 /***
  * The line below  musst be added to allow the server read your JSON reqests
  */
 app.use(express.json());
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

 /** This is the new code */
 app.post("/api/courses", (req, res) =>{
      if(!req.body.name || req.body.name.length <3) {
         throw ("Invalid request");
     }
     var course = {
         id : courses.length +1, 
         name : req.body.name,
         code : req.body.code, 
         hours: req.body.hours
     }; 
     courses.push(course); 
     res.send(course);
 })
 /** This is the new code ends */
 app.get("/", (req, res) =>{
     res.send("Hello World");
 })
 
 
 app.get("/api/courses",(req,res)=>{
     res.send(courses)
 }); 
  
 app.get("/api/courses/:id",(req,res)=>{
    var id = req.params.id;
    var result = courses.filter(x=>x.id == id)
    res.send(result)
}); 

 app.listen(3000,() => {  
     console.log("Listening on port 3000");
  })