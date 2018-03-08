import config from './config';
import express from 'express';
import apiRouter from './api';
const server = express();
server.use('/api', apiRouter);
server.set('view engine', 'ejs');
server.use(express.static('public'));

server.get('/', (req, res)=>{
    res.render('index');
})
server.listen(config.port, ()=>{
    console.log('Server listening on:', config.port);
});