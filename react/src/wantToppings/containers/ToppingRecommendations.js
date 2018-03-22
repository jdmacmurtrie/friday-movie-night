import React from 'react';
import { browserHistory, Link } from 'react-router'

import FinalTopping from '../components/FinalTopping'

class ToppingRecommendations extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      toppings: [],
      searchType: '',
      title: '',
      titleResult: ''
    }
  }

  componentDidMount() {
    fetch(`/api/v1/movies?params=${this.props.params.params}`, {
      credentials: 'same-origin'
    })
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
      this.setState({ toppings: body.toppings, titleResult: body.title })
      let type = this.props.params.params.split(",")[0]
      this.setState({ searchType: type })
      if (type = 'title') {
        this.setState({ title: this.props.params.params.split(",")[1] })
      }
    })
    .catch(error =>
      {
        if (error.message.includes(422)) {
          browserHistory.push('/movies/new');
          alert('Not a real movie!');
        } else {
          console.error(`Error in fetch: ${error.message}`);
        }
      }
    );
  }

  render() {
    let headline
    if(this.state.searchType == 'title') {
      headline = `Your topping recommendations, based on ${this.state.titleResult}`
    } else {
      headline = "Your topping recommendations"
    }

    let recommendations = this.state.toppings
    let finalToppings = recommendations.map(topping => {
      let randomNumber = Math.floor(Math.random() * 999)
      let firstLetter = topping[0]
      let toppingKey = firstLetter + randomNumber
      return(
        <FinalTopping
          key={toppingKey}
          topping={topping}
        />
      )
    })

    return (
      <div className="topping-recommendations-container">
        <div className="headline">
          <h1>{headline}</h1>
        </div>
        <div className="topping-back-buttons">
          <span className="back-button">
            <button><Link to='/movies/new'>Select Different Genre</Link></button>
          </span>
          <span className="back-button">
            <button><Link to='/'>Back to the Beginning!</Link></button>
          </span>
        </div>
        <ul className="toppings-list-container">
          {finalToppings}
        </ul>
      </div>
    );
  }
}

export default ToppingRecommendations
