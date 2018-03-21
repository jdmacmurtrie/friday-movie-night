import React from 'react'
import ComboForm from '../components/ComboForm'

class ComboFormContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      genre: '',
      firstTopping: '',
      secondTopping: '',
      queryString: ''
    }
    this.handleChangeGenre = this.handleChangeGenre.bind(this)
    this.handleChangeFirstTopping = this.handleChangeFirstTopping.bind(this)
    this.handleChangeSecondTopping = this.handleChangeSecondTopping.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.resetForm = this.resetForm.bind(this)
  }

  handleChangeGenre(event) {
    this.setState({
      genre: event.target.value,
      queryString: `${event.target.value},${this.state.firstTopping},${this.state.secondTopping}`
    })
  }

  handleChangeFirstTopping(event) {
    this.setState({
      firstTopping: event.target.value,
      queryString: `${this.state.genre},${event.target.value},${this.state.secondTopping}`
    })
  }

  handleChangeSecondTopping(event) {
    this.setState({
      secondTopping: event.target.value,
      queryString: `${this.state.genre},${this.state.firstTopping},${event.target.value}`
    })
  }

  handleSubmit() {
    let formPayload = {
      genre: this.state.genre,
      firstTopping: this.state.firstTopping,
      secondTopping: this.state.secondTopping
    }
    this.props.postNewCombo(formPayload)
    this.resetForm()
  }

  resetForm() {
    this.setState = {
      genre: '',
      firstTopping: '',
      secondTopping: '',
      queryString: ''
    }
  }

  render () {
    let button
    if (this.state.genre != '' && this.state.firstTopping != '') {
      button = <div className="">
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
          <h4>They{apostrophe}ll get thrown into the algorithm</h4>
        </div>
        <ComboForm
          handleSubmit={this.handleSubmit}
          handleChangeGenre={this.handleChangeGenre}
          handleChangeFirstTopping={this.handleChangeFirstTopping}
          handleChangeSecondTopping={this.handleChangeSecondTopping}
        />
        {button}
      </div>
    );
  }
}

export default ComboFormContainer
