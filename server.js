'use strict';
var mysql = require("mysql");
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var validation = require('./input_validation.js');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/', express.static('./public'));

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password:'P8r8gl1d1ng',
  database: 'secretprojects',
});

con.connect(function(err){
  if(err){
    console.log("JAAAAJ");
  } else {
  console.log("SIKERULT");
  };
});

app.get('/', function(req, res) {
   res.sendfile('./public/index.html');
 });

 app.post('/exam', function add(req, resp) {
  if (validation(req.body.feedback, req.body.scale, req.body.email)){
    con.query('SELECT project_name FROM projects', function(err,rows){
      if(err) {
        console.log(err.toString());
        return;
      } else {
        var projects = [];
        for (var i = 0; i < rows.length; i++){
          projects.push(rows[i].project_name);
        }
        resp.status(200).send({status: 'ok', projects: projects});
      }
    });
  } else {
    resp.status(400).send({status: 'error', text: 'thank you'});
  };
});


app.listen(3000);
