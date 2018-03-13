import React from 'react'
import { browserHistory } from 'react-router'

import PizzaForm from '../components/PizzaForm'
import SubmitToppingsButton from '../components/SubmitToppingsButton'

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
    if (this.state.toppings.includes(newTopping)) {
      this.removeTopping(newTopping)
    } else {
      let allToppings = this.state.toppings.concat(newTopping)
      this.setState({ toppings: allToppings })
      this.getQueryString(allToppings)
      this.setState({
        toppings: allToppings,
      })
    }
  };

  handleFormSubmit(event) {
    event.preventDefault()
    let queryString = this.state.queryString
    browserHistory.push(`/toppings/recommendations/${queryString}`)
  };

  getQueryString(toppings) {
    let newQueryString = ``
    toppings.forEach(topping => {
        newQueryString += `${topping},`
    })
    this.setState({ queryString: newQueryString })
  }

  removeTopping(newTopping) {
    let newToppingCheckBox = document.getElementsByName(newTopping)
    let currentlySelected = this.state.toppings
    let newToppingIndex = currentlySelected.indexOf(newTopping)
    currentlySelected.splice(newToppingIndex, 1)
    this.setState({ toppings: currentlySelected })
    newToppingCheckBox.checked = false
    this.getQueryString(currentlySelected)
  }

  render () {
    console.log(this.state)
    let button;
    let yourToppings;
    if (this.state.toppings.length >= 1) {
      button = <SubmitToppingsButton handleFormSubmit={this.handleFormSubmit} />
    }

    return (
      <div>
        <p>Please select up to two toppings</p>
        <PizzaForm handleChange={this.handleChange}/>
        {button}
      </div>
    );
  }
}

export default ToppingFormContainer
