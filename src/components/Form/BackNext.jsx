
import { Button } from "@/components/ui/button";

export default function BackNext({ handleBackClick, handleNextClick, is_centered }) {
  return (
    <div className="row">
      {is_centered ? (
        <div className="col-12 d-flex justify-content-center my-3">
          <Button
            onClick={handleBackClick}
            className="mx-2 px-5"
            id="back-assessment-button"
          >
            Back
          </Button>
          <Button
            onClick={handleNextClick}
            className="mx-2 px-5"
            id="start-assessment-button"
          >
            Next
          </Button>
        </div>
      ) : (
        <>
          <div className="col-sm-4"></div>
          <div className="col-12 col-sm-8 d-flex justify-content-center justify-content-md-end my-3">
            <Button
              onClick={handleBackClick}
              className="mx-2 px-5"
              id="back-assessment-button"
            >
              Back
            </Button>
            <Button
              onClick={handleNextClick}
              className="ms-2 px-5"
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
