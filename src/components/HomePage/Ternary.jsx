import "@/styles/Home.css";

export default function Ternary() {
  return (
    <div className="bg-white" id="ternary-div">
      <div className="container-lg py-5 px-6">
        <p className="text-5xl text-center">Built for every student</p>
        <hr className="secondary-hr" />
        <div className="row mt-4 px-4 text-center">
          <div className="col-lg-9 g-0 g-md-3">
            <div className="ternary-card w-100">
              <img className="tc-img" src="/WCWelcome.png" />
              <div className="tc-text">
                <p className="text-3xl font-light">Incoming First-Years</p>
                <p className="text-xl font-light">
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
                <p className="text-3xl font-light">Current Undergrads</p>
                <p className="text-xl font-light">
                  Find the best courses for you based on your favorite (and
                  least favorite) past classes.
                </p>
              </div>
              <img className="tc-img" src="/Undergrads.png" />
            </div>
          </div>
          <div className="col-lg-9 g-0 g-md-3">
            <div className="ternary-card w-100">
              <img className="tc-img" src="/Kellogg.png" />
              <div className="tc-text">
                <p className="text-3xl font-light">Graduate Students</p>
                <p className="text-xl font-light">
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