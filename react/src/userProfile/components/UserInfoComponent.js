import React from 'react';
import { Link } from 'react-router'

const UserInfoComponent = props => (
  <div className="info-component">
    <h1>{props.user.first_name} {props.user.last_name}</h1>
    <p>{props.user.email}</p>

    <div className="profile-buttons">
      <button><a href="/users/edit">Edit My Stuff</a></button>
      <button><a href="/">Back to start</a></button>
    </div>
  </div>
)

export default UserInfoComponent
