import React from 'react';

const UserInfoComponent = props => (
  <div className="info-component">
    <h1>{props.user.first_name} {props.user.last_name}</h1>
    <p>{props.user.email}</p>

    <button><a href="/users/edit">Edit My Stuff</a></button>
    <button><a href="/users/<%current_user%>" data-method="delete">Delete My Stuff</a></button>
  </div>
)


export default UserInfoComponent
