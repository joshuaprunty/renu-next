import { useState } from "react";
import BackNext from "@/components/Form/BackNext";

export default function Form2D({ currFulfill, updateFormData, nextStep, backStep }) {
  const fulfills = ["Distribution", "Major/Minor", "Elective"];

  const [selectedFulfills, setSelectedFulfills] = useState(
    fulfills.indexOf(currFulfill) + 1
  );

  const [errorState, setErrorState] = useState(false);

  function handleFulfillsClick(fulfillIndex) {
    setSelectedFulfills(fulfillIndex);
    setErrorState(false);
    updateFormData({ fulfills: fulfills[fulfillIndex - 1] });
  }

  const handleNextClick = () => {
    if (selectedFulfills != 0) {
      updateFormData({ fulfills: fulfills[selectedFulfills - 1] });
      console.log(selectedFulfills);
      nextStep();
    } else {
      setErrorState(true);
    }
  };

  const handleBackClick = () => {
    backStep();
  };

  return (
    <div className="flex flex-col justify-center items-center w-1/2">
      <div className="w-7/8 grid gap-2 relative z-2">
        <h2>What requirement(s) are you looking to fulfill?</h2>
        {fulfills.map((fulfill, index) => (
          <button
            key={index}
            className={`flex items-center py-3 border outline-none ${
              selectedFulfills === index + 1 ? "border-gray-500" : "border-gray-200"
            }`}
            onClick={() => handleFulfillsClick(index + 1)}
          >
            <div
              className={`aspect-square h-5 w-5 rounded-[15%] border border-[#999999] ml-4 ${
                selectedFulfills === index + 1 ? "border-4 border-[#443161]" : ""
              }`}
            ></div>
            <span className="text-start ml-3 lg:ml-5 text-xl">
              {fulfill}
            </span>
          </button>
        ))}
        <BackNext
          handleBackClick={handleBackClick}
          handleNextClick={handleNextClick}
          is_centered={false}
        />
        {errorState && (
          <p className="absolute">
            Please select at least one requirement area to proceed.
          </p>
        )}
      </div>
    </div>
  );
}