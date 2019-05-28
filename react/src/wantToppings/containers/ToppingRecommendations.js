import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actions } from "../actions";
import { FinalTopping } from "../components/FinalTopping";

class ToppingRecommendations extends React.Component {
  componentDidMount() {
    const { genre, title, chooseByGenre, getToppings } = this.props;
    const params = chooseByGenre ? `genre,${genre}` : `title,${title}`;
    getToppings(`/api/v1/movies?params=${params}`);
  }

  render() {
    const { title, chooseByGenre, toppingRecommendations } = this.props;
    const finalToppings = toppingRecommendations.map(topping => (
      <FinalTopping key={topping.id} topping={topping} />
    ));

    return (
      <div className="topping-recommendations-container">
        <div className="headline">
          <h1>
            Your topping recommendations
            {!chooseByGenre && `, based on ${title}`}
          </h1>
        </div>
        <div className="topping-back-buttons">
          <span className="back-button">
            <button>
              <Link to="/movies/new">Select Different Genre</Link>
            </button>
          </span>
          <span className="back-button">
            <button>
              <Link to="/">Back to the Beginning!</Link>
            </button>
          </span>
        </div>
        <ul className="toppings-list-container">{finalToppings}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    title: state.getToppings.titleGenre.title,
    genre: state.getToppings.titleGenre.genre,
    chooseByGenre: state.getToppings.titleGenre.chooseByGenre,
    toppingRecommendations: state.getToppings.toppingRecommendations.toppings
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getToppings: url => dispatch(actions.fetchToppingRecommendationRequest(url)),
    clearToppingRecommendations: () => dispatch(actions.clearToppingRecommendations())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToppingRecommendations);
