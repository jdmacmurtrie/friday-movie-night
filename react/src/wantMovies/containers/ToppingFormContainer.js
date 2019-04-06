import React from "react";
import { connect } from "react-redux";
import { actions } from "../../actions";
import { GetSuggestionsButton } from "../../sharedComponents/GetSuggestionsButton";
import { ToppingForm } from "../components/ToppingForm";

class ToppingFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(event) {
    let newTopping = event.target.value;
    if (this.props.toppings.includes(newTopping)) {
      this.props.removeTopping(newTopping);
    } else {
      this.props.addTopping(newTopping);
    }
  }

  handleFormSubmit() {
    this.props.history.push("/toppings/recommendations");
  }

  render() {
    return (
      <div className="toppings-form-page">
        <form onSubmit={this.handleFormSubmit}>
          <div className="toppings-wrapper">
            <div className="topping-headline">
              <h1>Which toppings are on your pizza?</h1>
              <img
                src="https://s3.us-east-2.amazonaws.com/friday-movie-night-images/pizza-slice-combo-clipart.png"
                alt="pizza"
                height="150"
                width="150"
              />
              <hr />
            </div>
            <ToppingForm
              handleChange={this.handleChange}
              chosenToppings={this.props.toppings}
            />
          </div>
          {this.props.toppings.length && (
            <GetSuggestionsButton className="get-movies-button" />
          )}
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    toppings: state.toppings
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTopping: topping => dispatch(actions.addToppings(topping)),
    removeTopping: topping => dispatch(actions.removeTopping(topping))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToppingFormContainer);
