import React from 'react';

const UserInfoComponent = props => {

  let apostrophe = "'"
  //  because my linter gets angry
  let combos

  
  return(
    <div>
      <h1>{props.user.first_name + apostrophe}s Stuff</h1>
      <p>{props.user.email}</p>
    </div>
  )
}

export default UserInfoComponent
