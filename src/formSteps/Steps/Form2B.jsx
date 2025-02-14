import { useState } from "react";
import BackNext from "@/components/Form/BackNext";
import { schools } from "@/lib/constants";

export default function Form2B({ currSchool, updateFormData, nextStep, backStep }) {
  const [selectedSchool, setSelectedSchool] = useState(
    schools.indexOf(currSchool) + 1
  );

  const [errorState, setErrorState] = useState(false);

  function handleSchoolClick(schoolIndex) {
    setSelectedSchool(schoolIndex);
    setErrorState(false);
    updateFormData({ school: schools[schoolIndex - 1] });
  }

  const handleNextClick = () => {
    if (selectedSchool != 0) {
      updateFormData({ school: schools[selectedSchool - 1] });
      console.log(selectedSchool);
      nextStep();
    } else {
      setErrorState(true);
    }
  };

  const handleBackClick = () => {
    backStep();
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center w-1/2">
        <div className="w-7/8 d-grid gap-2 position-relative z-2">
          <h2>Your School/College:</h2>
          {schools.map((school, index) => (
            <button
              key={index}
              className="btn btn-outline-secondary d-flex align-items-center py-3"
              onClick={() => handleSchoolClick(index + 1)}
            >
              <div
                className={`aspect-square h-5 w-5 rounded-[15%] border border-[#999999] inline-block ms-4 ${
                  selectedSchool === index + 1 ? "border-4 border-[#443161]" : ""
                }`}
              ></div>
              <span className="form-option-text ms-lg-5 ms-3 fs-5">
                {school}
              </span>
            </button>
          ))}
          <BackNext
            handleBackClick={handleBackClick}
            handleNextClick={handleNextClick}
            is_centered={false}
          />
          {errorState && (
            <p className="position-absolute">
              Please select a school to proceed.
            </p>
          )}
        </div>
      </div>
    </>
  );
}