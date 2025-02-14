// IMPORTS
//-------------------------------------------------------------------------------------------------------
import React from "react";
import BackNext from "../components/Form/BackNext";


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
    <div className="flex flex-col justify-center items-center w-1/2">
      <div className="w-7/8 d-grid gap-2 position-relative z-2">
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
