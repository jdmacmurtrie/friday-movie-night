import React from 'react';

const SubmitToppingsButton = props =>  (
  <div>
    <button type='submit' onClick={props.handleFormSubmit}>
      Get my suggestions!
    </button>
  </div>
);


export default SubmitToppingsButton
