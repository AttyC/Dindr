import config from './config';
import express from 'express';
import apiRouter from './api';
const server = express();
server.use('/api', apiRouter);

server.get('/', (req, res)=>{
    res.send('hello');
})

server.listen(config.port, ()=>{
    console.log('Server listening on:', config.port);
});