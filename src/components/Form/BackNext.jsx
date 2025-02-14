import { Button, KIND, SHAPE } from "baseui/button";

export default function BackNext({ handleBackClick, handleNextClick, is_centered }) {
  return (
    <div className="flex">
      {is_centered ? (
        <div className="w-full flex justify-center my-3 space-x-6">
          <Button
            onClick={handleBackClick}
            kind={KIND.secondary}
            overrides={{
              BaseButton: {
                style: {
                  paddingLeft: '6rem',
                  paddingRight: '6rem',
                }
              }
            }}
            id="back-assessment-button"
          >
            Back
          </Button>
          <Button
            onClick={handleNextClick}
            kind={KIND.secondary}
            overrides={{
              BaseButton: {
                style: {
                  paddingLeft: '6rem',
                  paddingRight: '6rem',
                }
              }
            }}
            id="start-assessment-button"
          >
            Next
          </Button>
        </div>
      ) : (
        <>
          <div className="sm:w-1/3"></div>
          <div className="w-full sm:w-2/3 flex justify-center md:justify-end my-3 space-x-6">
            <Button
              onClick={handleBackClick}
              kind={KIND.secondary}
              overrides={{
                BaseButton: {
                  style: {
                    paddingLeft: '6rem',
                    paddingRight: '6rem',
                  }
                }
              }}
              id="back-assessment-button"
            >
              Back
            </Button>
            <Button
              onClick={handleNextClick}
              kind={KIND.secondary}
              overrides={{
                BaseButton: {
                  style: {
                    paddingLeft: '6rem',
                    paddingRight: '6rem',
                  }
                }
              }}
              id="start-assessment-button"
            >
              Next
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
