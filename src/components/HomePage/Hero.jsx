import "@/styles/Home.css";

export default function Hero() {
  return (
    <>
      <div className="hero-top-spacer w-full bg-dark"></div>
      <div className="hero-div">
        <div className="hero-div container mx-auto px-4">
          <div className="flex items-center flex-wrap">
            <div className="w-full md:w-1/2 text-white text-center mx-auto">
              <h1 className="text-5xl font-light mb-4">
                Find your next class without the guesswork.
              </h1>
              <p className="font-light text-2xl mb-4">
                Get tailored recommendations for major requirements, distros,
                and more.
              </p>
              <a href="./form" className="inline-block border border-white text-white px-6 py-3 text-lg hover:bg-white hover:text-dark">
                <p className="font-light pb-0 m-0">Get Started</p>
              </a>
            </div>
            <div className="w-full md:w-5/12 font-light text-center">
              <img
                src="/HeroCard.png"
                className="w-10/12 lg:w-3/4 mt-[45px] lg:mt-0 h-auto mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
