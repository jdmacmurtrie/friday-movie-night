import React from "react";
import { connect } from "react-redux";
import { Link, Route } from "react-router-dom";
import { GetSuggestionsButton } from "../../sharedComponents/GetSuggestionsButton";
import { actions } from "../actions";
import { ToppingForm } from "../components/ToppingForm";
import MovieRecommendations from "./MovieRecommendations";

class ToppingFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.clearToppings();
  }

  handleChange(event) {
    let newTopping = event.target.value;
    if (this.props.toppings.includes(newTopping)) {
      this.props.removeTopping(newTopping);
    } else {
      this.props.addTopping(newTopping);
    }
  }

  render() {
    return (
      <div className="toppings-form-page">
        <Route exact path="/toppings/recommendations" component={MovieRecommendations} />
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
          <ToppingForm handleChange={this.handleChange} chosenToppings={this.props.toppings} />
        </div>
        {!!this.props.toppings.length && (
          <Link to={"/toppings/recommendations"}>
            <GetSuggestionsButton className="get-movies-button" />
          </Link>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    toppings: state.getMovies.toppings.toppings
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTopping: topping => dispatch(actions.addToppings(topping)),
    removeTopping: topping => dispatch(actions.removeTopping(topping)),
    clearToppings: () => dispatch(actions.clearToppings())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToppingFormContainer);
