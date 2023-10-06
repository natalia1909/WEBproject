/**
 * File: server.js
 * Name: Angie Sabogal
 * StudentID: 301269651
 * Date: 3/10/2023
 */

const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes'); 
app.use(express.static('public'));


app.set('view engine', 'ejs');

var port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log("Server started on port " + port);
  });

  app.use('/', routes);  // Use the router
  
  

