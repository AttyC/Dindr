import config from './config';
import express from 'express';
const server = express();

server.get('/', (req, res)=>{
    res.send('hello');
})

server.listen(config.port);