import React from 'react'
import { browserHistory } from 'react-router'

import PizzaForm from '../components/PizzaForm'
import ChosenTopping from '../components/ChosenTopping'

class ToppingFormContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      toppings: [],
      queryString: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  };


  handleChange(event) {
    let newTopping = event.target.value
    let newToppingBox = document.getElementsByName(newTopping)
    let newToppingIndex = this.state.toppings.indexOf(newTopping)
    if (this.state.toppings.includes(newTopping)) {
      this.state.toppings.splice(newToppingIndex, 1)
      this.setState({ toppings: this.state.toppings })
      newToppingBox.checked = false
    } else if (this.state.toppings.length < 2) {
      this.setState({ toppings: this.state.toppings.concat(newTopping) })
    } else {
      document.getElementsByName(newTopping)[0].checked = false
      alert("You may only choose two toppings!")
    }
    this.setState({ queryString: `${this.state.toppings},${newTopping}`})
  };

  handleFormSubmit(event) {
    event.preventDefault()
    let queryString = this.state.queryString
    browserHistory.push(`/toppings/recommendations/${queryString}`)
  };

  render () {
    let button;
    let chosenToppings;
    if (this.state.toppings.length >= 1) {
      button = <div className="small-6 large-6 columns">
                <div className="get-movies">
                  <button type='submit' onClick={this.handleFormSubmit} className="small-12 columns button" id="get-movie-button">
                    Get my suggestions!
                  </button>
                </div>
              </div>
      let chosenToppings = this.state.toppings
      let toppings = chosenToppings.map(topping => {
        let randomNumber = Math.floor(Math.random() * 1000)
        let firstLetter = topping[0]
        let toppingKey = firstLetter + randomNumber
        return(
          <ul>
            <ChosenTopping
              key={toppingKey}
              topping={topping}
            />
          </ul>
        )
      })
    }


    return (
      <div>
        <div className="top-bar select">
          <p>Please select up to two toppings</p>
        </div>
        <div className="topping-form">
        <div className="checkbox-panal">
          <PizzaForm handleChange={this.handleChange}/>
          {chosenToppings}
          {button}
        </div>
        </div>
      </div>
    );
  }
}

export default ToppingFormContainer
