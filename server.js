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

 decoder.post('/exam', function add(req, resp) {
  if (req.body.feedback !== '' && req.body.scale !== '' && req.body.email !== ''){
    if ( req.body.shift > -1 && req.body.shift < 11 ) {
      con.query('INSERT INTO texts SET ?', [{decoded: decode(req.body.text, req.body.shift)}], function(err,res){
        resp.status(200).send({status: 'ok', projects: decode(req.body.text, req.body.shift)});
      });
    } else {
      resp.status(400).send({status: 'error', text: 'thank you'});
    };
  } else {
    resp.status(400).send({status: 'error', text: 'thank you'});
  }
});


app.listen(3000);
