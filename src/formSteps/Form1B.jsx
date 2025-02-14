// IMPORTS
//-------------------------------------------------------------------------------------------------------
import React from "react";
import BackNext from "../components/Form/BackNext";
import "../styles/Home.css";
import "../styles/Form.css";

// FORM STEP
//-------------------------------------------------------------------------------------------------------
function Form1B({ nextStep, backStep }) {
  // Function Declarations ----------------------------------------------
  const handleNextClick = () => {
    nextStep();
  };

  const handleBackClick = () => {
    backStep();
  };

  // Return Statement ---------------------------------------------------
  return (
    <div class="form-div-main">
      <div className="form-content d-grid gap-2 position-relative z-2">
        <h1 className="text-center">Basic Info</h1>
        <p className="text-center">
          This section will ask you basic info about your academic status at
          Northwestern to help determine courses that fit you.
        </p>
        <BackNext
          handleBackClick={handleBackClick}
          handleNextClick={handleNextClick}
          is_centered={true}
        />
      </div>
    </div>
  );
}

// Export
export default Form1B;
