import config from './config';
import express from 'express';
import apiRouter from './api';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
var url = process.env.MONGOLAB_URI

const server = express();
server.use(bodyParser.urlencoded({ extended: false }));
server.use('/api', apiRouter);
server.set('view engine', 'ejs');

server.get('/', (req, res)=>{
    res.render('index', {
        content: 'Hello Partials!!'
    });
})
server.use(express.static('public'));

server.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

mongoose.connect(url, function (err, db){
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err );
  } else {
    console.log('Connect established to', url)
  }
});

server.listen(config.port, ()=>{
    console.log('Server listening on:', config.port);
});

module.exports = server;
