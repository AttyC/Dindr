import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Users from './components/Users';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const BasicExample = () => (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
  
        <hr />
  
        <Route exact path="/" component={App} />
        <Route exact path="/users" component={Users} />
      </div>
    </Router>
  );
  

ReactDOM.render(
      <BasicExample />,
    document.getElementById('root')
);
