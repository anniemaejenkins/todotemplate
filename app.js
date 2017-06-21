(function(){
  'use strict';

  const express = require('express');
  const mustacheExpress = require('mustache-express');
  const bodyParser = require('body-parser');
  const app = express();

  let todoList = ['wash car', 'vacuum'];
  let completedTodos = ['mopped'];

  app.engine('mustache', mustacheExpress());
  app.set('view engine', 'mustache');
  app.set('views', './views');

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));

  app.get('/', function(req, res){
    let idx = 0;
    let context = {
      todoList: todoList,
      completedTodos: completedTodos,
      id: function() {
        return idx++;
      }
     };
    res.render('index', context);
  });

  app.post('/', function(req, res){
    var todo = req.body.todo;
    todoList.push(todo);
    res.redirect('/');
  });

// /todo/{{id}}/complete/
  app.post('/todo/:id/complete/', function(req, res){
    var index = req.params.id;

    // remove that index from the todo list

    // add that index to the completed list

    res.redirect('/');
  });

  app.listen(3000);
})();
