// IMPORTS
//-------------------------------------------------------------------------------------------------------import React, { useState } from "react";
import { useState } from "react";
import React from "react";

// FORM STEP
//-------------------------------------------------------------------------------------------------------
function FormResults({ scores }) {
  // Return Statement ---------------------------------------------------
  return (
    <div className="flex flex-col justify-center items-center w-1/2">
      <div className="load-content">
        <h1 className="my-3">Results</h1>
        <hr className="secondary-hr" />
        {scores.slice(0, 10).map((score, index) => (
          <div key={index} className="result-card my-2">
            <div className="title-score-container">
              <h3>{score.title}</h3>
              <h5>Score: {score.finalScore.toFixed(1)}</h5>
            </div>
            <p className="mt-2 opacity-0 transition-opacity duration-600 ease-in-out group-hover:opacity-100">
              Overall Rating: {score.ratingOverall}
            </p>
            <p className="opacity-0 transition-opacity duration-600 ease-in-out group-hover:opacity-100">
              Average Hours/Week: {score.hrsPerWeek}
            </p>
            <p className="opacity-0 transition-opacity duration-600 ease-in-out group-hover:opacity-100">
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
