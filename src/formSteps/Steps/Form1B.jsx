import BackNext from "@/components/Form/BackNext";
import { Button, KIND, SHAPE } from "baseui/button";


export default function Form1B({ nextStep, backStep }) {
  const handleNextClick = () => {
    nextStep();
  };

  const handleBackClick = () => {
    backStep();
  };

  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <p className="text-center text-4xl font-medium">Basic Info</p>
      <p className="text-center text-xl font-light">
        This section will ask you basic info about your academic status at
        Northwestern to help determine courses that fit you.
      </p>
      <BackNext
        handleBackClick={handleBackClick}
        handleNextClick={handleNextClick}
        is_centered={true}
      />
    </div>
  );
}

