"use client";

import { useState, useEffect } from "react";
import Form1A from "@/formSteps/Steps/Form1A";
import Form1B from "@/formSteps/Steps/Form1B";
import Form2A from "@/formSteps/Steps/Form2A";
import Form2B from "@/formSteps/Steps/Form2B";
import Form2C from "@/formSteps/Steps/Form2C";
import Form2D from "@/formSteps/Steps/Form2D";
import Form3B from "@/formSteps/Steps/Form3B";
import FormLoad from "@/formSteps/Common/FormLoad";
import FormResults from "@/formSteps/Common/FormResults";
import { processFormData } from "@/service/processFormData";

export default function FormWrapper() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    year: null,
    school: null,
    majors: [],
    fulfills: [],
    diff: null,
  });
  const [scores, setScores] = useState([]);
  useEffect(() => {
    if (currentStep === 8) {
      setTimeout(() => {
        setCurrentStep(9);
      }, 3000);
    }
  }, [scores]);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
    console.log(currentStep);
  };

  const nextStepCalc = () => {
    console.log(formData);
    setCurrentStep(8);
    const calculatedScores = processFormData(formData);
    setScores(calculatedScores);
  };

  const backStep = () => setCurrentStep(currentStep - 1);

  const updateFormData = (newData) => {
    setFormData({ ...formData, ...newData });
    console.log("updating with", newData);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Form1A nextStep={nextStep} />;
      case 2:
        return <Form1B nextStep={nextStep} backStep={backStep} />;
      case 3:
        return (
          <Form2A
            currYear={formData.year}
            updateFormData={updateFormData}
            nextStep={nextStep}
            backStep={backStep}
          />
        );
      case 4:
        return (
          <Form2B
            currSchool={formData.school}
            updateFormData={updateFormData}
            nextStep={nextStep}
            backStep={backStep}
          />
        );
      case 5:
        return (
          <Form2C
            currSchool={formData.school}
            currMajors={formData.majors}
            updateFormData={updateFormData}
            nextStep={nextStep}
            backStep={backStep}
          />
        );
      case 6:
        return (
          <Form2D
            currFulfill={formData.fulfills}
            updateFormData={updateFormData}
            nextStep={nextStep}
            backStep={backStep}
          />
        );
      case 7:
        return (
          <Form3B
            currDiff={formData.fulfills}
            updateFormData={updateFormData}
            nextStep={nextStepCalc}
            backStep={backStep}
          />
        );
      case 8:
        return <FormLoad />;
      case 9:
        return <FormResults scores={scores} />;
      default:
        return <div>Form Error.</div>;
    }
  };

  return <div className="h-screen max-w-[100rem] border border-red-500 mx-auto px-4 flex flex-col justify-center items-center">{renderStep()}</div>;
}

