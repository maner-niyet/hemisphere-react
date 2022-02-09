import React from "react";
import nothernPic from "./img/NorthernHemisphere.jpg";
import southernPic from "./img/SouthernHemisphere.jpg";
import "./Hemisphere.css";

const hemisphereConfig = {
  Northern: {
    text: "it is northern hemisphere",
    picture: nothernPic,
  },
  Southern: {
    text: "it is southern hemisphere",
    picture: southernPic,
  },
};

const HemisphereDisplay = ({ latitude }) => {
  const hemisphere = latitude > 0 ? "Northern" : "Southern";
  const { text, picture } = hemisphereConfig[hemisphere];

  return (
    <div className={hemisphere}>
      <div className="ui raised text container segment">
        <div className="image">
          <img src={picture} alt={text + " picture"} />
        </div>
        <div className="ui teal bottom attached label">
            <h1>{text}</h1>
        </div>
      </div>
    </div>
  );
};

export default HemisphereDisplay;
