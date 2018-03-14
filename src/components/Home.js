import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from './App';
import Users from './Users';

export default class Home extends Component {
  render() {
    return (
      <div className="Home container">
        <div className="jumbotron">
          <img className='home-image network' src='/img/thinking.png' />
          <h1 className="logo"></h1>
          <h3>Find local developers with the skills you need</h3>
          <img className='home-image rocket' src='/img/thinking-rocket.png' />
        </div>
      </div>
    );
  }
}
