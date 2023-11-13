'use strict'

const express = require("express");
require('dotenv').config(); 
const {SERVER_PORT} = require('./constants/Constants')
const apiRoutes = require("./routes/Routes")
const path = require('path')

const bodyParser = require('body-parser')

const app = express(); 

app.use(bodyParser.json())



app.use('/', express.static(path.join(__dirname,'paywithnkolo/build')))

app.use('/paywithnkolo', express.static(path.join(__dirname,'paywithnkolo/build')))
 
app.use('/paywithnkolo/:shopid/invoice', express.static(path.join(__dirname,'paywithnkolo/build')))

app.get("/paywithnkolo/:shopid/invoice",(req,res)=>{
     const shopId = req.params.shopid; 
     const invoiceNumber = req.query.invoice 
})

app.get("/", (req,res)=>{
    res.render("landing page",express.static(path.join(__dirname,'paywithnkolo/build')))
})





app.listen(SERVER_PORT, ()=>{
    console.log("App is listening on port: "+SERVER_PORT);  
    console.log(path.join(__dirname,'paywithnkolo/build'))
}); 