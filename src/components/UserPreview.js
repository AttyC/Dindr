import React from 'react';

const UserPreview = (user) => {
  return(<div className="UserPreview">
    <div className="name"> {user.name} </div>
    <div className="skills"> {user.skills} </div>
    <div className="experience"> {user.experience} </div>
  </div>)

}

export default UserPreview
