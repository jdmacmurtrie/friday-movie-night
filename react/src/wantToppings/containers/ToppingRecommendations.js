import React from 'react';
import { browserHistory, Link } from 'react-router'

import FinalToppings from '../components/FinalToppings'

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
    fetch(`/api/v1/movies?params=${this.props.params.params}`)
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

    return (
      <div className="topping-recommendations-container">
        <div className="headline">
          <h1>{headline}</h1>
        </div>
        <div className="topping-list">
           <FinalToppings toppings={this.state.toppings}/>
        </div>
        <Link to='/movies/new' className="">
          Select Different Genre
        </Link>
        <a href='/' className="">
          Back to the Beginning!
        </a>
      </div>
    );
  }
}

export default ToppingRecommendations
