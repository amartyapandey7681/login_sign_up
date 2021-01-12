var express= require("express");
var bp= require("body-parser");
var jwt=require("jsonwebtoken");
var Promise=require("bluebird");
var app= Promise.promisify(express());
var port=3000;

let mysql= require("mysql");

var connect = mysql.createConnection({

  host: 'localhost',
  user: 'amartya',
  password:'amartya123@',
  database:'names'
});

//post request of signup page
app.use(bp.urlencoded({extended : true}));
app.post('/signinn').then(function(req,res){

   console.log("post request");
   
  }).then(connect.connect(function(error){
    
    if(error)throw error;
    console.log("connected");
    let h= req.body.name;
    let p=req.body.password;
    function encode(h,p){

        const header=base64UrlEncode(JSON.stringify(h));
        const header=base64UrlEncode(JSON.stringify(p));
        return '${header}.${payload}';
    }

    let id = function(h,p)
    var  sql= 'INSERT INTO new_table(id) VALUES (100)';
    connect.query(sql,function(err,result){
      if(err)throw err;
      console.log(id);
    });
    })).catch(message){
        console.log("error");
    }


//post request of the login page
app.use(bp.urlencoded({extended : true}));
app.post('/loginn',function(req,res){

  var password = request.body.password;
  if (password) {
// check if user exists
      connect.query('SELECT * FROM users WHERE id = ?', [password], function(error, results, fields) {
          if (results.length > 0) {
              response.send('logged in successfully');
          } else {
              response.send('Incorrect Username and/or Password!');
          }           
      
      });
  } 

    
});

app.listen(port);
