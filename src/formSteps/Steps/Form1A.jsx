import { Button, KIND, SHAPE } from "baseui/button";

export default function Form1A({ nextStep }) {
  const handleStartClick = () => {
    nextStep();
  };

  return (
    <div className="flex flex-col justify-center space-y-4">
      <p className="text-4xl font-medium">Find your next course in under 5 minutes.</p>
      <p className="text-xl font-light">
        Tell us about what you're looking for in upcoming classes, which
        requirements you'd like to fulfill, and previous courses you've taken.
      </p>
      <Button kind={KIND.secondary} shape={SHAPE.pill} onClick={handleStartClick}>
        Start Assessment
      </Button>
    </div>
  );
}