// IMPORTS
//-------------------------------------------------------------------------------------------------------
import React, { useState } from "react";
import "../styles/Home.css";
import "../styles/Form.css";
import BackNext from "../components/Form/BackNext";

// FORM STEP
//-------------------------------------------------------------------------------------------------------
function Form3D({ currDay, updateFormData, nextStep, backStep }) {
  // Content Variables --------------------------------------------
  const days = [
    "Monday / Wednesday / Friday",
    "Tuesday / Thursday",
    "No Preference",
  ];
  const [selectedDay, setSelectedDay] = useState(days.indexOf(currDay));

  // Function Declarations ----------------------------------------------
  function handleDayClick(dayIndex) {
    setSelectedDay(dayIndex);
  }
  const [errorState, setErrorState] = useState(false);

  const handleNextClick = () => {
    if (selectedDay != -1) {
      updateFormData({ day: days[selectedDay - 1] });
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
          <h2>I am looking for a course that meets on:</h2>
          {days.map((day, index) => (
            <button
              key={index}
              className="btn btn-outline-secondary d-flex align-items-center py-3"
              onClick={() => handleDayClick(index + 1)}
            >
              <div
                className={`check-square ms-4 ${
                  selectedDay === index + 1 ? "check-square-selected" : ""
                }`}
              ></div>
              <span className="form-option-text ms-3 text-start fs-5">
                {day}
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
      <div className="form-progress-bar h-100 pt-2 px-4 text-center text-white mb-0">
        <div className="p-b-left h-100"></div>
        <div className="p-b-right h-100"></div>
      </div>
    </div>
  );
}

// Export
export default Form3D;
