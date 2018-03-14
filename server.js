import config from './config';
import express from 'express';
import apiRouter from './api';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import profile from './api/profile';
import users from './api/users';

var getUrl = function(){
  if (process.env.NODE_ENV == 'test') {
    return process.env.MONGOLAB_URI_TEST;
  } else {
    return process.env.MONGOLAB_URI;
  }
};

const server = express();
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use('/api', apiRouter);
server.use('/api/profile', profile);
server.use('/api/users', users);
server.set('view engine', 'ejs');

server.get('/', (req, res)=>{
  res.render('index', {
    content: 'Hello Partials!!'
  });
});

server.get('/users', (req, res)=>{
  res.render('index', {
    content: 'Hello Partials!!'
  });
});

server.get('/users/new', (req, res)=>{
  res.render('index', {
    content: 'Hello Partials!!'
  });
});

server.use(express.static('public'));

server.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

mongoose.connect(getUrl(), function (err, db){
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err );
  } else {
    console.log('Connect established to', getUrl());
  }
});

module.exports = server;
