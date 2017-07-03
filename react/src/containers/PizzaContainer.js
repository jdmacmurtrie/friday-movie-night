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
    let button;
    let yourToppings;
    if (this.state.toppings.length >= 1) {
      button = <div className="small-6 large-6 columns">
                <div className="get-movies">
                  <a href={`/toppings/${this.state.queryString}`} className="button">Get my suggestions!</a>
                </div>
              </div>
      yourToppings = <div className="small-6 large-6 columns">
                      <div>Your toppings:</div>
                      <div className="topping-box">
                        <Topping toppings={this.state.toppings}/>
                      </div>
                    </div>
    }

    return (
      <div>
        <div className="top-bar select">
          <p>Please select up to two toppings</p>
        </div>
        <div className="topping-form">
          <PizzaForm handleChange={this.handleChange}/>
          {yourToppings}
          {button}
        </div>
      </div>
    );
  }
}

export default PizzaContainer
