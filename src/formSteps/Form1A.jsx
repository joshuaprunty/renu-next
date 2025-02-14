
import React from "react";
import { Button } from "@/components/ui/button";


function Form1A({ nextStep }) {
  const handleStartClick = () => {
    nextStep();
  };

  return (
    <div className="flex flex-col justify-center items-center w-1/2">
      <div className="w-7/8 d-grid gap-2">
        <h1>Find your next course in under 5 minutes.</h1>
        <p>
          Tell us about what you're looking for in upcoming classes, which
          requirements you'd like to fulfill, and previous courses you've taken.
        </p>
        <Button variant="secondary" size="lg" onClick={handleStartClick}>
          Start Assessment
        </Button>
      </div>
    </div>
  );
}

export default Form1A;