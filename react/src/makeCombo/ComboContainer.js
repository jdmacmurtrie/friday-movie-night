import React from 'react'
import ComboForm from './ComboForm'

class ComboContainer
 extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      genre: 'none',
      topping_1: 'none',
      topping_2: 'none',
      queryString: ''
    }
    this.handleChangeGenre = this.handleChangeGenre.bind(this)
    this.handleChangeTopping1 = this.handleChangeTopping1.bind(this)
    this.handleChangeTopping2 = this.handleChangeTopping2.bind(this)
  }

  handleChangeGenre(event) {
    this.setState({ genre: event.target.value })
    this.setState({ queryString: `${event.target.value},${this.state.topping_1},${this.state.topping_2}` })
  }

  handleChangeTopping1(event) {
    this.setState({ topping_1: event.target.value })
    this.setState({ queryString: `${this.state.genre},${event.target.value},${this.state.topping_2}` })

  }

  handleChangeTopping2(event) {
    this.setState({ topping_2: event.target.value })
    this.setState({ queryString: `${this.state.genre},${this.state.topping_1},${event.target.value}` })
  }

  render () {
    let button
    if (this.state.genre != 'none' && this.state.topping_1 != 'none') {
      button =
        <div className="">
          <a href={`/suggestions/${this.state.queryString}`} className="small-12 columns button">
            Submit my combo!
          </a>
      </div>
    }
    return (
      <div>
      <div className="top-bar combo-header">
        Combo Time
      </div>
      <ComboForm
        handleChangeGenre={this.handleChangeGenre}
        handleChangeTopping1={this.handleChangeTopping1}
        handleChangeTopping2={this.handleChangeTopping2}
      />
      {button}
      </div>
    );
  }
}

export default ComboContainer
