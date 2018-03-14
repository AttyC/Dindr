import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import Home from './components/Home';
import App from './components/App';
import Users from './components/Users';

const Routing = () => (
    <Router>
      <div>
        <ul className="container nav">
          <li>
            <Link to="/" className ='logo'></Link>
          </li>
          <li>
            <Link to="/users">Find Developers</Link>
          </li>
          <li>
            <Link to="/users/new">Add a Developer</Link>
          </li>
        </ul>
        <Route exact path="/users/new" component={App} />
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={Users} />
      </div>
    </Router>
  );

ReactDOM.render(
      <Routing />,
    document.getElementById('root')
);
