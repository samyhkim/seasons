import "./SeasonDisplay.css";
import React from "react";

// Configuration object containing key-value pairs of season objects; allows us to avoid repetition
const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun"
  },
  winter: {
    text: "Brr, it's chilly!",
    iconName: "snowflake"
  }
};

// Function to determine user's season
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
  // Grab correct season of user by calling getSeason()
  const season = getSeason(props.lat, new Date().getMonth());
  // Destructure season object's properties for easy access
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
