const express = require('express');
const app = express();


app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3000, function(){
  console.log('example app on port 3000');
});

app.get('/search', function(req, res){
  console.log(req.query.name)
});

app.get('/weather/:zipcode', function(req, res){
  console.log("getting weather for " + req.params.zipcode);
})
