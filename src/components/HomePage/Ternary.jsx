import "@/styles/Home.css";

export default function Ternary() {
  return (
    <div className="ternary-div" id="ternary-div">
      <div className="container-lg py-5 px-6">
        <p className="second-header text-center">Built for every student</p>
        <hr className="secondary-hr" />
        <div className="row mt-4 px-4 text-center">
          <div className="col-lg-9 g-0 g-md-3">
            <div className="ternary-card w-100">
              <img className="tc-img" src="src/assets/WCWelcome.png" />
              <div className="tc-text">
                <p className="tc-head">Incoming First-Years</p>
                <p className="tc-body">
                  Get a head-start on class selections for your first quarter at
                  Northwestern.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3"></div>
          <div className="col-lg-3"></div>
          <div className="col-lg-9 g-0 g-md-3">
            <div className="ternary-card w-100">
              <div className="tc-text">
                <p className="tc-head">Current Undergrads</p>
                <p className="tc-body">
                  Find the best courses for you based on your favorite (and
                  least favorite) past classes.
                </p>
              </div>
              <img className="tc-img" src="src/assets/Undergrads.png" />
            </div>
          </div>
          <div className="col-lg-9 g-0 g-md-3">
            <div className="ternary-card w-100">
              <img className="tc-img" src="src/assets/Kellogg.png" />
              <div className="tc-text">
                <p className="tc-head">Graduate Students</p>
                <p className="tc-body">
                  Continue on your journey with specialized recommendations.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>
    </div>
  );
}