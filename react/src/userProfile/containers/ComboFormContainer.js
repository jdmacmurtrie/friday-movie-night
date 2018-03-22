import React from 'react'
import ComboForm from '../components/ComboForm'

class ComboFormContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      genre: '',
      topping: ''
    }
    this.handleChangeGenre = this.handleChangeGenre.bind(this)
    this.handleChangeTopping = this.handleChangeTopping.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.resetForm = this.resetForm.bind(this)
  }

  handleChangeGenre(event) {
    this.setState({ genre: event.target.value })
  }

  handleChangeTopping(event) {
    this.setState({ topping: event.target.value })
  }

  handleSubmit() {
    let formPayload = {
      genre: this.state.genre,
      topping: this.state.topping,
    }
    this.props.postNewCombo(formPayload)
    this.resetForm()
  }

  resetForm() {
    this.setState = {
      genre: '',
      topping: '',
    }
  }

  render () {
    let button
    if (this.state.genre != '' && this.state.topping != '') {
      button = <div className="new-combo-button">
                  <button onClick={this.handleSubmit}>
                    Submit my combo!
                  </button>
                </div>
    }

    let apostrophe = "'"
    // because my linter gets angry
    return (
      <div className="combo-form-wrapper">
        <div className="combo-headline">
          <h3>Not a fan of the combos you{apostrophe}re getting? Make your own!</h3>
          <h5>They{apostrophe}ll get thrown into the algorithm</h5>
        </div>
        <ComboForm
          genreValue={this.state.genre}
          toppingValue={this.state.topping}
          handleSubmit={this.handleSubmit}
          handleChangeGenre={this.handleChangeGenre}
          handleChangeTopping={this.handleChangeTopping}
        />
        {button}
      </div>
    );
  }
}

export default ComboFormContainer
