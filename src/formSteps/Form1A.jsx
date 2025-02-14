import React from "react";
import { Button } from "@/components/ui/button";


function Form1A({ nextStep }) {
  const handleStartClick = () => {
    nextStep();
  };

  return (
    <div className="flex flex-col justify-center">
      <p className="text-5xl font-medium">Find your next course in under 5 minutes.</p>
      <p className="text-xl font-light">
        Tell us about what you're looking for in upcoming classes, which
        requirements you'd like to fulfill, and previous courses you've taken.
      </p>
      <Button variant="secondary" size="lg" className="w-full" onClick={handleStartClick}>
        Start Assessment
      </Button>
    </div>
  );
}

export default Form1A;