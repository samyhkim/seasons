import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends Component {
  // Initialize constructor(); old method of initializing state.
  // constructor() is the first function to get called when a component loads, even before render().
  // constructor() is the optimal place to call getCurrentPosition(), instead of double fetching user location from render().
  constructor(props) {
    super(props);

    // Setting initial state; only time direct state assignment is allowed.
    this.state = { lat: null };

    // HOF to find current position.
    window.navigator.geolocation.getCurrentPosition(
      // Callback to update state.
      positionDetails => {
        // Update state ONLY through setState(), never by direct assignment.
        this.setState({ lat: positionDetails.coords.latitude });
      },
      // Callback to catch error, such as user location not found.
      err => console.log(err)
    );
  }

  render() {
    return <div>Lattitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
