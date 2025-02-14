import { useState } from "react";
import BackNext from "@/components/Form/BackNext";
import { years } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export default function Form2A({ currYear, updateFormData, nextStep, backStep }) {
  const [selectedYear, setSelectedYear] = useState(years.indexOf(currYear) + 1);
  const [errorState, setErrorState] = useState(false);
  const handleYearClick = (yearIndex) => {
    setSelectedYear(yearIndex);
  };
  const handleNextClick = () => {
    if (selectedYear != 0) {
      updateFormData({ year: years[selectedYear - 1] });
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
          <h2>Your class at NU (Current or Incoming):</h2>
          {years.map((year, index) => (
            <Button
              key={index}
              className={`flex items-center justify-start py-3 border outline-none ${
                selectedYear === index + 1 ? "border-gray-500" : "border-gray-200"
              }`}
              onClick={() => handleYearClick(index + 1)}
            >
              <div
                className={`aspect-square h-5 w-5 rounded-[15%] border border-[#999999] ml-4 ${
                  selectedYear === index + 1 ? "border-4 border-[#443161]" : ""
                }`}
              ></div>
              <span className="ml-3 lg:ml-5 text-xl">{year}</span>
            </Button>
          ))}
          <BackNext
            handleBackClick={handleBackClick}
            handleNextClick={handleNextClick}
            is_centered={false}
          />
          {errorState && (
            <p className="absolute">
              Please select a year to proceed.
            </p>
          )}
        </div>
      </div>
    </>
  );
}