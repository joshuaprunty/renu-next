// IMPORTS
//-------------------------------------------------------------------------------------------------------
import React, { useState } from "react";
import "../styles/Home.css";
import "../styles/Form.css";
import BackNext from "../components/Form/BackNext";

// FORM STEP
//-------------------------------------------------------------------------------------------------------
function Form3B({ currDiff, updateFormData, nextStep, backStep }) {
  // Content Variables --------------------------------------------
  const diffs = ["1 (Easy A)", "2", "3 (Average)", "4", "5 (Most Challenging)"];

  // UseState Variables -------------------------------------------------
  const [selectedDiff, setSelectedDiff] = useState(diffs.indexOf(currDiff) + 1);

  const [errorState, setErrorState] = useState(false);

  // Function Declarations ----------------------------------------------
  const handleNextClick = () => {
    if (selectedDiff != 0) {
      updateFormData({ diff: diffs[selectedDiff - 1] });
      nextStep();
    } else {
      setErrorState(true);
    }
  };

  const handleBackClick = () => {
    backStep();
  };

  function handleDiffClick(diffIndex) {
    setSelectedDiff(diffIndex);
    setErrorState(false);
    updateFormData({ diff: diffs[diffIndex - 1] });
  }

  // Return Statement ---------------------------------------------------
  return (
    <div className="form-div-main">
      <div className="form-content d-grid gap-2 position-relative z-2">
        <h2>How challenging of a course are you looking for?</h2>
        {diffs.map((diff, index) => (
          <button
            key={index}
            className="btn btn-outline-secondary d-flex align-items-center py-3"
            onClick={() => handleDiffClick(index + 1)}
          >
            <div
              className={`check-square ms-4 ${
                selectedDiff === index + 1 ? "check-square-selected" : ""
              }`}
            ></div>
            <span className="form-option-text text-start ms-3 fs-5">
              {diff}
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
  );
}

// Export
export default Form3B;
