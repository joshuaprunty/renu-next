
import React from "react";
import BackNext from "../components/Form/BackNext";

function Form1B({ nextStep, backStep }) {
  const handleNextClick = () => {
    nextStep();
  };

  const handleBackClick = () => {
    backStep();
  };

  return (
    <div className="flex flex-col justify-center items-center w-1/2">
      <div className="w-7/8 d-grid gap-2 position-relative z-2">
        <h1 className="text-center">Basic Info</h1>
        <p className="text-center">
          This section will ask you basic info about your academic status at
          Northwestern to help determine courses that fit you.
        </p>
        <BackNext
          handleBackClick={handleBackClick}
          handleNextClick={handleNextClick}
          is_centered={true}
        />
      </div>
    </div>
  );
}


export default Form1B;
