import React from 'react'
import PizzaForm from '../components/PizzaForm'
import Topping from '../components/Topping'

class PizzaContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      toppings: [],
      queryString: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }


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
  }


  render () {
    return (
      <div>
        <p>Please select up to two toppings:</p>
        <PizzaForm handleChange={this.handleChange}/>
        <h2>Your toppings:</h2>
        <Topping toppings={this.state.toppings}/>
        <button><a href={`/toppings/${this.state.queryString}`}>Get my suggestions!</a></button>
      </div>
    );
  }
}

export default PizzaContainer
