import React from 'react';
import { Link } from 'react-router'

const UserInfoComponent = props => (
  <div className="info-component">
    <h1>{props.user.first_name} {props.user.last_name}</h1>
    <p>{props.user.email}</p>

    <div className="profile-buttons">
      <button><Link to="/users/edit">Edit My Stuff</Link></button>
      <button><Link to="/">Back to start</Link></button>
    </div>
  </div>
)

export default UserInfoComponent
