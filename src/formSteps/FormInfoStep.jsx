// IMPORTS
//-------------------------------------------------------------------------------------------------------
import React from "react";
import BackNext from "../components/Form/BackNext";

import "../styles/Home.css";
import "../styles/Form.css";

// FORM STEP
//-------------------------------------------------------------------------------------------------------
function FormInfoStep({ nextStep, backStep, heading, subheading }) {
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
        <h1 className="text-center">{heading}</h1>
        <p className="text-center">{subheading}</p>
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
export default FormInfoStep;
