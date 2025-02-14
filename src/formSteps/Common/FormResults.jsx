export default function FormResults({ scores }) {
  return (
    <div className="flex flex-col justify-center items-center w-1/2">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="my-3">Results</h1>
        <hr className="w-2/3 mx-auto mt-0 mb-5 text-black" />
        {scores.slice(0, 10).map((score, index) => (
          <div 
            key={index} 
            className="w-[70%] h-[70px] border border-[#dddddd] rounded-md p-4 pt-5 my-2
                     flex flex-col justify-start items-start
                     transition-[height] duration-400 ease-in-out
                     hover:h-[150px] group"
          >
            <div className="flex justify-between items-center w-full">
              <h3>{score.title}</h3>
              <h5>Score: {score.finalScore.toFixed(1)}</h5>
            </div>
            <p className="mt-2 opacity-0 transition-opacity duration-600 ease-in-out group-hover:opacity-100">
              Overall Rating: {score.ratingOverall}
            </p>
            <p className="opacity-0 transition-opacity duration-600 ease-in-out group-hover:opacity-100">
              Average Hours/Week: {score.hrsPerWeek}
            </p>
            <p className="opacity-0 transition-opacity duration-600 ease-in-out group-hover:opacity-100">
              Largest Demographic: {score.maxDemo.maxKey} ({score.maxDemo.mvString})
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}