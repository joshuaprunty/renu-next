
export default function BackNext({ handleBackClick, handleNextClick, is_centered }) {
  return (
    <div className="row">
      {is_centered ? (
        <div className="col-12 d-flex justify-content-center my-3">
          <button
            onClick={handleBackClick}
            className="btn btn-secondary btn-lg mx-2 px-5"
            id="back-assessment-button"
          >
            Back
          </button>
          <button
            onClick={handleNextClick}
            className="btn btn-secondary btn-lg mx-2 px-5"
            id="start-assessment-button"
          >
            Next
          </button>
        </div>
      ) : (
        <>
          <div className="col-sm-4"></div>
          <div className="col-12 col-sm-8 d-flex justify-content-center justify-content-md-end my-3">
            <button
              onClick={handleBackClick}
              className="btn btn-secondary btn-lg mx-2 px-5"
              id="back-assessment-button"
            >
              Back
            </button>
            <button
              onClick={handleNextClick}
              className="btn btn-secondary btn-lg ms-2 px-5"
              id="start-assessment-button"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
