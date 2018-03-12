import server from './server';
import config from './config';

server.listen(config.port, () =>{
  console.log('Server listening on:', config.port);
});
