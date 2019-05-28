import React from "react";
import ComboTableContainer from "../components/ComboTableContainer";
import UserInfoComponent from "../components/UserInfoComponent";
import ComboFormContainer from "./ComboFormContainer";

export class UserProfileContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      combos: []
    };
    this.getCombos = this.getCombos.bind(this);
    this.postNewCombo = this.postNewCombo.bind(this);
    this.deleteCombo = this.deleteCombo.bind(this);
  }

  componentDidMount() {
    this.getCombos();
  }

  getCombos() {
    let user_id = this.props.params.id;
    fetch(`/api/v1/users/${user_id}`, {
      credentials: "same-origin"
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({
          user: body.user,
          combos: body.user.combos
        });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  postNewCombo(formPayload) {
    fetch(`/api/v1/combos.json`, {
      method: "POST",
      body: JSON.stringify(formPayload),
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then(response => response.json())
      .then(body => {
        let moreCombos = [...this.state.combos, ...body.combo];
        this.setState({ combos: moreCombos });
        this.getCombos();
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  deleteCombo(id) {
    fetch(`/api/v1/combos/${id}.json`, {
      method: "DELETE",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({ combos: body.combos });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    return (
      <div className="user-info-container">
        <div className="info-wrapper">
          <UserInfoComponent user={this.state.user} />
          <div className="user-combos">
            <ComboTableContainer
              deleteCombo={this.deleteCombo}
              userCombos={this.state.combos}
            />
          </div>
        </div>
        <ComboFormContainer
          user={this.state.user}
          postNewCombo={this.postNewCombo}
        />
      </div>
    );
  }
}
