// IMPORTS
//-------------------------------------------------------------------------------------------------------
import React, { useState } from "react";
import BackNext from "../components/Form/BackNext";

// FORM STEP
//-------------------------------------------------------------------------------------------------------
function FormSelectStep({
  heading,
  options,
  currSelection,
  updateFormData,
  nextStep,
  backStep,
  datakey,
}) {
  // Content Variables --------------------------------------------

  // UseState Variables -------------------------------------------------
  const [selectedOption, setselectedOption] = useState(
    options.indexOf(currSelection) + 1
  );

  const [errorState, setErrorState] = useState(false);

  // Function Declarations ----------------------------------------------
  const handleOptionClick = (optionindex) => {
    setselectedOption(optionindex);
  };

  // Next
  const handleNextClick = () => {
    if (selectedOption != 0) {
      updateFormData({ [datakey]: options[selectedOption - 1] });
      nextStep();
    } else {
      setErrorState(true);
    }
  };

  // Back
  const handleBackClick = () => {
    backStep();
  };

  // Return Statement ---------------------------------------------------
  return (
    <>
      <div className="flex flex-col justify-center items-center w-1/2">
        <div className="w-7/8 d-grid gap-2 position-relative z-2">
          <h2>{heading}</h2>
          {options.map((option, index) => (
            <button
              key={index}
              className={`btn btn-outline-secondary d-flex align-items-center py-3 border ${
                selectedOption === index + 1 ? "border-gray-500" : "border-gray-200"
              }`}
              onClick={() => handleOptionClick(index + 1)}
            >
              <div
                className={`aspect-square h-5 w-5 rounded-[15%] border border-[#999999] inline-block ms-4 ${
                  selectedOption === index + 1 ? "border-4 border-[#443161]" : ""
                }`}
              ></div>
              <span className="form-option-text ms-lg-5 ms-3 fs-5">
                {option}
              </span>
            </button>
          ))}
          <BackNext
            handleBackClick={handleBackClick}
            handleNextClick={handleNextClick}
          />
          {errorState && (
            <p className="position-absolute errormsg">
              Please select an option to proceed.
            </p>
          )}
        </div>
      </div>
    </>
  );
}

// Export
export default FormSelectStep;
