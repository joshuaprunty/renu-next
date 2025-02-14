
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
      <div className="bg-white flex justify-center items-center py-24" id="secondary-div">
        <div className="container mx-auto px-4">
          <p className="text-5xl text-center">How Renu Works</p>
          <hr className="w-2/3 mx-auto mt-0 mb-5 text-black" />
          <div className="flex flex-wrap justify-center text-center px-2">
            {cardData.map((data, index) => (
              <div key={index} className="w-11/12 md:w-1/3 my-3 md:my-2">
                <div className="h-full py-3 px-lg-3 border rounded-lg shadow">
                  <div className="p-4">
                    <h5 className="text-2xl h-[3.5em] font-normal mb-4">{data.title}</h5>
                    <p className="text-2xl h-[50%] font-light mb-0 md:mb-5">
                      {data.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-gray-200 w-full"></div>
    </>
  );
}

