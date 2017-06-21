const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


console.log("Hello Annie");


const app = express();
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));




app.get('/', function(re, res){
  res.render('index', {});
});

app.post('/', function(req, res){
  console.log(req.body);
  console.log("hey i was posted to");
  res.render('index', req.body);
});

app.listen(3000);
