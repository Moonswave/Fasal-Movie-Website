// server.js
const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

const tempelatePath=path.join(__dirname,'../tempelates')

app.use(express.json())
app.set("view engine","hbs")
app.set("views", tempelatePath)

app.get("/login",(req, res)=>{
    res.render("login")
})

app.get("/login",(req, res)=>{
    res.render("login")
})

app.listen(3000, () => {
  console.log("Server is running on port");
})
