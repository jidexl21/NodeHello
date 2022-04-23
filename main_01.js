/***
 * This example shows how to create a rest API listing courses
 * This example trquires that you install express
 * to instal lexpress run the command `npm install express`
 */
const express = require("express"); 
const app = express();

app.get("/", (res, req) =>{
    req.send("Hello World");
})


app.get("/api/courses",(res,req)=>{
    res.send([1,2,3,4])
}); 

app.listen(3000,() => {  
    console.log("Listening on port 3000");
 })