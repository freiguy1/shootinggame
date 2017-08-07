const express = require('express');
const _ = require('lodash');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname + '/views');
app.set('view engine', 'hbs');

app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.render('index.hbs');
});









app.listen(3000, function() {
  console.log('running!');
});
