import { useState } from "react";
import BackNext from "@/components/Form/BackNext";
import { Button } from "@/components/ui/button";
export default function Form3C({ currLoc, updateFormData, nextStep, backStep }) {
  const locs = [
    "North Campus",
    "Central Campus",
    "South Campus",
    "No Preference",
  ];
  const [selectedLoc, setSelectedLoc] = useState(locs.indexOf(currLoc));
  const [errorState, setErrorState] = useState(false);

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

  return (
    <div className="fixed inset-0 mt-20 mb-0 min-h-screen">
      <div className="flex flex-col justify-center items-center w-1/2 bg-white h-full">
        <img
          className="block h-[150%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
          src="/NorthwesternN.png"
        />
        <div className="w-7/8 grid gap-2 relative z-10">
          <h2>I am looking for a course that is located on/near:</h2>
          {locs.map((loc, index) => (
            <Button
              key={index}
              className="flex items-center justify-start py-3 border outline-none hover:bg-gray-100"
              onClick={() => handleLocClick(index + 1)}
            >
              <div
                className={`aspect-square h-5 w-5 rounded-[15%] border border-[#999999] ml-4 ${
                  selectedLoc === index + 1 ? "border-4 border-[#443161]" : ""
                }`}
              ></div>
              <span className="ml-3 text-left text-xl">
                {loc}
              </span>
            </Button>
          ))}
          <BackNext
            handleBackClick={handleBackClick}
            handleNextClick={handleNextClick}
          />
          {errorState && (
            <p className="absolute">
              Please select a location to proceed.
            </p>
          )}
        </div>
      </div>
      <div className="w-1/6 bg-black mx-auto absolute top-0 right-0 h-full pt-2 px-4 text-center text-white mb-0">
        <div className="h-full"></div>
        <div className="h-full"></div>
      </div>
    </div>
  );
}