import BackNext from "@/components/Form/BackNext";

export default function Form1B({ nextStep, backStep }) {
  const handleNextClick = () => {
    nextStep();
  };

  const handleBackClick = () => {
    backStep();
  };

  return (
    <div className="flex flex-col justify-center items-center w-1/2">
      <p className="text-center text-4xl font-medium my-6">Basic Info</p>
      <p className="text-center my-6">
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