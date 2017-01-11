'use strict';
var mysql = require("mysql");
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/', express.static('./public'));

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password:'P8r8gl1d1ng',
//   database: 'app',
// });
//
// con.connect(function(err){
//   if(err){
//     console.log("JAAAAJ");
//   } else {
//   console.log("SIKERULT");
//   };
// });

app.get('/', function(req, res) {
   res.sendfile('./public/index.html');
 });


app.listen(3000);
