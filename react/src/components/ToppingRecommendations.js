import React, { Component } from 'react';
import { browserHistory } from 'react-router'

class ToppingRecommendations extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }
  componentDidMount() {
    debugger
    fetch('/api/v1/movie')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      console.log(body)
      this.setState({  });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    debugger
    return (
      <div>
      </div>
    );
  }
}

export default ToppingRecommendations
