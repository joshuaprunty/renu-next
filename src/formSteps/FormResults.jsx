// IMPORTS
//-------------------------------------------------------------------------------------------------------import React, { useState } from "react";
import { useState } from "react";
import "../styles/Home.css";
import "../styles/Form.css";
import React from "react";

// FORM STEP
//-------------------------------------------------------------------------------------------------------
function FormResults({ scores }) {
  // Return Statement ---------------------------------------------------
  return (
    <div className="form-div-res">
      <div className="load-content">
        <h1 className="my-3">Results</h1>
        <hr className="secondary-hr" />
        {scores.slice(0, 10).map((score, index) => (
          <div key={index} className="result-card my-2">
            <div className="title-score-container">
              <h3>{score.title}</h3>
              <h5>Score: {score.finalScore.toFixed(1)}</h5>
            </div>
            <p className="more-info mt-2">
              Overall Rating: {score.ratingOverall}
            </p>
            <p className="more-info">Average Hours/Week: {score.hrsPerWeek}</p>
            <p className="more-info">
              Largest Demographic: {score.maxDemo.maxKey} (
              {score.maxDemo.mvString})
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Export
export default FormResults;
