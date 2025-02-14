// IMPORTS
//-------------------------------------------------------------------------------------------------------
import React, { useState } from "react";
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
      <div className="flex flex-col justify-center items-center w-1/2 bg-white h-100">
        <img
          className="block h-[150%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
          src="/NorthwesternN.png"
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
                className={`aspect-square h-5 w-5 rounded-[15%] border border-[#999999] inline-block ms-4 ${
                  selectedDay === index + 1 ? "border-4 border-[#443161]" : ""
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
            <p className="position-absolute">
              Please select an option to proceed.
            </p>
          )}
        </div>
      </div>
      <div className="w-1/6 bg-black m-auto absolute top-0 right-0 h-100 pt-2 px-4 text-center text-white mb-0">
        <div className="p-b-left h-100"></div>
        <div className="p-b-right h-100"></div>
      </div>
    </div>
  );
}

// Export
export default Form3D;
