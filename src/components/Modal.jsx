export default function Modal() {
  return (
    <div
      className="modal fade"
      id="about-modal"
      tabindex="-1"
      aria-labelledby="about-modal-heading"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header border-0">
            <div className="m-auto text-center">
              <h1 className="text-center text-3xl font-bold text-[#443161]" id="about-modal-heading">
                renu.
              </h1>
              <p className="font-thin text-xl">Version 0.0.1</p>
            </div>
            <button
              type="button"
              className="btn-close position-absolute end-0 me-3"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body d-grid gap-3 px-5">
            <button className="btn btn-outline-dark fw-light mx-4">
              Learn More
            </button>
            <button className="btn btn-outline-dark fw-light mx-4">
              Source Code
            </button>
            <button className="btn btn-outline-dark fw-light mx-4">
              Changelog
            </button>
          </div>
          <div className="modal-footer text-center border-0">
            <a href="#" className="text-body fw-light text-sm m-auto">
              Designed and built by Joshua Prunty
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}