import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    // Northern 3-8 = summer, else winter
    return lat > 0 ? "summer" : "winter";
  } else {
    // Northern 0-2 & 9-11 = winter, else summer
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const text =
    season === "summer" ? "Let's hit the beach!" : "Brr, it's chilly!";
  const icon = season === "summer" ? "sun" : "snowflake";

  return (
    <div>
      <i className={`${icon} icon`} />
      <h1>{text}</h1>
      <i className={`${icon} icon`} />
    </div>
  );
};

export default SeasonDisplay;
