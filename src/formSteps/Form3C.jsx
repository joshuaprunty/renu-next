// IMPORTS
//-------------------------------------------------------------------------------------------------------
import React, { useState } from "react";
import "../styles/Home.css";
import "../styles/Form.css";
import BackNext from "../components/Form/BackNext";

// FORM STEP
//-------------------------------------------------------------------------------------------------------
function Form3C({ currLoc, updateFormData, nextStep, backStep }) {
  // Content Variables --------------------------------------------
  const locs = [
    "North Campus",
    "Central Campus",
    "South Campus",
    "No Preference",
  ];

  // UseState Variables -------------------------------------------------
  const [selectedLoc, setSelectedLoc] = useState(locs.indexOf(currLoc));

  const [errorState, setErrorState] = useState(false);

  // Function Declarations ----------------------------------------------
  function handleLocClick(locIndex) {
    setSelectedLoc(locIndex);
  }

  const handleNextClick = () => {
    if (selectedLoc != -1) {
      updateFormData({ loc: locs[selectedLoc - 1] });
      nextStep();
    } else {
      setErrorState(true);
    }
  };

  const handleBackClick = () => {
    backStep();
  };

  // Return Statement ---------------------------------------------------
  return (
    <div className="container-fluid position-fixed vh-100 mt-5 mb-0">
      <div className="form-div-main bg-white h-100">
        <img
          className="form-background-img"
          src="src/assets/NorthwesternN.png"
        />
        <div className="formq-content d-grid gap-2 position-relative z-2">
          <h2>I am looking for a course that is located on/near:</h2>
          {locs.map((loc, index) => (
            <button
              key={index}
              className="btn btn-outline-secondary d-flex align-items-center py-3"
              onClick={() => handleLocClick(index + 1)}
            >
              <div
                className={`check-square ms-4 ${
                  selectedLoc === index + 1 ? "check-square-selected" : ""
                }`}
              ></div>
              <span className="form-option-text ms-3 text-start fs-5">
                {loc}
              </span>
            </button>
          ))}
          <BackNext
            handleBackClick={handleBackClick}
            handleNextClick={handleNextClick}
          />
          {errorState && (
            <p className="position-absolute errormsg">
              Please select a location to proceed.
            </p>
          )}
        </div>
      </div>
      <div className="form-progress-bar h-100 pt-2 px-4 text-center text-white mb-0">
        <div className="p-b-left h-100"></div>
        <div className="p-b-right h-100"></div>
      </div>
    </div>
  );
}

// Export
export default Form3C;
