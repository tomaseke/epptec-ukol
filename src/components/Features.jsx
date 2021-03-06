import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";

const Features = ({ features }) => {
  return (
    <div className="d-flex flex-column m-2">
      {features.map((feature) => {
        return (
          <div className="fs-5 d-flex flex-row">
            <div className="feature-row">
              {
                // if feature is part of the product, display green check, else red cross
                Object.values(feature)[0] ? (
                  <FontAwesomeIcon icon={faCheck} color="green" />
                ) : (
                  <FontAwesomeIcon
                    icon={faTimes}
                    color="red"
                    className="check-icon"
                  />
                )
              }
            </div>
            {Object.keys(feature)[0]}
          </div>
        );
      })}
    </div>
  );
};

export default Features;
