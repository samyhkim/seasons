import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends Component {
  // Setting initial state; only time direct state assignment is allowed.
  state = {
    lat: null,
    errorMessage: ""
  };

  componentDidMount() {
    // HOF to find current position.
    window.navigator.geolocation.getCurrentPosition(
      // Callback to update state.
      positionDetails => {
        // Update state ONLY through setState(), never by direct assignment.
        this.setState({ lat: positionDetails.coords.latitude });
      },
      // Callback to catch error, such as user location not found.
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    // Received errorMessage (no latitude)
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    // Received latitude (no errorMessage)
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}></SeasonDisplay>;
    }
    // Loading (catch-all; no latitude && no errorMessage)
    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
