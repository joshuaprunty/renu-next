
import React, { useState } from "react";
import BackNext from "../components/Form/BackNext";
import { years } from "../data/util";

function Form2A({ currYear, updateFormData, nextStep, backStep }) {
  // UseState Variables -------------------------------------------------
  const [selectedYear, setSelectedYear] = useState(years.indexOf(currYear) + 1);
  const [errorState, setErrorState] = useState(false);
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

  return (
    <>
      <div className="flex flex-col justify-center items-center w-1/2">
        <div className="w-7/8 d-grid gap-2 position-relative z-2">
          <h2>Your class at NU (Current or Incoming):</h2>
          {years.map((year, index) => (
            <button
              key={index}
              className={`btn btn-outline-secondary d-flex align-items-center py-3 border ${
                selectedYear === index + 1 ? "border-gray-500" : "border-gray-200"
              }`}
              onClick={() => handleYearClick(index + 1)}
            >
              <div
                className={`aspect-square h-5 w-5 rounded-[15%] border border-[#999999] inline-block ms-4 ${
                  selectedYear === index + 1 ? "border-4 border-[#443161]" : ""
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
            <p className="position-absolute">
              Please select a year to proceed.
            </p>
          )}
        </div>
      </div>
    </>
  );
}


export default Form2A;
