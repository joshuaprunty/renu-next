import { useState } from "react";
import BackNext from "@/components/Form/BackNext";
import { Button } from "@/components/ui/button";
export default function Form3E({ currTime, updateFormData, nextStep, backStep }) {
  const times = ["Morning", "Afternoon", "Evening", "No Preference"];
  const [selectedTime, setSelectedTime] = useState(times.indexOf(currTime));

  const handleNextClick = () => {
    if (selectedTime != -1) {
      updateFormData({ time: times[selectedTime - 1] });
      nextStep();
    } else {
      setErrorState(true);
    }
  };
  const [errorState, setErrorState] = useState(false);

  const handleBackClick = () => {
    backStep();
  };

  function handleTimeClick(timeIndex) {
    setSelectedTime(timeIndex);
  }

  return (
    <div className="fixed inset-0 mt-20 mb-0 min-h-screen">
      <div className="flex flex-col justify-center items-center w-1/2 bg-white h-full">
        <img
          className="block h-[150%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
          src="/NorthwesternN.png"
        />
        <div className="w-7/8 grid gap-2 relative z-10">
          <h2>I am looking for a course that meets in the:</h2>
          {times.map((time, index) => (
            <Button
              key={index}
              className="flex items-center justify-start py-3 border outline-none hover:bg-gray-100"
              onClick={() => handleTimeClick(index + 1)}
            >
              <div
                className={`aspect-square h-5 w-5 rounded-[15%] border border-[#999999] ml-4 ${
                  selectedTime === index + 1 ? "border-4 border-[#443161]" : ""
                }`}
              ></div>
              <span className="ml-3 text-left text-xl">
                {time}
              </span>
            </Button>
          ))}
          <BackNext
            handleBackClick={handleBackClick}
            handleNextClick={handleNextClick}
          />
          {errorState && (
            <p className="absolute">
              Please select a time to proceed.
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