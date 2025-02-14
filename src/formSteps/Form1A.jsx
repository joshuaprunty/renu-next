// IMPORTS
//-------------------------------------------------------------------------------------------------------
import React from "react";

// FORM STEP
//-------------------------------------------------------------------------------------------------------
function Form1A({ nextStep }) {
  // Function Declarations ----------------------------------------------
  const handleStartClick = () => {
    nextStep();
  };

  // Return Statement ---------------------------------------------------
  return (
    <div className="flex flex-col justify-center items-center w-1/2">
      <div className="w-7/8 d-grid gap-2">
        <h1>Find your next course in under 5 minutes.</h1>
        <p>
          Tell us about what you're looking for in upcoming classes, which
          requirements you’d like to fulfill, and previous courses you’ve taken.
        </p>
        <button
          onClick={handleStartClick}
          className="btn btn-secondary btn-lg"
          id="start-assessment-button"
        >
          Start Assessment
        </button>
      </div>
    </div>
  );
}

// Export
export default Form1A;


