import React from "react";
import { ComboForm } from "../components/ComboForm";

class ComboFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: "",
      topping: ""
    };
    this.handleChangeGenre = this.handleChangeGenre.bind(this);
    this.handleChangeTopping = this.handleChangeTopping.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  handleChangeGenre(event) {
    this.setState({ genre: event.target.value });
  }

  handleChangeTopping(event) {
    this.setState({ topping: event.target.value });
  }

  handleSubmit() {
    let formPayload = {
      genre: this.state.genre,
      topping: this.state.topping
    };
    this.props.postNewCombo(formPayload);
    this.resetForm();
  }

  resetForm() {
    this.setState = {
      genre: "",
      topping: ""
    };
  }

  render() {
    const { genre, topping } = this.state;

    return (
      <div className="combo-form-wrapper">
        <div className="combo-headline">
          <h3>Not a fan of the combos you&apos;re getting? Make your own!</h3>
          <h5>They&apos;ll get thrown into the algorithm</h5>
        </div>
        <ComboForm
          genreValue={genre}
          toppingValue={topping}
          handleSubmit={this.handleSubmit}
          handleChangeGenre={this.handleChangeGenre}
          handleChangeTopping={this.handleChangeTopping}
        />
        {genre && topping && (
          <div className="new-combo-button">
            <button onClick={this.handleSubmit}>Submit my combo!</button>
          </div>
        )}
      </div>
    );
  }
}

export default ComboFormContainer;
