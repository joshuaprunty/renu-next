import { useState } from "react";
import BackNext from "@/components/Form/BackNext";
import { years } from "@/lib/constants";
import { Button, KIND } from "baseui/button";
// import { RadioGroup, Radio, ALIGN } from "baseui/radio";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


export default function Form2A({ currYear, updateFormData, nextStep, backStep }) {
  const [selectedYear, setSelectedYear] = useState(years.indexOf(currYear) + 1);
  const [errorState, setErrorState] = useState(false);
  const [value, setValue] = useState("1");
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
      <div className="flex flex-col justify-center items-center w-full space-y-4">
        <h2>Your class at NU (Current or Incoming):</h2>
        {/* {years.map((year, index) => (
          <Button
            key={index}
            kind={KIND.secondary}
            overrides={{
              BaseButton: {
                style: ({ $theme }) => ({
                  width: '320px',
                  backgroundColor: 'transparent',
                  borderColor: selectedYear === index + 1 ? $theme.colors.primary : $theme.colors.buttonSecondaryBorder,
                  borderWidth: selectedYear === index + 1 ? '2px' : '1px',
                  ':hover': {
                    backgroundColor: 'rgba(68, 49, 97, 0.05)',
                    borderColor: selectedYear === index + 1 ? $theme.colors.primary : $theme.colors.buttonSecondaryBorder,
                  }
                })
              },
              Root: {
                style: {
                  marginBottom: '8px'
                }
              }
            }}
            onClick={() => handleYearClick(index + 1)}
          >
            <div className="w-full flex items-center">
              <div
                className={`aspect-square h-5 w-5 rounded-[15%] border ${
                  selectedYear === index + 1 
                    ? "border-4 border-[#443161]" 
                    : "border-[#999999]"
                }`}
              />
              <span className="ml-5 text-xl font-light">{year}</span>
            </div>
          </Button>
        ))} */}
        {/* <RadioGroup
          value={value}
          onChange={e => setValue(e.currentTarget.value)}
          name="number"
          align={ALIGN.vertical}
        >
          {years.map((year, index) => (
            <Radio key={index} value={year}>
              {year}
            </Radio>
          ))}
        </RadioGroup> */}
        <RadioGroup defaultValue="option-one">
          {years.map((year, index) => (
            <div className="flex items-center space-x-2 p-6">
              <RadioGroupItem value={year} id={year} />
              <Label htmlFor={year}>{year}</Label>
            </div>  
          ))}
        </RadioGroup>

        <BackNext
          handleBackClick={handleBackClick}
          handleNextClick={handleNextClick}
          is_centered={false}
        />
        {errorState && (
          <p className="text-red-500">
            Please select a year to proceed.
          </p>
        )}
      </div>
    </>
  );
}