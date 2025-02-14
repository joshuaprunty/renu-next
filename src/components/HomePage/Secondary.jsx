import "@/styles/Home.css";

export default function Secondary() {
  const cardData = [
    {
      title: "Tell us about your current class search",
      text: "Fill out info like what distro and major requirements you want to satisfy, classes already taken, and how many hours a week you want to spend on the class.",
    },
    {
      title: "Get class recommendations selected by our algorithm",
      text: "Renu uses Northwestern course data APIs to get up to date info on class offerings, and considers a range of factors to find the ones that will best fit your search.",
    },
    {
      title: "Like or dislike recommendations to improve future searches",
      text: "Machine Learning allows Renu to constantly improve its recommendations based on student input.",
    },
  ];

  return (
    <>
      <div className="bg-white flex justify-center items-center py-[6rem]" id="secondary-div">
        <div className="container-lg">
          <p className="text-5xl text-center">How Renu Works</p>
          <hr className="w-2/3 mx-auto mt-0 mb-[20px] text-black" />
          <div className="row justify-content-center text-center px-2">
            {cardData.map((data, index) => (
              <div key={index} className="col-11 col-md-4 my-3 my-md-2">
                <div className="card h-100 py-3 px-lg-3">
                  <div className="card-body">
                    <h5 className="fs-4 h-[3.5em] font-weight-400 mb-4">{data.title}</h5>
                    <p className="fs-4 h-[50%] fw-light mb-md-5">
                      {data.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="line"></div>
    </>
  );
}
