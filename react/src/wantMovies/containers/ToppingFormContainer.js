import React from 'react'
import { browserHistory } from 'react-router'

import ToppingForm from '../components/ToppingForm'
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
    let button;
    let yourToppings;
    if (this.state.toppings.length >= 1) {
      button = <SubmitToppingsButton handleFormSubmit={this.handleFormSubmit} />
    }

    return (
      <div className="toppings-form-page">
        <div className="toppings-wrapper">
          <div className="instructions">
            <h1>Which toppings are on your pizza?</h1>
            <img src='/assets/pizza-slice-combo-clipart' alt="pizza" height="150" width="150"/>
            <hr/>
          </div>
          <ToppingForm handleChange={this.handleChange}/>
          {button}
        </div>
      </div>
    );
  }
}

export default ToppingFormContainer
