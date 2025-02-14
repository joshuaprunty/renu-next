import { useState } from "react";
import BackNext from "../components/Form/BackNext";

export default function Form3B({ currDiff, updateFormData, nextStep, backStep }) {
  const diffs = ["1 (Easy A)", "2", "3 (Average)", "4", "5 (Most Challenging)"];
  const [selectedDiff, setSelectedDiff] = useState(diffs.indexOf(currDiff) + 1);
  const [errorState, setErrorState] = useState(false);

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

  return (
    <div className="flex flex-col justify-center items-center w-1/2">
      <div className="w-7/8 d-grid gap-2 position-relative z-2">
        <h2>How challenging of a course are you looking for?</h2>
        {diffs.map((diff, index) => (
          <button
            key={index}
            className="btn btn-outline-secondary d-flex align-items-center py-3"
            onClick={() => handleDiffClick(index + 1)}
          >
            <div
              className={`aspect-square h-5 w-5 rounded-[15%] border border-[#999999] inline-block ms-4 ${
                selectedDiff === index + 1 ? "border-4 border-[#443161]" : ""
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
          <p className="position-absolute">
            Please select an option to proceed.
          </p>
        )}
      </div>
    </div>
  );
}