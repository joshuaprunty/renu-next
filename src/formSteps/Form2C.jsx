
//-------------------------------------------------------------------------------------------------------import React, { useState } from "react";
import { useState } from "react";
import BackNext from "../components/Form/BackNext";
import React from "react";
import Select from "react-select";
import majors from "../data/majors.json";
import { fullSchools } from "../data/util";


function Form2C({
  currSchool,
  currMajors,
  updateFormData,
  nextStep,
  backStep,
}) {
  const schoolMajors = majors[currSchool];
  const exampleOptions = schoolMajors.map((major) => ({
    value: major,
    label: major,
  }));

  // UseState Variables -------------------------------------------------
  const [selectedMajors, setSelectedMajors] = useState(
    currMajors.map((major) => exampleOptions.indexOf(major))
  );

  const [errorState, setErrorState] = useState(false);
  const [selectValue, setSelectValue] = useState(null);

  // Function Declarations ---------------------------------------------
  // Next
  const handleNextClick = () => {
    if (selectedMajors.length > 0) {
      const updates = {
        majors: selectedMajors,
      };
      updateFormData(updates);
      nextStep();
    } else {
      setErrorState(true);
    }
  };

  // Back
  const handleBackClick = () => {
    backStep();
  };

  // Major Select
  const handleSelectMajor = (selectedOption) => {
    const value = selectedOption ? selectedOption.value : null;
    if (value && !selectedMajors.includes(value)) {
      setSelectedMajors([...selectedMajors, value]);
    }
    setSelectValue(null);
  };

  // Major Remove
  const handleRemoveMajor = (valueToRemove) => {
    setSelectedMajors(
      selectedMajors.filter((value) => value !== valueToRemove)
    );
  };

  return (
    <div className="flex flex-col justify-start items-center h-[35%] w-full max-w-[700px]">
      <div className="w-7/8 d-grid gap-2 position-relative z-2">
        <h2>Add your current/intended majors.</h2>
        <h5>Majors for {fullSchools[currSchool]} </h5>
        <Select
          id="majors-dropdown"
          options={exampleOptions}
          onChange={handleSelectMajor}
          className="my-3"
          isClearable={true}
          value={selectValue}
        />
        <div className="selected-items">
          {selectedMajors.map((majorValue, index) => {
            const majorLabel =
              exampleOptions.find((option) => option.value === majorValue)
                ?.label || majorValue;
            return (
              <div 
                key={index} 
                className="flex justify-between items-center w-full border border-[#dddddd] rounded-md 
                         my-2 px-2.5 py-5 text-lg font-light"
              >
                {majorLabel}{" "}
                <button
                  className="btn btn-close btn-sm"
                  onClick={() => handleRemoveMajor(majorValue)}
                ></button>
              </div>
            );
          })}
        </div>
        <BackNext
          handleBackClick={handleBackClick}
          handleNextClick={handleNextClick}
          is_centered={false}
        />
        {errorState && (
          <p className="position-absolute">
            Please select at least one major to proceed.
          </p>
        )}
      </div>
    </div>
  );
}


export default Form2C;
