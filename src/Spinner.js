import React from "react";

const Spinner = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui text loader">{props.message}</div>
    </div>
  );
};

// Default props allow us to have a default configuration for our functional components
Spinner.defaultProps = {
  message: "Loading..."
};

export default Spinner;
