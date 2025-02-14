import { useState } from "react";
import BackNext from "@/components/Form/BackNext";
import { schools } from "@/lib/constants";
import { Button } from "@/components/ui/button";
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
        <div className="w-7/8 grid gap-2 relative z-2">
          <h2>Your School/College:</h2>
          {schools.map((school, index) => (
            <Button
              key={index}
              className={`flex items-center justify-start py-3 border outline-none ${
                selectedSchool === index + 1 ? "border-gray-500" : "border-gray-200"
              }`}
              onClick={() => handleSchoolClick(index + 1)}
            >
              <div
                className={`aspect-square h-5 w-5 rounded-[15%] border border-[#999999] ml-4 ${
                  selectedSchool === index + 1 ? "border-4 border-[#443161]" : ""
                }`}
              ></div>
              <span className="ml-3 lg:ml-5 text-xl">
                {school}
              </span>
            </Button>
          ))}
          <BackNext
            handleBackClick={handleBackClick}
            handleNextClick={handleNextClick}
            is_centered={false}
          />
          {errorState && (
            <p className="absolute">
              Please select a school to proceed.
            </p>
          )}
        </div>
      </div>
    </>
  );
}