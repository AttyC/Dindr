import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserProfile from './UserProfile';

const UserPreview = (user) => {
  return(
    <div className="UserPreview">
    <div className="name"> <h2>{user.username} </h2></div>
    <div className="skills"> {user.skills} </div>
    <Router>
      <div>
        <Link to="/:username">Read more about {user.username}</Link>
        <Route path="/:username" component={() => (<UserProfile {...user} />)} />
      </div>
    </Router>
  </div>);

};

export default UserPreview;
