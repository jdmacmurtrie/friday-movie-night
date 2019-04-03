import React from "react";
import PropTypes from "prop-types";

export const GetSuggestionsButton = props => (
  <div className={props.className}>
    <button type="submit">Get my suggestions!</button>
  </div>
);

GetSuggestionsButton.propTypes = {
  className: PropTypes.string
};
