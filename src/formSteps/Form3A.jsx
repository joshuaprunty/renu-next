// IMPORTS
//-------------------------------------------------------------------------------------------------------
import React from "react";
import BackNext from "../components/Form/BackNext";

// FORM STEP
//-------------------------------------------------------------------------------------------------------
function Form3A({ updateFormData, nextStep, backStep }) {
  // Function Declarations ----------------------------------------------
  const handleNextClick = () => {
    nextStep();
  };

  const handleBackClick = () => {
    backStep();
  };

  // Return Statement ---------------------------------------------------
  return (
    <>
      <div className="container-fluid position-fixed vh-100 mt-5 mb-0">
        <div className="flex flex-col justify-center items-center w-1/2 bg-white h-100">
          <img 
            src="/NorthwesternN.png"
            className="block h-[150%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
          />
          <div className="w-7/8 d-grid gap-2 position-relative z-2">
            <h1>Preference Questions</h1>
            <p>
              This section will ask you to specify preferences about specific
              class attributes
            </p>
            <BackNext
              handleBackClick={handleBackClick}
              handleNextClick={handleNextClick}
            />
          </div>
        </div>
        <div className="w-1/6 bg-black m-auto absolute top-0 right-0 h-100 pt-2 px-4 text-center text-white mb-0">
          <div className="p-b-left h-100"></div>
          <div className="p-b-right h-100"></div>
        </div>
      </div>
    </>
  );
}

export default Form3A;
