// IMPORTS
//-------------------------------------------------------------------------------------------------------
import React, { useState } from "react";
import BackNext from "../components/Form/BackNext";
import { years } from "../data/util";
import "../styles/Form.css";
import "../styles/Home.css";

// FORM STEP
//-------------------------------------------------------------------------------------------------------
function Form2A({ currYear, updateFormData, nextStep, backStep }) {
  // UseState Variables -------------------------------------------------
  const [selectedYear, setSelectedYear] = useState(years.indexOf(currYear) + 1);
  const [errorState, setErrorState] = useState(false);
  // Function Declarations ----------------------------------------------
  const handleYearClick = (yearIndex) => {
    setSelectedYear(yearIndex);
  };
  // Next
  const handleNextClick = () => {
    if (selectedYear != 0) {
      updateFormData({ year: years[selectedYear - 1] });
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
      <div class="form-div-main">
        <div className="form-content d-grid gap-2 position-relative z-2">
          <h2>Your class at NU (Current or Incoming):</h2>
          {years.map((year, index) => (
            <button
              key={index}
              className={`btn btn-outline-secondary d-flex align-items-center py-3 ${
                selectedYear === index + 1 ? "thinoutselected" : "thinoutline"
              }`}
              onClick={() => handleYearClick(index + 1)}
            >
              <div
                className={`check-square ms-4 ${
                  selectedYear === index + 1 ? "check-square-selected" : ""
                }`}
              ></div>
              <span className="form-option-text ms-lg-5 ms-3 fs-5">{year}</span>
            </button>
          ))}
          <BackNext
            handleBackClick={handleBackClick}
            handleNextClick={handleNextClick}
            is_centered={false}
          />
          {errorState && (
            <p className="position-absolute errormsg">
              Please select a year to proceed.
            </p>
          )}
        </div>
      </div>
    </>
  );
}

// Export
export default Form2A;
