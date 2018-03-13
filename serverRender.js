import axios from 'axios';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/components/App';

const serverRender = () => 
  axios.get('http://localhost:3001/api/users')
    .then(res => {
      console.log(res.data);
      return ReactDOMServer.renderToString(<App initialMessage={res.data.users} />);
    });


export default serverRender;
