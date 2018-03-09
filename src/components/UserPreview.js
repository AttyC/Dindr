import React from 'react';

const UserPreview = (user) => {
  console.log(user)
  return(<div className="UserPreview">
    <div className="name"> {user.username} </div>
    <div className="skills"> {user.skills} </div>
    <div className="experience"> {user.experience} </div>
  </div>)

}

export default UserPreview
