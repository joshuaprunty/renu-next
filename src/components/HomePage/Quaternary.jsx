import "@/styles/Home.css";

export default function Quaternary() {
  return (
    <div className="quaternary-div" id="quaternary-div">
      <div className="container-lg d-flex flex-direction-col justify-content-center">
        <img className="quat-background-img" src="/NorthwesternN.png" />
        <div className="position-relative z-2 w-100">
          <div className="row h-100 align-content-center">
            <div className="col-sm-2"></div>
            <div className="col-sm-8 justify-content-center text-center ms-auto">
              <h2 className="text-white text-center font-light mb-4">
                Find your next class now
              </h2>
              <a href="./form" className="btn btn-light btn-lg">
                Get Started
              </a>
            </div>
            <div className="col-sm-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
