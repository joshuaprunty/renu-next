import { useState } from "react";
import BackNext from "@/components/Form/BackNext";
import { Button } from "@/components/ui/button";

export default function FormSelectStep({
  heading,
  options,
  currSelection,
  updateFormData,
  nextStep,
  backStep,
  datakey,
}) {
  const [selectedOption, setselectedOption] = useState(
    options.indexOf(currSelection) + 1
  );
  
  const [errorState, setErrorState] = useState(false);

  const handleOptionClick = (optionindex) => {
    setselectedOption(optionindex);
  };

  const handleNextClick = () => {
    if (selectedOption != 0) {
      updateFormData({ [datakey]: options[selectedOption - 1] });
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
        <div className="w-7/8 grid gap-2 relative z-2">
          <h2>{heading}</h2>
          {options.map((option, index) => (
            <Button
              key={index}
              className={`flex items-center justify-start py-3 border ${
                selectedOption === index + 1 ? "border-gray-500" : "border-gray-200"
              }`}
              onClick={() => handleOptionClick(index + 1)}
            >
              <div
                className={`aspect-square h-5 w-5 rounded-[15%] border border-[#999999] ml-4 ${
                  selectedOption === index + 1 ? "border-4 border-[#443161]" : ""
                }`}
              ></div>
              <span className="ml-3 text-left text-xl">
                {option}
              </span>
            </Button>
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