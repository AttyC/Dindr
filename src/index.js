import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Users from './components/Users';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Routing = () => (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
  
        <hr />
  
        <Route exact path="/" component={App} />
        <Route exact path="/users" component={Users} />
      </div>
    </Router>
  );
  

ReactDOM.render(
      <Routing />,
    document.getElementById('root')
);
