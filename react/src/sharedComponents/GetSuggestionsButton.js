import React from 'react';

const GetSuggestionsButton = props =>  (
  <div className={props.className}>
    <button type='submit' onClick={props.handleFormSubmit}>
      Get my suggestions!
    </button>
  </div>
);


export default GetSuggestionsButton
