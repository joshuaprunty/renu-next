
import "@/styles/Home.css";

export default function Hero() {
  return (
    <>
      <div className="hero-top-spacer w-100 bg-dark"></div>
      <div className="hero-div" id="hero-div">
        <div className="hero-div container-lg" id="hero-div">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 text-white text-center m-auto">
              <h1 className="hero-header mb-4">
                Find your next class without the guesswork.
              </h1>
              <p className="myfw fs-3 mb-4">
                Get tailored recommendations for major requirements, distros,
                and more.
              </p>
              <a href="./form" className="btn btn-outline-light btn-lg">
                <p className="myfw fixie">Get Started</p>
              </a>
            </div>
            <div className="col-12 col-md-5 fw-light text-center">
              <img
                src="src/assets/HeroCard.png"
                className="hero-img align-self-center"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
