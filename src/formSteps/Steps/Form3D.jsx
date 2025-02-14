import { useState } from "react";
import BackNext from "@/components/Form/BackNext";
import { Button } from "@/components/ui/button";
export default function Form3D({ currDay, updateFormData, nextStep, backStep }) {
  const days = [
    "Monday / Wednesday / Friday",
    "Tuesday / Thursday",
    "No Preference",
  ];
  const [selectedDay, setSelectedDay] = useState(days.indexOf(currDay));

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

  return (
    <div className="fixed inset-0 mt-20 mb-0 min-h-screen">
      <div className="flex flex-col justify-center items-center w-1/2 bg-white h-full">
        <img
          className="block h-[150%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
          src="/NorthwesternN.png"
        />
        <div className="w-7/8 grid gap-2 relative z-10">
          <h2>I am looking for a course that meets on:</h2>
          {days.map((day, index) => (
            <Button
              key={index}
              className="flex items-center justify-start py-3 border outline-none hover:bg-gray-100"
              onClick={() => handleDayClick(index + 1)}
            >
              <div
                className={`aspect-square h-5 w-5 rounded-[15%] border border-[#999999] ml-4 ${
                  selectedDay === index + 1 ? "border-4 border-[#443161]" : ""
                }`}
              ></div>
              <span className="ml-3 text-left text-xl">
                {day}
              </span>
            </Button>
          ))}
          <BackNext
            handleBackClick={handleBackClick}
            handleNextClick={handleNextClick}
          />
          {errorState && (
            <p className="absolute">
              Please select an option to proceed.
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