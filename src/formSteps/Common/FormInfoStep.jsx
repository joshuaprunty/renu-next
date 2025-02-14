import BackNext from "@/components/Form/BackNext";

export default function FormInfoStep({ nextStep, backStep, heading, subheading }) {
  const handleNextClick = () => {
    nextStep();
  };

  const handleBackClick = () => {
    backStep();
  };

  return (
    <div className="flex flex-col justify-center items-center w-1/2">
      <div className="w-7/8 grid gap-2 relative z-2">
        <h1 className="text-center">{heading}</h1>
        <p className="text-center">{subheading}</p>
        <BackNext
          handleBackClick={handleBackClick}
          handleNextClick={handleNextClick}
          is_centered={true}
        />
      </div>
    </div>
  );
}